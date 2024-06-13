const mysql = require("mysql2");
const {promisify} = require("util");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "trello_db",
});

const promiseQuery = promisify(db.query).bind(db);

db.getConnection((err, con) => {
  try {
    con.query(
      "CREATE TABLE IF NOT EXISTS usuarios (id_cliente INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(50) NOT NULL, edad INT NOT NULL, password VARCHAR(50) NOT NULL, PRIMARY KEY(id_cliente));"
    );
    con.query(
      "CREATE TABLE IF NOT EXISTS tasks (id_tasks INT NOT NULL AUTO_INCREMENT, title VARCHAR(50) NOT NULL, description VARCHAR(200) NOT NULL, PRIMARY KEY(id_tasks));"
    );
  } catch (err) {
    return err;
  }
});

module.exports = {promiseQuery};
