CREATE DATABASE todo;

CREATE TABLE todos(
    "id" BIGSERIAL NOT NULL PRIMARY KEY,
    "titlu" VARCHAR(100) ,
    "status" VARCHAR(100) ,
    "responsabil" VARCHAR(100) ,
    "dataFinalizare" DATE ,
    "termenFINALIZARE" DATE 
);