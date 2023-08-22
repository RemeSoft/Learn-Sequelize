const bodyParser = require('body-parser');
const express = require('express');
require('./models')
const userController = require('./controllers/UserController')


const app = express();


app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/add', userController.addUser)


// CURD API______________________________
app.get("/user/:id", userController.getUser);
app.get('/users', userController.getUsers);
app.post('/user', userController.addUser);
app.patch("/user/:id", userController.updateUser)
app.delete("/user/:id", userController.deleteUser);


app.listen(3000);