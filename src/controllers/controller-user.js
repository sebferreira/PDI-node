const Usuario = require("../models/model-user");

const select_all_usuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    if (!usuarios) {
      return res.status(404).json({message: "Usuario not found."});
    } else {
      return res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({message: "Failed to fetch users."});
  }
};

const select_id = async (req, res) => {
  const {id_usuario} = req.params;
  try {
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({message: "Usuario not found."});
    } else {
      return res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({message: "Failed to fetch usuario."});
  }
};

const insert_usuarios = async (req, res) => {
  const {nombre, edad, password} = req.body;
  try {
    /* validaciones */
    if (!nombre || !edad || !password) {
      return res.status(400).json({message: "Please fill all the fields."});
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({message: "Password must be at least 8 characters."});
    }
    if (nombre.length < 4) {
      return res
        .status(400)
        .json({message: "Name must be at least 4 characters."});
    }
    if (!isNaN(nombre)) {
      return res.status(400).json({message: "El nombre debe ser un string"});
    }
    const nuevo = await Usuario.findOne({where: {nombre: nombre}});
    if (nuevo) res.status(200).json({message: "El nombre ya existe"});

    const usuario = await Usuario.create({nombre, edad, password});
    if (!usuario) {
      return res.status(404).json({message: "user not created."});
    } else {
      return res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({message: "Failed to create usuario."});
    console.log(error);
  }
};

const update_usuarios = async (req, res) => {
  const {id_usuario} = req.params;
  const {nombre, edad, password} = req.body;
  try {
    if (!id_usuario) {
      return res.status(400).json({message: "id is not found."});
    }
    if (!nombre || !edad || !password) {
      return res.status(400).json({message: "Please fill all the fields."});
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({message: "Password must be at least 8 characters."});
    }
    if (nombre.length < 4) {
      return res
        .status(400)
        .json({message: "Name must be at least 4 characters."});
    }
    if (!isNaN(nombre)) {
      return res.status(400).json({message: "El nombre debe ser un string"});
    }
    const nuevo = await Usuario.findOne({where: {nombre: nombre}});
    if (nuevo)
      return returnres.status(200).json({message: "El nombre ya existe"});

    const [updatedRowsCount] = await Usuario.update(
      {nombre, edad, password},
      {where: {id_usuario: id_usuario}}
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({message: "Usuario not found."});
    } else {
      const usuario = await Usuario.findByPk(id_usuario);
      res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({message: "Failed to update usuario."});
  }
};

const delete_usuarios = async (req, res) => {
  const {id_usuario} = req.params;
  try {
    if (!id_usuario) {
      return res.status(400).json({message: "id is not found."});
    }
    const deletedRowsCount = await Usuario.destroy({
      where: {id_usuario: id_usuario},
    });
    if (deletedRowsCount === 0) {
      return res.status(404).json({message: "Usuario not found."});
    } else {
      return res.json({message: "Usuario deleted successfully."});
    }
  } catch (error) {
    res.status(500).json({message: "Failed to delete usuario."});
  }
};

module.exports = {
  select_all_usuarios,
  select_id,
  insert_usuarios,
  update_usuarios,
  delete_usuarios,
};
