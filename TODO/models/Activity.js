import { DataTypes } from "sequelize";
import sequelize from "../src/infra/sequelize/config.js";

const Activity = sequelize.define("Activities", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
      notEmpty: true,
      isDate: true,
    },
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
  },
});

export default Activity;
