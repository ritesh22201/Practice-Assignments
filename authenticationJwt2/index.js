const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRouter');
app.use(express.json());

const connect = async() => {
    try {
        await mongoose.connect('mongodb+srv://ritesh22201:Ritesh12345@cluster0.qztm0a3.mongodb.net/authentication2?retryWrites=true&w=majority');
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}

app.use('/user', userRouter);
app.use('/post', postRouter)

app.listen(8800, () => {
    connect();
    console.log('Server is running at the port 8800');
})
