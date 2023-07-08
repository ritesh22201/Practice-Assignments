const {Router} = require('express');
const User = require('../models/user.model');

const userRouter = Router();

userRouter.post('/register', async(req, res) => {
    try {
        const user = await User(req.body);
        await user.save();
        res.send('New user added');
    } catch (error) {
        res.send(error)
    }
})


userRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email : email, password : password});
        if(user){
            const token = jwt.sign({course : 'backend'},"ritesh")
            res.send({msg : 'Login success', token : token});
        }
    } catch (error) {
        res.send(error)
    }
})

