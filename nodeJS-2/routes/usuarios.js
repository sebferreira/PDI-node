const express = require('express');
const router = express.Router();
const promiseQuery = require('../config/db')

router.get('/', async (req, res) => {
  try {
    const query = "SELECT * FROM `usuarios`"

    const usuarios =  await promiseQuery(query)
    res.json(usuarios)
  } catch (err) {
    throw err
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const query = "SELECT * FROM `usuarios` WHERE id  ?"

    const usuarios=  await promiseQuery(query, [id])
    res.json(usuarios)
  } catch (er) {
    throw err
  }
});

router.post('/', async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body

    const query = "INSERT INTO `usuarios` (nombre, apellido, edad) VALUES (?, ?,?)"

    const usuarios=  await promiseQuery(query, [nombre, ])
    res.json(usuarios)
  } catch (err) {
    throw err
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, precio, stock } = req.body

    const query = "UPDATE `usuarios` SET nombre = ?, apellido = ?, edad = ? WHERE id  ?"

    const usuarios=  await promiseQuery(query, [nombre, precio, stock, id])
    res.json(usuarios)
  } catch (err) {
    throw err
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const query = "DELETE FROM `usuarios` WHERE id  ?"

    const usuarios=  await promiseQuery(query, [id])
    res.json(usuarios)
} catch (err) {
  throw err
}
});

module.exports = router