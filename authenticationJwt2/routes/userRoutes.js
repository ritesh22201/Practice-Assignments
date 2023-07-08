const express = require('express');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (req, res) => {

    const newPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const newUser = await User.create({ ...req.body, password: newPassword });
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) res.send('Signup first!!');
        const verify = await bcrypt.compare(password, user.password);
        if(!verify){
            res.status(400).send('Incorrect Password!!');
        }
        res.status(200).send('Login Successful');
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;