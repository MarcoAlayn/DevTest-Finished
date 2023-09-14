-- Crear la base de datos "overcast_test"
CREATE DATABASE overcast_test;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS "Users" (
  "id" SERIAL PRIMARY KEY,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  "image" VARCHAR(255),
  "email" VARCHAR(255)
);




