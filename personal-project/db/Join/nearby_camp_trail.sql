SELECT fc.CampName AS CAMP_NAME, fc.City, fc.State, fc.Latitude AS Lat, fc.Longitude AS Lon, ft.TrailName AS TRAIL_NAME, ft.Latitude AS Lat, ft.Longitude AS Lon
FROM FavCamp fc, FavTrail ft
JOIN FavCamp ON fc.City = ft.City