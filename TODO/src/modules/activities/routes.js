import express from "express";

const activitiesRouter = express.Router();

activitiesRouter.get("/", (_, res) => res.send("activities are ok"));

export { activitiesRouter };
