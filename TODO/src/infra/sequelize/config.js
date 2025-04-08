import Sequelize from "sequelize";
import "dotenv/config";
import { logger } from "../utils/logger.js";

export const connection = new Sequelize(
  process.env.TODO_DB_NAME,
  process.env.TODO_DB_USERNAME,
  process.env.TODO_DB_PASSWORD,
  {
    host: process.env.TODO_DB_HOST,
    dialect: "mysql",
    logging: (msg) => logger.debug(msg),
  }
);

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

