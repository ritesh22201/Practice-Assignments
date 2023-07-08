const express = require('express');
const User = require('../model/userModel');
const router = express.Router();
const Post = require('./model/postModel');

router.post('/', async(req, res) => {
    try {
        const {title, content} = req.body;
        const post = await Post.create(req.body);
        res.send('hello')
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;