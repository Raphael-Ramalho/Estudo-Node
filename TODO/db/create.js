import mysql from "mysql2"

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  //   connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
  //     if (err && err.code === "ER_DB_CREATE_EXISTS") {
  //       console.log("Db already created");
  //       process.exit(0);
  //     }

  //     if (err) {
  //       throw err;
  //     }

  //     console.log("Created db");
  //     process.exit(0);
  //   });
});
