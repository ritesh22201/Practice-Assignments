const express = require('express');
const UserModel = require('../models/User.model');
const userRouter = express.Router();


userRouter.post('/register', async(req, res) => {
    try {
       const user = await UserModel.create(req.body);
       res.status(200).send({'msg' : 'User has been registered', user});
    } catch (error) {
        res.status(400).send(error.message);
    }
})

userRouter.post('/login', async(req, res) => {
    const {email, pass} = req.body;
    try {
        const user = await UserModel.findOne({email, pass});
        
        if(user){
            res.status(200).send({'msg' : 'User logged in successfully', token : ''})
        }
        else{
            res.status(400).send({'msg' : 'Wrong credentials'})
        }
    } catch (error) {
        res.status(400).send({'msg' : error.message });
    }
})

module.exports = userRouter;