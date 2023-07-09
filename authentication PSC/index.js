const express = require('express');
const connection = require('./db');
const userRouter = require('./routes/user.route');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/todos', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            res.status(200).send({'msg' : 'The todos are here!!'});
        }
        else{
            res.status(400).send('Invalid token!!');
        }
    })
})

app.listen(8080, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log('Server is running at port 8080');
})