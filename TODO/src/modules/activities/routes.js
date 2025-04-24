import express from "express";
import Activity from "../../../models/Activity.js";

const activitiesRouter = express.Router();

activitiesRouter.get("/", async (_, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

activitiesRouter.post("/", async (req, res) => {
  const { name, date, isCompleted } = req.body;
  const newActivity = await Activity.create({ name, date, isCompleted });
  res.json(newActivity);
});

activitiesRouter.patch("/:id", async (req, res) => {
  const { name, date, isCompleted } = req.body;
  const newActivity = await Activity.findByPk(req.params.id);
  if (newActivity) {
    if (name) newActivity.name = name;
    if (date) newActivity.date = date;
    if (isCompleted) newActivity.isCompleted = isCompleted;

    await newActivity.save();

    res.json(newActivity);
  } else {
    res.status(404).send("Activity not found");
  }
});

activitiesRouter.delete("/:id", async (req, res) => {
  const newActivity = await Activity.findByPk(req.params.id);
  if (newActivity) {
    await newActivity.destroy();

    res.status(204).send("Activity deleted successfully");
  } else {
    res.status(404).send("Activity not found");
  }
});

export { activitiesRouter };
