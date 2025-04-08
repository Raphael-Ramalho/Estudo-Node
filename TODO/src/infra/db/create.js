import mysql from "mysql2";
import "dotenv/config";

export const DATABASE_NAME = "TODO_DB";

const connection = mysql.createConnection({
  host: process.env.TODO_DB_HOST,
  user: process.env.TODO_DB_USERNAME,
  password: process.env.TODO_DB_PASSWORD,
});

connection.connect((err) => {
  if (err) throw err;

  connection.query(`CREATE DATABASE ${DATABASE_NAME}`, (err, result) => {
    if (err && err.code === "ER_DB_CREATE_EXISTS") {
      console.log("Db already created");
      process.exit(0);
    }

    if (err) {
      throw err;
    }

    console.log("Created db");
    process.exit(0);
  });
});
