const mongoose = require('mongoose');
const express = require('express');
const connection = require('./configs/db');
const UserModel = require('./model/user.model');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home page')
})

app.post('/register', async (req, res) => {
    const userDetails = req.body;
    try {
        const user = new UserModel(userDetails);
        await user.save();
        res.send({ "msg": 'User Registered' });

    } catch (error) {
        res.send({ "msg": 'Register error', error });
    }
})

app.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    const token = jwt.sign({ course: 'backend' }, 'masai');
    try {
        const user = await UserModel.find({ email, pass });
        if (user.length > 0) {
            res.send({ "msg": 'Login Successful', "token": token });
        }
        else {
            res.send({ "msg": 'Wrong Credentials' });
        }
    } catch (error) {
        res.send({ "msg": 'Login Failed', "error": error.message });
    }
})

app.get('/data', (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            res.send({ "msg": "Data is here..." })
        }
        else {
            res.send({ "msg": "Something went wrong", "error": err.message });
        }
    })
})

app.get('/cart', (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            res.send({ "msg": "Cart is here..." })
        }
        else {
            res.send({ "msg": "Something went wrong", "error": err.message });
        }
    })
})

app.get('/about', (req, res) => {
    res.send('About page');
})


app.listen(7700, async () => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(err);
    }
    console.log('Server is running at port 7700')
})