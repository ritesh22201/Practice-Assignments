const express = require('express');
const app = express();
const connection = require('./db');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/users', (req, res) => {
    res.send('All the users data will be sent');
})

app.post('/register', async (req, res) => {
    try {
        const user = new connection.Usermodel(req.body);
        await user.save();
        res.send('Users registered successfully');
    } catch (error) {
        res.send('Cannot register the user', error.message);
    }
})



app.listen(4500, async () => {
    try {
        await connection;
        console.log('Server is connected to DB');
    } catch (error) {
        console.log(error);
    }
    console.log('Server is running at port 4500')
})