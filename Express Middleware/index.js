const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

// const authMiddleWare = (req, res, next) => {
//     console.log('hello')
//     if(req.query.password === 'masai') next();
//     console.log('bye')
//     res.end('Wrong credentials');
// }

const timeLogger = (req, res, next) => {
    const startTime = new Date().getTime();
    next();
    fs.appendFileSync('./log.txt', `At this time ${startTime} the user is making request on ${req.url} with ${req.method} method`)
    // const endTime = new Date().getTime();
    // console.log(endTime - startTime);
}

const check = (req, res, next) => {
    req.body.year = 2015
    next();
    
}

app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    res.send(JSON.stringify(data));
})

// app.use(timeLogger);  // We don't need authentication for home route. So, it will work for other routes.

app.get('/users', timeLogger, (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    if(!req.query.id) res.send(data.users);

    const data2 = data.users.find(el => el.id == +req.query.id);

    res.send(JSON.stringify(data2));
})

app.post('/movie', check, (req, res) => {

})

// app.get('/:id', (req, res) => {
//     const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
//     // console.log(req.params)
//     res.send(JSON.stringify(data));
// })

// app.get('/users/:id', (req, res) => {
//     const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
//     const usersData = data.users.find(el => el.id == +req.params.id);
//     res.send(JSON.stringify(usersData));
// })

app.listen(4500, () => {
    console.log('App is running at 4500 port');
})

