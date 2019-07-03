-------------------------------------------------------------------------------
-- Status
--   Sensor Online/ Offile Status with Deployment Target Names
--   Solution Name/ Building Name
-------------------------------------------------------------------------------
SELECT
  [SolutionId] = SolutionId
  , [Target] = deploymenttargetname 
  , [DeviceId] = devid
  , [Voltage] = outputvalue
  , [Battery] = battery
  , [Online] = isonline
FROM (
  SELECT *,
    CASE
      WHEN lastposted < 5 THEN 1
      ELSE 0
    END AS 'IsOnline'
  FROM ( 
    (SELECT dt.NAME AS deploymenttargetname, dt.id AS DeploymenttargetIdentity, dt.solutionid AS SolutionId, dev.id AS devid
    FROM 
      [awareiot].[dbo].[iotsolutions] AS sol,
      [awareiot].[dbo].[iotdeploymenttargets] AS dt,
      [awareiot].[dbo].[iotdevices] AS dev
    WHERE  sol.id = dt.solutionid
      AND sol.typeid = 13
      AND dt.isactive = 1
      AND dt.id = dev.currentprimaryassignmentdeploymenttargetid) AS alldevices
    LEFT JOIN (SELECT *,
      Cast(Datediff(minute, gatewaytime, Getutcdate()) AS VARCHAR(100)) AS 'LastPosted'
    FROM (SELECT s.deviceid,
        [Battery] = Cast(CASE
          WHEN Sum(s.outputvalue) >= 2.9 THEN 100
          WHEN Sum(s.outputvalue) <= 2.1 THEN 0
          ELSE 100 - ( ( ( 2.9 - Sum(s.outputvalue) ) / .75 ) * 100 )
        END AS INTEGER),
        s.gatewaytime,
        s.outputvalue,
        s.deploymenttargetid,
        RNum=Row_number()
        OVER ( partition BY s.deviceid ORDER BY s.gatewaytime DESC)
      FROM [awareiot].[dbo].[samples] AS s
      WHERE  s.solutiontypeid = 13
        AND s.outputtype = 7
        AND s.gatewaytime >= Dateadd(hour, -1, Getutcdate())
        GROUP  BY s.deviceid, s.gatewaytime, s.outputvalue, s.deploymenttargetid) AS query1
        WHERE rnum = 1) AS currentdevices
    ON currentdevices.deploymenttargetid = alldevices.deploymenttargetidentity)) AS query 