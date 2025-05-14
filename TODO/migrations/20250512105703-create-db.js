"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("Activities", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
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
      createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt:{
        allowNull: false,
        type: DataTypes.DATE,
      }
    });
  },

  async down(queryInterface) {
    queryInterface.dropTable("Activities");
  },
};
