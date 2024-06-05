
const express = require('express')
const app = express();
const cors= require("cors")
const bodyParser =require("body-parser")
const router=require("./routes/usuarios")
const conn = require('./config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(router)


app.listen(3306, () => {
    console.log(`Puerto 1234`);
})

