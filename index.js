const bodyParser = require('body-parser');
const express = require('express');
require('./models')
const userController = require('./controllers/UserController')


const app = express();
app.use(bodyParser.json())

// CURD API______________________________
app.get("/user/:id", userController.getUser);
app.get('/users', userController.getUsers);
app.post('/user', userController.addUser);
app.patch("/user/:id", userController.updateUser)
app.delete("/user/:id", userController.deleteUser);


// APP RELATIONSHIP_____________________________
app.get('/one-to-one', userController.OneToOne);


app.listen(3000);