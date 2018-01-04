UPDATE FavCamp
SET Description = $4
WHERE UniqueID = $7
RETURNING *;