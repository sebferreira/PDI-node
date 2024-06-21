const {Sequelize} = require("sequelize");

// Connectar a DB
const database = new Sequelize("trello_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 8111,
});

// Testeamos conexión
(async () => {
  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = database;
