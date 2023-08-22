const bodyParser = require('body-parser');
const express = require('express');
require('./models')
const app = express();


app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000)