const Tasks = require("../models/model-task");

//en todos va el try catch
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    if (!tasks) {
      return res.status(404).json({message: "tasks is not found."});
    }
    return res.json(tasks);
  } catch (error) {
    res.status(500).json({message: "Failed to fetch users."});
  }
};

const getTask = async (req, res) => {
  const {taskId} = req.params;
  try {
    if (!taskId) {
      return res.status(404).json({message: "id tasks is empty."});
    }
    const tasks = await Tasks.findByPk(taskId);
    if (!tasks) {
      return res.status(404).json({message: "tasks not found."});
    } else {
      return res.json(tasks);
    }
  } catch (error) {
    res.status(500).json({message: "Failed to fetch tasks."});
  }
};

const createTask = async (req, res) => {
  const {title, description} = req.body;
  console.log(title);
  try {
    if (!title || !description) {
      return res.status(404).json({message: "title or description is empty."});
    }
    if (title.length < 10) {
      return res
        .status(404)
        .json({message: "title must be at least 10 characters ."});
    }
    if (!isNaN(title) || !isNaN(description)) {
      return res
        .status(400)
        .json({message: "Los campos title y description deben ser string"});
    }
    const nuevo = await Tasks.findOne({where: {title: title}});
    if (nuevo) return res.status(200).json({message: "El titulo ya existe"});

    const tasks = await Tasks.create({title, description});
    if (!tasks) {
      return res.status(404).json({message: "Failed to create tasks."});
    }
    return res.json(tasks);
  } catch (error) {
    res.status(500).json({message: "Failed to create tasks."});
  }
};

const deleteTasks = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    if (!id_tasks) {
      return res.status(404).json({message: "id tasks is empty."});
    }
    const deletedRowsCount = await Task.destroy({where: {taskId: taskId}});
    if (deletedRowsCount === 0) {
      return res.status(404).json({message: "Task not found."});
    } else {
      return res.json({message: "Task deleted successfully."});
    }
  } catch (error) {
    res.status(500).json({message: "Failed to delete task."});
  }
};

const updateTasks = async (req, res) => {
  const taskId = req.params.taskId;
  const {title, description} = req.body;
  try {
    if (!title || !description) {
      return res.status(404).json({message: "title or description is empty."});
    }
    if (title.length < 10) {
      return res
        .status(404)
        .json({message: "title must be at least 10 characters ."});
    }
    if (!isNaN(title) || !isNaN(description)) {
      return res
        .status(400)
        .json({message: "Los campos title y description deben ser string"});
    }
    const nuevo = await Tasks.findOne({where: {title: title}});
    if (nuevo) return res.status(200).json({message: "El titulo ya existe"});
    const [updatedRowsCount] = await Tasks.update(
      {
        title,
        description,
      },
      {where: {taskId: taskId}}
    );

    if (updatedRowsCount === 0) {
      res.status(404).json({message: "tasks not found."});
    } else {
      const tasks = await Tasks.findByPk(taskId);
      res.json(tasks);
    }
  } catch (error) {
    res.status(500).json({message: "Failed to update tasks."});
  }
};

module.exports = {
  getAllTasks: getAllTasks,
  getTask: getTask,
  createTask: createTask,
  deleteTasks: deleteTasks,
  updateTasks: updateTasks,
};
