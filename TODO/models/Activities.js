import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Activities extends Model {
    static associate(models) {}
  }

  Activities.init(
    {
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
        defaultValue: false,
      },
      isImportant:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Activities",
    }
  );

  return Activities;
};
