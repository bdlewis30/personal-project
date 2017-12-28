CREATE TABLE FavoriteTrail (
    id SERIAL PRIMARY KEY, 
    TrailName VARCHAR(200),
    City VARCHAR(25),
    State VARCHAR(25),
    Description VARCHAR(1000),
    Map VARCHAR(1000),
    Latitude DECIMAL(12,5),
    Longitude DECIMAL(12,5),
    FavoriteTrail VARCHAR(200)
    );