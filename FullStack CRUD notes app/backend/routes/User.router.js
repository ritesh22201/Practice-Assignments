const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User.model');
const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    const { pass } = req.body;
    try {
        bcrypt.hash(pass, 10, async (err, hash) => {
            if (err) {
                res.status(400).send({ 'msg': 'Something went wrong', 'error': err.message })
            }
            else {
                const user = await UserModel.create({ ...req.body, pass: hash });
                res.status(200).send({ 'msg': 'User has been registered', user });
            }
        })

    } catch (error) {
        res.status(400).send(error.message);
    }
})

userRouter.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (err) {
                    res.status(400).send({ 'msg': 'Wrong credentials' })
                }
                else {
                    const token = jwt.sign({ userID : user._id }, 'bonjo', { expiresIn: '1h' });
                    res.status(200).send({ 'msg': 'User logged in successfully', token: token });
                }
            })
        }
        else {
            res.status(400).send({ 'msg': 'Wrong credentials' })
        }
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

module.exports = userRouter;