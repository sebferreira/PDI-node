const express = require("express");
const router = express.Router();

const {
  select_all_usuarios,
  select_id,
  insert_usuarios,
  update_usuarios,
  delete_usuarios,
} = require("../controllers/controller-user");
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTasks,
  updateTasks,
} = require("../controllers/controller-task");

// rutas de los clientes
router.get("/", (req, res) => res.json("Hola mundo"));
router.get("/user", select_all_usuarios);
router.get("/user/:id", select_id);
router.post("/user", insert_usuarios);
router.put("/user/:id", update_usuarios);
router.delete("/user/:id", delete_usuarios);

// rutas de las tareas
router.get("/tasks", getAllTasks);
router.get("/tasks/:taskId", getTask);
router.post("/tasks", createTask);
router.delete("/tasks/:taskId", deleteTasks);
router.patch("/tasks/:taskId", updateTasks);

module.exports = router;
