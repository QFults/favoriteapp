DROP DATABASE IF EXISTS favorite_db;

CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL
);

CREATE TABLE songs (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  artist VARCHAR(30) NOT NULL
);
