const express = require('express');
const connection = require('./db');
const router = require('./routes/userRoutes');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/user', router);



app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
    console.log('Server is connected to port 8080');
})