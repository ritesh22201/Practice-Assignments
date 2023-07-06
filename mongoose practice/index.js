const express = require('express');
const app = express();
const connection = require('./db');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/users', async(req, res) => {
    const query = req.query;
    try {
        const users = await connection.Usermodel.find(query);
        res.send(users);
    } catch (error) {
        res.send(error.message);
    }
})

app.patch('/update/:id', async(req, res) => {
    const id = req.params.id;
    try {
        await connection.Usermodel.findByIdAndUpdate({_id : id}, req.body);
        res.send({"msg" : "User has been updated"}); 
    } catch (error) {
        res.send({"msg" : "Cannot modify user", "error" : error.message});
    }
})

app.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    try {
        await connection.Usermodel.findByIdAndUpdate({_id : id});
        res.send({"msg" : "User has been deleted"}); 
    } catch (error) {
        res.send({"msg" : "Cannot delete user", "error" : error.message});
    }
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