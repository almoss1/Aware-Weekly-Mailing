-------------------------------------------------------------------------------
-- Query to get alerts send over last 1 week. Also, gives you the email address
-- to which the weekly email needs to be sent out
-------------------------------------------------------------------------------
SELECT
  [AlertDate] = al.createdate
  , [AlertEmail] = al.email
  , [DeviceId] = al.deviceid
  , [BuildingId] = dt.BuildingId
  , [SolutionId] = cast(al.solutionid as Int)
  , [TargetId] = cast(al.deploymenttargetid as Int)
  , [Target] = dt.Name
  -- "outputtype": "21",
  -- "alertthreshold": 10,
  -- "sensoroutput": 25.5,
FROM
  [awareiot].[dbo].[alertsposted] as al,
  [awareiot].[dbo].[IoTDeploymentTargets] as dt
WHERE
  dt.Id = al.deploymenttargetid and
  al.createdate >= DATEADD(day,-7, GETDATE())

