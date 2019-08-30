---create database---
CREATE DATABASE crudnode;


USE crudnode;


CREATE TABLE book {
    ID int(6) unsigned auto_increment PRIMARY_KEY,
    NAME VARCHAR(50) NOT NULL,
    ISBN    VARCHAR(50) NOT NULL,
    GENRE VARCHAR(50) NOT NULL,
    DATE VARCHAR(50) NOT NULL,

};


show tables;

describe book;