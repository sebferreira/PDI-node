const {Sequelize} = require("sequelize");
const sequelize = require("../config/db");

const usuario = sequelize.define(
  "usuario",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    edad: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

usuario.sync();

module.exports = usuario;
