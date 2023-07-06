const express = require('express');
const User = require('./userModel');
const bcrypt = require('bcrypt');
const router = express.Router();
 
router.post('/register', async(req, res) => {
    const newPassword = await bcrypt;
    try {
        const newUser = await User.create({...req.body, password : newPassword});
        res.status(200).send(newUser);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = router;