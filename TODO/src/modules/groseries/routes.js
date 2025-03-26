import express from "express";

const groceriesRouter = express.Router();

groceriesRouter.get("/", (_, res) => res.send("groceries are ok"));

export { groceriesRouter };
