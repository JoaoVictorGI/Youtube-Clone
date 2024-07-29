import mysql from "mysql";
import { config } from "dotenv";

config();

const pool = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
});

export { pool };
