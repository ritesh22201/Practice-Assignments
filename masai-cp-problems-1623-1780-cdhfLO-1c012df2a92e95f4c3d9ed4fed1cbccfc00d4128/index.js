//  do not forgot to export server
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/add/hero', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    data.heroes.push(req.body);

    fs.writeFileSync('./db.json', JSON.stringify(data));
    console.log(data.heroes)
    res.send('hey');
})

app.listen(8080, () => {
    console.log('Server is running at port 8080');
})

module.exports = app;
