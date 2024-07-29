import mysql from "mysql";
import { config } from "dotenv";

config();

const pool = mysql.createPool({
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_ROOT_PASSWORD,
  database: process.env.MARIADB_NAME,
  host: process.env.MARIADB_HOST,
  port: Number(process.env.MARIADB_PORT),
});

export { pool };
