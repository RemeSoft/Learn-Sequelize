const db = require('../models');
const User = db.user; 
const Contact = db.contact;

const getUser = async (req, res) =>{
    const user = await User.findOne({
        where : {id : req.params.id}
    });
    res.status(200).json(user);
}

const getUsers = async (req, res) =>{
    const user = await User.findAll({
        attributes : ['firstName'],
        include : {
            model : Contact,
            attributes : ['name']
        },
    });
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

// ______________________________________________________
const OneToOne = async (req, res)=>{
    const newUser = await User.create({
        firstName : "Sandip",
        lastName: "Mohesshori",
    })
    if(newUser){
        var contactData = await Contact.create({
            name: "Rabin",
            phone: "01771848382",
            UserId: newUser.id
        })
    }
    res.status(200).json({data: newUser, contact:contactData});
}


module.exports = {
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser,

    OneToOne,
}