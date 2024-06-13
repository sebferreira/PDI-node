const {promiseQuery} = require("../config/db");

//en todos va el try catch
const getAllTasks = async (req, res) => {
  try {
    /*uso try catch para que cuando detecte error me lo mande */
    const query = "SELECT * FROM `tasks`";

    const tasks = await promiseQuery(query);
    res.json(tasks);
  } catch (error) {
    //siempre es por el error
    console.log(error);
  }
};

const getTask = async (req, res) => {
  try {
    //desestructuramos req.params para sacar el id
    const id = req.params.taskId;
    const query = "SELECT * FROM `tasks` WHERE id_tasks ?";

    const tasks = await promiseQuery(query, [id]);
    res.json(tasks);
    if (tasks.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(tasks);
  } catch (error) {
    //siempre es por el error
    console.log(error);
  }
};

const createTask = async (req, res) => {
  const {title, description} = req.body;
  console.log(title);
  try {
    const query = "INSERT INTO tasks (title, description) VALUES (?, ?);";

    const tasks = await promiseQuery(query, [title, description]);
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

const deleteTasks = async (req, res) => {
  const id = req.params.taskId;
  try {
    const query = "DELETE from tasks WHERE id_tasks ?";

    const tasks = await promiseQuery(query, [id]);

    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

const updateTasks = async (req, res) => {
  const id = req.params.taskId;
  const {title, description} = req.body;
  try {
    const query = "UPDATE task SET title ?, description ? WHERE id_tasks ?";

    const tasks = await promiseQuery(query, [title, description, id]);
    if (tasks.length === 0) {
      //si las filas de la respuesta tiene una longitud de cero, tira error
      return res.status(404).json({
        message: "No results found",
      });
    }
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks: getAllTasks,
  getTask: getTask,
  createTask: createTask,
  deleteTasks: deleteTasks,
  updateTasks: updateTasks,
};
