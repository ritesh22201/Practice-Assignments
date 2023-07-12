const express = require('express');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();

router.post('/register', async (req, res) => {

    const newPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const newUser = await User.create({ ...req.body, password: newPassword });
        res.status(200).send({'msg' : 'User has been registered.', newUser});
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) res.status(400).send('Signup first!!');
        const verify = await bcrypt.compare(password, user.password);

        if(!verify){
            res.status(400).send('Incorrect Password!!');
        }
        const token = jwt.sign({userID : user._id, username : user.username}, process.env.secretKey);
        res.status(200).send({'msg' : 'Login Successful', token});
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;