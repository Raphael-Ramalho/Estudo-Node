import express from "express";
import ActivitiesModel from "../../../models/Activities.js";
import sequelize from "../../infra/sequelize/config.js";

const activitiesRouter = express.Router();

const Activities = ActivitiesModel(sequelize);

activitiesRouter.get("/", async (_, res) => {
  const activities = await Activities().findAll();
  res.json(activities);
});

activitiesRouter.post("/", async (req, res) => {
  const { name, date, isCompleted } = req.body;
  const newActivity = await Activities.create({ name, date, isCompleted });
  res.json(newActivity);
});

activitiesRouter.patch("/:id", async (req, res) => {
  const { name, date, isCompleted } = req.body;
  const newActivity = await Activities.findByPk(req.params.id);
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
  const newActivity = await Activities.findByPk(req.params.id);
  if (newActivity) {
    await newActivity.destroy();

    res.status(204).send("Activity deleted successfully");
  } else {
    res.status(404).send("Activity not found");
  }
});

export { activitiesRouter };
