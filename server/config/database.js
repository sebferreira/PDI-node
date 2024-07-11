const {Sequelize} = require("sequelize");
const Task = require("../models/Task");
const {config} = require("dotenv")
config()

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

// Probar la conexión con la DB
(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    console.log()
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = db; //exporto la base de datos para usarla en otros archivos
