DROP TABLE IF EXISTS Trails;

CREATE TABLE Trails (
    ID SERIAL PRIMARY KEY, 
    TrailName VARCHAR(200),
    City VARCHAR(25),
    State VARCHAR(25),
    Map VARCHAR(100),
    Latitude DECIMAL(12,5),
    Longitude DECIMAL(12,5),
    UniqueID INTEGER
    );