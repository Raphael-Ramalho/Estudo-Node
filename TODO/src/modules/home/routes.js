import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", (_, res) => res.send("home is ok"));

export { homeRouter };
