const express = require('express');
const connection = require('./db');
const userRouter = require('./routes/User.router');
const notesRouter = require('./routes/Notes.route');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/notes', notesRouter);


app.listen(8080, async() => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(error)
    }
    console.log('Server is running at port 8080');
})