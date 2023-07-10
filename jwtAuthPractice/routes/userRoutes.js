const express = require('express');
// const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const registerMid = require('../middlewares/registerMiddleware');
require('dotenv').config();
// const registerMiddleware = require('../middlewares/registermiddleware');
// const BlacklistUser = require('../models/blackListModels');
// const auth = require('../middlewares/authMiddleware');
// const BookModel = require('../models/addBookModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Homepage');
})

router.post('/register',registerMid, async(req, res) => {
    const {pass} = req.body;
    try {
        const newPass = await bcrypt.hash(pass, 10);
        const user = await UserModel.create({...req.body, pass : newPass});
        res.status(200).send({'msg' : 'User Registered', user});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = router;