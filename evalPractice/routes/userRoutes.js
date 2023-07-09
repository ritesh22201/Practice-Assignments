const express = require('express');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const registerMiddleware = require('../middlewares/registermiddleware');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Homepage');
})

router.post('/register', registerMiddleware, async (req, res) => {
    const { email, pass } = req.body;

    try {
        
        // else {
        const newPass = await bcrypt.hash(pass, 10);
        const user = await UserModel.create({ ...req.body, pass: newPass });
        res.status(200).send({ 'msg': 'User registered successfully', user });
        // }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;