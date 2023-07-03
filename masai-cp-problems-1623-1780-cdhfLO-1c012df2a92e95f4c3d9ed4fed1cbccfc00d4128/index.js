//  do not forgot to export server
const express = require('express');
const fs = require('fs');
const { addID } = require('./middlewares/addID.middleware');
const { auth } = require('./middlewares/auth.middleware');
const { logger } = require('./middlewares/logger.middleware');
const app = express();
app.use(express.json());

app.use(logger);

app.post('/add/hero', addID, (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            const parsed_data = JSON.parse(data);
            // console.log(parsed_data.heroes)
            parsed_data.heroes.push(req.body);
            fs.writeFileSync('./db.json', JSON.stringify(parsed_data));
            res.send(parsed_data.heroes);
        }
    });
})

app.get('/heroes', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            const parsed_data = JSON.parse(data);
            res.send(parsed_data.heroes);
        }
    })
})

app.patch('/update/villain/:hero_id', auth, (req, res) => {
    const id = +req.params.hero_id;
    
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            const parsed_data = JSON.parse(data);
            let flag = false;
            for(let i = 0; i<parsed_data.heroes.length; i++){
                if(parsed_data.heroes[i].id == id){
                    flag = true;
                    const {name, health} = req.body;
                    parsed_data.heroes[i].villains.push({name, health});
                }
            }

            if(flag){
                const updatedData = parsed_data.heroes.find(el => el.id === id);
                fs.writeFileSync('./db.json', JSON.stringify(parsed_data));
                res.send(updatedData);  
            }
            else{
                res.send({ message: "Hero not found"});
            }
        }
    })
})

app.delete('/delete/hero/:hero_id', auth, (req, res) => {
    const id = +req.params.hero_id;

    fs.readFile('./db.json', 'utf-8', (err, data) => {
        if(err){
            res.send(err);
        }
        else{
            let parsed_data = JSON.parse(data);
            const filteredData = parsed_data.heroes.filter(el => el.id !== id);
            const newData = {heroes : filteredData};
            fs.writeFileSync('./db.json', JSON.stringify(newData));
            res.send(filteredData);
        }
    })
})

app.listen(8080, () => {
    console.log('Server is running at port 8080');
})

module.exports = app;
