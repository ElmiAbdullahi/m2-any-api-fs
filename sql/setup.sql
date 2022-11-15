-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    make VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    year INT NOT NULL
);

INSERT INTO cars (make, model, year)
VALUES
('toyota', 'corolla', 1996),
('Lexus', 'IS500', 2022),
('BMW', 'M5', 2018),
('Audi', 'RS7', 2020),
('Chevorlet Corvette','ZR1', 2019);

DROP TABLE IF EXISTS books2e;

CREATE TABLE books2 (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    published INT NOT NULL
);

INSERT INTO books2 (title, author, published)
VALUES
('all about love', 'bell hooks', 2000),
('as a man thinketh', 'james allen', 1903),
('48 laws of power', 'robert greene', 1998),
('the alchemist', 'paulo coelho', 1998),
('the body keeps score','bessel van der kolk', 2014);
