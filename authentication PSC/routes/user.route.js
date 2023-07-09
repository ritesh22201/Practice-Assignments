const { Router } = require('express');
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklist = require('../blacklist');

const userRouter = Router();

userRouter.post('/register', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(200).send({ 'msg': 'Registration Successful', user });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email, password });
        if (user) {
            const token = jwt.sign({ course: 'backend' }, 'masai', {expiresIn : 20});
            const refreshToken = jwt.sign({ course: 'backend' }, 'ritesh', {expiresIn : 50});
            res.status(200).send({ 'msg': 'Login Successful', token, refreshToken });
        }
        else {
            res.status(400).send({ 'msg': 'Wrong Credentials' });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// Blacklisting the token

userRouter.get('/logout', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(400).send('Login First!');
    }
    blacklist.push(token);
    res.send('User logged out.');
})

// Refresh token

userRouter.get('/refreshToken', (req, res) => {
    const rToken = req.headers.authorization.split(' ')[1];

    if(!rToken){
        res.send('Login again!');
    }

    jwt.verify(rToken, 'ritesh', (err, decoded) => {
        if(decoded){
            const token = jwt.sign({course : 'backend'}, 'masai', {expiresIn : '7d'});
            res.send({token});
        }
        else{
            res.send('Invalid token!!');
        }
    })
})

module.exports = userRouter;