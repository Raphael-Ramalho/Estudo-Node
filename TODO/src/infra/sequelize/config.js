import Sequelize from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.TODO_DB_NAME,
  process.env.TODO_DB_USERNAME,
  process.env.TODO_DB_PASSWORD,
  {
    host: process.env.TODO_DB_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
