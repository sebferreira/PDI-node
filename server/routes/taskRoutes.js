const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskByName);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.put("/complete/:id", taskController.completeTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
