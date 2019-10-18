-- Create Database
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (20) NOT NULL,
eaten BOOLEAN NOT NULL,
PRIMARY KEY (id)
)
