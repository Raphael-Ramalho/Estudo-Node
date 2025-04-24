import express from "express";
import { router } from "./src/infra/api/api.js";
import sequelize from "./src/infra/sequelize/config.js";

const app = express();

const startServer = () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("All models were synchronized successfully");
    })
    .catch((error) => {
      console.log("Error occurred during model synchronization: ", error);
    });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", router);
  app.listen(3001, () => console.log("server is running"));
};

(() => {
  startServer();
})();
