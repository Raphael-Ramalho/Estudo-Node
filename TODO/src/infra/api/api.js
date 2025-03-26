import express from "express";
import { activitiesRouter } from "../../modules/activities/routes.js";
import { homeRouter } from "../../modules/home/routes.js";
import { groceriesRouter } from "../../modules/groseries/routes.js";

const router = express.Router();

router.use("/", homeRouter);
router.use("/activities", activitiesRouter);
router.use("/groceries", groceriesRouter);

export { router };
