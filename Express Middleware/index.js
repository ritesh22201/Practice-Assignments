const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    res.send(JSON.stringify(data));
})

app.get('/users/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const usersData = data.find(el => el.id == +req.params.id);
    res.send(JSON.stringify(usersData));
})

app.listen(4500, () => {
    console.log('App is running at 4500 port');
})

