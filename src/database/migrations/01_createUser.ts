import { DB } from "https://deno.land/x/sqlite/mod.ts"

const connect = new DB("./src/database/database.sqlite")

connect.query(`CREATE TABLE users 
  (id INTEGER PRIMARY KEY NOT NULL, 
  name VARCHAR NOT NULL, 
  email VARCHAR NOT NULL UNIQUE,
  age INTEGER NOT NULL,
  password VARCHAR NOT NULL)
`)