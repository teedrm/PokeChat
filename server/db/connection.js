// PG database client/connection setup
const { Pool } = require('pg');

console.log("DATABASE", process.env.DB_NAME)
const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;