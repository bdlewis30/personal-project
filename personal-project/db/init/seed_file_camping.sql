CREATE TABLE FavoriteCamping (
    id SERIAL PRIMARY KEY, 
    CampName VARCHAR(200),
    City VARCHAR(25),
    State VARCHAR(25),
    Description VARCHAR(1000),
    Map VARCHAR(1000),
    Latitude DECIMAL(12,5),
    Longitude DECIMAL(12,5),
    FavoriteCamping VARCHAR(200)
    );

    INSERT INTO 