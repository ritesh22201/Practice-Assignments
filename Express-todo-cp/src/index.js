//  import required modules from nodejs and build the server

const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    const data = fs.readFileSync('./db.json', 'utf-8');
    const parsed_data = JSON.parse(data);
    res.status(200).json(parsed_data.todos);
})

app.post('/', (req, res) => {
    const {id} = req.body;
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    if(typeof id === 'number'){
        data.todos.push(req.body);
        fs.writeFileSync('./db.json', JSON.stringify(data));
        res.status(200).json(data.todos);
    } 
})

app.put('/:id', (req, res) => {
    const id = +req.params.id;
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

    let flag = false;
    for(let i = 0; i<data.todos.length; i++){
        if(data.todos[i].id === id){
            flag = true;
            data.todos[i] = {...data.todos[i], ...req.body};
        }
    }

    if(!flag){
        res.status(400);
        res.send('Invalid argument');
    }
    else{
        fs.writeFileSync('./db.json', JSON.stringify(data));
        res.status(200).json(data.todos)
    }
})

app.delete('/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const id = +req.params.id;
    
    let flag = false;
    for(let i = 0; i<data.todos.length; i++){
        if(data.todos[i].id === id){
            flag = true;
            data.todos.splice(i, 1);
        }
    }

    if(!flag){
        res.status(400);
        res.send('Invalid argument');
    }
    else{
        fs.writeFileSync('./db.json', JSON.stringify(data));
        res.status(200).json(data.todos);
    }
 
})

app.listen(7700, () => {
    console.log(`Server is running at port ${7700}`);
})
// export the server

module.exports = app;
