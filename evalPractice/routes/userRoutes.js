const express = require('express');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const registerMiddleware = require('../middlewares/registermiddleware');
const BlacklistUser = require('../models/blackListModels');
const auth = require('../middlewares/authMiddleware');
const BookModel = require('../models/addBookModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Homepage');
})

router.post('/register', registerMiddleware, async (req, res) => {
    const { pass } = req.body;
    try {
        const newPass = await bcrypt.hash(pass, 10);
        const user = await UserModel.create({ ...req.body, pass: newPass });
        res.status(200).send({ 'msg': 'User registered successfully', user });

    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/login', async(req, res) => {
    const {email, pass} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            res.status(400).send('Invalid Credentials!');
            return;
        }
        const comparePass = await bcrypt.compare(pass, user.pass);

        if(!comparePass){
            res.status(400).send('Invalid Credentials!');
            return;
        }
        else{
            const token = jwt.sign({email}, process.env.secretKey, {expiresIn : 120});
            const refreshToken = jwt.sign({email}, process.env.refreshKey, {expiresIn : 300});
            res.status(200).send({"msg" : "Login Successful!", "token" : token, "refreshToken" : refreshToken});
            return;
        }

    } catch (error) {
        res.status(400).send({'error' : error.message}); 
    }
})

router.get('/logout', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        res.send('Login First!');
    }

    try {
        const blackListUser = await BlacklistUser.create({ token });
        res.status(200).send({ 'msg': 'User has been logged out.' });
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

router.get('/refreshToken', (req, res) => {
    const {email} = req.body;
    const rToken = req.headers.authorization.split(' ')[1];

    if(!rToken){
        res.status(400).send({"error" : "Login again"});
    }

    jwt.verify(rToken, process.env.refreshKey, (err, decoded) => {
        if(decoded){
            const token = jwt.sign({email}, process.env.secretKey, {expiresIn : '2d'});
            res.status(200).send({'newToken' : token})
        }
        else{
            res.status(400).send({'error' : 'Invalid token!!'});
        }
    })
})

router.post('/books/add', auth, async(req, res) => {
    try {
        const book = await BookModel.create(req.body);
        res.status(200).send({'msg' : 'Book Added', book})
    } catch (error) {
        res.status(400).send({'msg' : error.message})
    }
})

module.exports = router;


