DROP TABLE IF EXISTS FavCamp;

CREATE TABLE FavCamp (
    ID SERIAL PRIMARY KEY, 
    CampName VARCHAR(200),
    City VARCHAR(25),
    State VARCHAR(25),
    Description VARCHAR(1000),
    Latitude DECIMAL(12,5),
    Longitude DECIMAL(12,5),
    UniqueID INTEGER,
    Favorite VARCHAR(5)
    );

INSERT INTO FavCamp (CampName, City, State, Description, Latitude, Longitude, UniqueID, Favorite)
VALUES ("","", "", "", 0, 0, 0, "true"),
-- ("","", "", "", 0, 0, 0, "true"),
-- ("","", "", "", 0, 0, 0, "true")