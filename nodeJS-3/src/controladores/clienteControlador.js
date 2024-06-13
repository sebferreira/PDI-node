const {promiseQuery} = require('../config/db');

const select_all_usuarios = async (req, res) => {
    try {
      const query = "SELECT * FROM `usuarios`"
  
      const usuarios =  await promiseQuery(query)
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const select_id = async (req, res) => {
    try {
      const { id } = req.params
  
      const query = "SELECT * FROM `usuarios` WHERE id_cliente  ?"
  
      const usuarios=  await promiseQuery(query, [id])
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const insert_usuarios = async (req, res) => {
  const { nombre, edad, password } = req.body
    try {
  
      const query = "INSERT INTO usuarios (nombre, edad, password) VALUES (?, ?,?);"
  
      const usuarios=  await promiseQuery(query, [nombre, edad, password])
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const update_usuarios = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre, edad, password } = req.body
  
      const query = "UPDATE `usuarios` SET nombre = ?, edad = ?, password = ? WHERE id_cliente  ?"
  
      const usuarios=  await promiseQuery(query, [nombre, edad, password, id])
      res.json(usuarios)
    } catch (err) {
      throw err
    }
};

const delete_usuarios = async (req, res) => {
    try {
      const { id } = req.params
  
      const query = "DELETE FROM `usuarios` WHERE id_cliente  ?"
  
      const usuarios=  await promiseQuery(query, [id])
      res.json(usuarios)
  } catch (err) {
    throw err
  }
};

module.exports = {
    select_all_usuarios,
    select_id,
    insert_usuarios,
    update_usuarios,
    delete_usuarios
}