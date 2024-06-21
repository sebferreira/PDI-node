const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/ruta-usuario");
const port = 3020;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Puerto ${port}`);
});
