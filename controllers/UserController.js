const db = require('../models');
const User = db.user; 

const getUser = async (req, res) =>{
    const user = await User.findOne({
        where : {id : req.params.id}
    });
    res.status(200).json(user);
}

const getUsers = async (req, res) =>{
    const user = await User.findAll();
    res.status(200).json(user);
}


const addUser = async (req, res) =>{
    if (req.body.length > 1){var newUser = await User.bulkCreate(req.body);}
    else { var newUser = await User.create(req.body);}
    res.status(200).json(newUser);
}

const updateUser = async (req, res) =>{
    const updatedUser = await User.update(req.body, {
        where : {id : req.params.id}
    });
    res.status(200).json(updatedUser);
}

const deleteUser = async (req, res) =>{
    const deletedUser = await User.destroy({
        where : {id : req.params.id}
    });
    res.status(200).json(deletedUser);
}


module.exports = {
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser
}