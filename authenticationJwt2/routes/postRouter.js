const express = require('express');
const Post = require('../model/postModel');
const auth = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/', auth, async(req, res) => {
    try {
        // const {title, content} = req.body;
        const post = await Post.create(req.body);
        res.send({'msg' : 'Post added to the DB', post})
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;