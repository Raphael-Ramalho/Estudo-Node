import express from "express";
import { router } from "./src/infra/api/index.js";

const app = express();

const startServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", router);
  app.listen(3001, () => console.log("server is running"));
};

(() => {
  startServer();
})();
