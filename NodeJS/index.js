const express = require("express");
const app = express();
const datos = require("./datos.json");
const routes = require("./routes/tasks.js");

const port = 3000;

app.get("/", (req, res) => {
  const nombre = "Sebastian";
  res.send(nombre);
});

app.listen(port, () => {
  console.log("Esta funcionando");
});

app.use("/", routes);
