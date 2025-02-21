const User = require('../../models/task/user.models');

const addUser = async(req,res)=>{
    try{
        const user = req.body;
        if(!user){
            res.status(404).send({error: "You should provide user data"});
        }
        const newUser = new User(user);
        await newUser.save();

        res.status(201).send(newUser);
        
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


const getUsers = async(greq,res)=>{
    try{
        const users = await User.find();
        res.status(200).send(users);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


module.exports = {
    addUser,
    getUsers,
}