DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR
)