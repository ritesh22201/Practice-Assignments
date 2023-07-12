const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRouter');
const connect = require('./db');
app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter)


app.listen(8800, async() => {
    try {
        await connect;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log('Server is running at the port 8800');
})
