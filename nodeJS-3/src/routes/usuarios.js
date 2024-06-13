const express = require("express");
const router = express.Router();
const promiseQuery = require("../config/db");

const {
  select_all_usuarios,
  select_id,
  insert_usuarios,
  update_usuarios,
  delete_usuarios,
} = require("../controladores/clienteControlador");
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTasks,
  updateTasks,
} = require("../controladores/tasksControlador");

router.get("/user", select_all_usuarios);
router.get("/user/:id", select_id);
router.post("/user", insert_usuarios);
router.put("/user/:id", update_usuarios);
router.delete("/user/:id", delete_usuarios);

router.get("/tasks", getAllTasks);

router.get("/tasks/:taskId", getTask);

router.post("/tasks", createTask);

router.delete("/tasks/:taskId", deleteTasks);

router.patch("/tasks/:taskId", updateTasks);

module.exports = router;
