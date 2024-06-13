import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.MYSQLHOST || "localhost",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || "",
    port: process.env.MYSQLPORT || 3306,
    database: process.env.MYSQLDATABASE || "institucion",
});

export default pool;
