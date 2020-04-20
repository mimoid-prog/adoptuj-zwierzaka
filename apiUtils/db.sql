CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(12) NOT NULL,
    password VARCHAR(80) NOT NULL,
    activated BOOLEAN NOT NULL,
    city VARCHAR(50)
);