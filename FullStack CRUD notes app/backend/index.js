const express = require('express');
const connection = require('./db');
const app = express();
app.use(express.json());



app.listen(8080, async() => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(error)
    }
    console.log('Server is running at port 8080');
})