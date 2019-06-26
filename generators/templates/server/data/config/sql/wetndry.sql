-------------------------------------------------------------------------------
-- Query to get Current Wet / Dry Conditions with Deployment Target Name
-------------------------------------------------------------------------------
select 
  * 
from (
  select 
    sol.Name as solutionname, 
    sol.TypeId as solutiontypeid, 
    dt.Name as deploymenttargetname, 
    dt.Id as deploymenttargetid, 
    dt.BuildingId as buildingid, 
    dt.SolutionId as solutionid, 
    fac.FacName as buildingname 
  from 
    [awareiot].[dbo].[tblFacilities] as fac,
    [awareiot].[dbo].[IoTSolutions] as sol ,
    [awareiot].[dbo].[IoTDeploymentTargets] as dt 
  where 
    dt.BuildingId=fac.FacID 
    and sol.Id=dt.SolutionId 
    and sol.TypeId=13 ) as alldevices 
  LEFT JOIN (
    select *, CASE WHEN outputvalue =1 THEN 'Status : Wet' ELSE 'Status : Dry' END as 'RopeStatus' from(
    select s.deviceid, s.gatewayid, s.gatewaytime, s.outputtype, s.outputvalue, s.deploymenttargetid, RNum=ROW_NUMBER() OVER (PARTITION BY s.deviceid ORDER BY s.gatewaytime DESC)
    from [awareiot].[dbo].[samples] as s where s.solutiontypeid=13 and s.outputtype=20) as query1 where RNum=1) as currentdevices
ON 
currentdevices.deploymenttargetid=alldevices.deploymenttargetid;
