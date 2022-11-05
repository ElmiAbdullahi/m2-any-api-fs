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