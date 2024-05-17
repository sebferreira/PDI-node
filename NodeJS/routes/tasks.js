const express = require("express");
const datos = require("../datos.json");
const routes = express.Router();

//Rutas

routes.get("/tasks", (req, res) => {
  res.json({datos});
});

routes.get("/tasks/:tasksId", (req, res) => {
  const tasksId = req.params.tasksId;
  let dato = datos.find((task) => task.id === tasksId);
  let mostrarID = req.query.mostrarID;
  if (mostrarID === "true") {
    res.json({
      message: "datos sin id",
      title: dato.title,
      descripcion: dato.descripcion,
      fecha: dato.fecha,
    });
  } else {
    res.json({
      id: dato.id,
      title: dato.title,
      descripcion: dato.descripcion,
      fecha: dato.fecha,
    });
  }
});

module.exports = routes;
