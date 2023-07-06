const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./userRoutes');
app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://ritesh22201:Ritesh12345@cluster0.qztm0a3.mongodb.net/bahubali');
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}

app.use('/user', userRouter);

app.listen(8080, () => {
    connect()
  console.log('Server is running on port 8080');
})