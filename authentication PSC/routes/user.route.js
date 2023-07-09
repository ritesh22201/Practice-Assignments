const {Router} = require('express');
const UserModel = require('../models/user.model');

const userRouter = Router();

userRouter.post('/register', async(req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(200).send({'msg' : 'Registration Successful', user});
    } catch (error) {
        res.status(400).send(error.message);
    }
})

userRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email, password});
        if(user){
            res.status(200).send({'msg' : 'Login Successful', user});
        }
        else{
        res.status(400).send({'msg' : 'Wrong Credentials'});
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = userRouter;