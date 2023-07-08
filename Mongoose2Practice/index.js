const express = require('express');
const mongoose = require('mongoose');
const Superheroes = require('./models/userModel');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home page');
})

app.post('/register', async(req, res) => {
    try {
        const hero = await Superheroes.create(req.body);
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/users', async(req, res) => {
    try {
        const hero = await Superheroes.find(req.query);
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/users/:id', async(req, res) => {
    try {
        const hero = await Superheroes.find({_id : req.params.id});
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.patch('/update/:id', async(req, res) => {
    const ID = req.params.id;
    const payload = req.body;

    try {
        const hero = await Superheroes.findByIdAndUpdate({_id : ID}, payload);
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.delete('/delete/:id', async(req, res) => {
    const ID = req.params.id;

    try {
        const hero = await Superheroes.findByIdAndDelete({_id : ID});
        res.status(200).send('Superhero deleted');
    } catch (error) {
        res.status(400).send(error);
    }
})

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://ritesh22201:Ritesh12345@cluster0.qztm0a3.mongodb.net/heroes?retryWrites=true&w=majority');
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}


app.listen(8080, () => {
    connect();
    console.log('Server is listening at port 8080');
})
