-- Drop Database burgers_db if found
DROP DATABASE IF EXISTS burgers_db;

-- Create database
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create table burgers
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(35) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
);