const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const app = express();
app.use(express.json());

// const connection = async() => {

// }

app.get('/', (req, res) => {
    res.send('Welcome to home route')
})

app.post('/register', async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send('user');
    } catch (error) {
        return res.status(500);
    }
})

app.listen(8080, async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/');
        console.log('connnected');
        console.log('Server is running at port 8080');
    } catch (error) {
        console.log(error);
    }
})