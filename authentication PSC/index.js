const express = require('express');
const connection = require('./db');
const userRouter = require('./routes/user.route');
const app = express();
app.use(express.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.listen(8080, async() => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log('Server is running at port 8080');
})