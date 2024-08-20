import { config } from "dotenv";
import mysql from "mysql";

config();

const pool = mysql.createPool({
	user: process.env.MARIADB_USER,
	password: process.env.MARIADB_ROOT_PASSWORD,
	database: process.env.MARIADB_DATABASE,
	host: process.env.MARIADB_HOST,
	port: Number(process.env.MARIADB_PORT),
});

export { pool };
