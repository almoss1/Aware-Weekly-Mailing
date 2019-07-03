-------------------------------------------------------------------------------
-- Query to get Average, Minimum and Maximum values for all outputtypes 
-- with Deployment Target Name
-------------------------------------------------------------------------------
SELECT
  *
FROM (
  SELECT
    sol.Name as solutionname,
    sol.TypeId as solutiontypeid,
    dt.Name as deploymenttargetname,
    dt.Id as deploymenttargetid,
    dt.BuildingId as buildingid,
    dt.SolutionId as solutionid,
    fac.FacName as buildingname
  FROM
    [awareiot].[dbo].[tblFacilities] as fac,
    [awareiot].[dbo].[IoTSolutions] as sol ,
    [awareiot].[dbo].[IoTDeploymentTargets] as dt
  WHERE dt.BuildingId=fac.FacID
    and sol.Id=dt.SolutionId
    and sol.TypeId=13 ) as alldevices
  LEFT JOIN (
    select
    deviceid,
    outputtype,
    avg(avgvalue) as average,
    min(minvalue) as minimum,
    max(maxvalue) as maximum,
    deploymenttargetid
  from
    [awareiot].[dbo].[hourlyaggregates]
  where solutiontypeid = 13 and createdate >= DATEADD(DAY, -1, GETUTCDATE())
  group by deviceid, outputtype, deploymenttargetid, solutionid, buildingid
    ) as currentdevices
  ON 
    currentdevices.deploymenttargetid=alldevices.deploymenttargetid
