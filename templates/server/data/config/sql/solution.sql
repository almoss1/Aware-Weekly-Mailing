-- Declare @uid as int = 4626869 -- adminmarc in prod

SELECT
    --so.*
    [SolutionId] = so.Id
    , [BuildingId] = so.BuildingId
    , [BuildingName] = p.FacName
    -- , [UserId] = 'unknown' -- u.UserID
    , [SolutionName] = so.Name
    , [Subscription] = sut.Name
    , [EmailAddresses] = so.StaffSummaryEmailAddresses
    , [SendWeeklySummaryEmail]= so.SendWeeklySummaryEmail
    , [SendAsPDF] = so.SendAsPDF
FROM 
    awareiot.dbo.IoTSolutions AS so WITH (NOLOCK)
    INNER JOIN awareiot.dbo.tblFacilities AS p ON so.BuildingId = p.FacID
    -- INNER JOIN awareiot.dbo.tblUser AS u ON so.BuildingId = u.FacID
    -- LEFT JOIN awareiot.dbo.IoTSolutionStatuses as ss with (nolock) on so.StatusId = ss.Id
    LEFT JOIN awareiot.dbo.IoTSubscriptionStatuses as sut with (nolock) on so.SubscriptionStatusId = sut.Id

WHERE so.IsActive = 1
    --AND so.IsDemo = 0
    --AND p.FacAct = 1
    AND so.TypeId=13 
    -- AND u.parentuserid = @uid
ORDER BY so.BuildingId