const mysql = require('mysql');
const { promisify } = require('util');

const db = mysql.createPool({
    host: "127.0.0.1",
    user:"root",
    password:"",
    database:"usuarios_db",
})

const promiseQuery = promisify(db.query).bind(db)

db.getConnection((err,con)=>{
    try {
        con.query('CREATE TABLE IF NOT EXISTS usuarios (id_usuario INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(50) NOT NULL, apellido VARCHAR(50) NOT NULL, edad INT NOT NULL, PRIMARY KEY(id_usuario))')
    } catch (error) {
        throw err;
    }
})

module.exports = promiseQuery
