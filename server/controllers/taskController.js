const TaskModel = require("../models/Task.js");

const taskController = {
  /**
   * Obtiene todas las tareas de la base de datos
   * @route GET /tasks
   * @returns {Array<TaskModel>} 200 - Retorna un array de objetos con las tareas
   * @returns {Error} 500 - Retorna un objeto con el mensaje de error
   */
  getAllTasks: async (req, res) => {
    try {
      const tasks = await TaskModel.findAll();

      return res.status(200).json(tasks);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: "Error getting tasks"});
    }
  },

  /**
   * Obtiene una tarea por su id
   * @route GET /tasks/:id
   * @returns {TaskModel} 200 - Retorna un objeto con la tarea
   * @returns {Error} 500 - Retorna un objeto con el mensaje de error
   */
  getTaskByName: async (req, res) => {
    const {id} = req.params;
    try {
      const tasks = await TaskModel.findByPk(id);
      if (!tasks) {
        res.status(404).json({message: "tasks not found."});
      } else {
        res.json(tasks);
      }
    } catch (error) {
      res.status(500).json({message: "Failed to fetch tasks."});
    }
  },

  /**
   * Crea una nueva tarea
   * @route POST /tasks
   * @param {TaskModel} req.body - Datos de la nueva tarea
   * @returns {TaskModel} 200 - Retorna un objeto con la tarea creada
   * @returns {Error} 500 - Retorna un objeto con el mensaje de error
   */
  createTask: async (req, res) => {
    const {name, description} = req.body;
    try {
      const tasks = await TaskModel.create({name, description});
      res.json(tasks);
    } catch (error) {
      res.status(500).json({message: "Failed to create tasks."});
    }
  },

  /**
   * Actualiza una tarea
   * @route PUT /tasks/:id
   * @param {TaskModel} req.body - Datos de la tarea a actualizar
   * @returns {TaskModel} 200 - Retorna un objeto con la tarea actualizada
   * @returns {Error} 500 - Retorna un objeto con el mensaje de error
   */
  updateTask: async (req, res) => {
    const id = req.params.id;
    const {name, description} = req.body;
    try {
      const [updatedRowsCount] = await TaskModel.update(
        {name: name, description: description},
        {where: {id: id}}
      );
      console.log(updatedRowsCount);
      if (updatedRowsCount === 0) {
        res.status(404).json({message: "tasks not found."});
      } else {
        const tasks = await TaskModel.findByPk(id);
        res.json(tasks);
      }
    } catch (error) {
      res.status(500).json({message: "Failed to update tasks."});
    }
  },

  /**
   * Actualiza el estado 'completed' de una tarea a true / false respectivamente
   * @param {TaskModel} req.query - El id de la tarea a actualizar
   * @returns {TaskModel} 200 - Retorna un objeto con la tarea actualizada
   * @returns {Error} 500 - Retorna un objeto con el mensaje de error
   */
  completeTask: async (req, res) => {
    const id = req.params.id;
    const completed = req.query.completed;
    console.log(completed);
    try {
      const [updatedRowsCount] = await TaskModel.update(
        {completed: completed},
        {where: {id: id}}
      );
      if (updatedRowsCount === 0) {
        res.status(404).json({message: "Task not found."});
      }
      const updatetasks = await TaskModel.findByPk(id);
      res.json(updatetasks);
    } catch (error) {
      res.status(500).json({message: "Failed to complete task."});
    }
  },

  /**
   * Elimina una tarea
   * @route DELETE /tasks/:id
   * @returns {TaskModel} 200 - Retorna un objeto con la tarea eliminada
   * @returns {Error} 500 - Retorna un objeto con el mensaje de error
   */
  deleteTask: async (req, res) => {
    const id = req.params.id;
    try {
      const deletedRowsCount = await TaskModel.destroy({where: {id: id}});
      if (deletedRowsCount === 0) {
        res.status(404).json({message: "Task not found."});
      } else {
        res.json({message: "Task deleted successfully."});
      }
    } catch (error) {
      res.status(500).json({message: "Failed to delete task."});
    }
  },
};

module.exports = taskController;
