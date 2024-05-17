var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Este es el inicio');
  console.log("Página de inicio...")
})

app.get('/cuenta', function (req, res) {
  res.send('Esta es tu cuenta');
  console.log("Pagina de cuenta");
})

app.listen(1234);