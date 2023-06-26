const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); //middleware

app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.send('<h1>HOME PAGE</h1>');
})

app.get('/data', (req, res) => {
    const dataStream = fs.createReadStream('./data.json', 'utf-8');
    dataStream.pipe(res);
})

app.post('/adddata', (req, res) => {
    console.log(req.body);
    res.send('Data has been posted.');
})

app.listen(4500, () => {
    console.log('Server is running at 4500');
})