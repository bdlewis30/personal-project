INSERT INTO FavCamp(CampName, City, State, Description, Latitude, Longitude, UniqueID, Favorite)
VALUES($1,$2,$3,$4,$5,$6,$7,$8)
RETURNING *;