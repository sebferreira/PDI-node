const {Sequelize} = require("sequelize");
const sequelize = require("../config/db");

const tasks = sequelize.define(
  "tasks",
  {
    taskId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

tasks.sync();

module.exports = tasks;
