const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.setHeader("content-type", "text/html");
    res.send('<h1>Home Page</h1>');
})

app.get('/data', (req, res) => {
    const dataStream = fs.createReadStream('./data.json', 'utf-8');
    dataStream.pipe(res);
})

app.post('/adddata', (req, res) => {
    console.log(req.body);
    res.send('Data has been added');
})

app.get('/students', (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8');
    const parsed_data = JSON.parse(data);
    // console.log(parsed_data.students);
    res.send(parsed_data.students);
})

app.get('/teachers', (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8');
    const parsed_data = JSON.parse(data);
    // console.log(parsed_data.teachers);
    res.send(parsed_data.teachers);
})

app.post('/addstudent', (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8');
    const parsed_data = JSON.parse(data);
    parsed_data.students.push(req.body);
    fs.writeFileSync('./data.json', JSON.stringify(parsed_data));
    res.send('Data has been added');
})

app.delete('/deletestudent', (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8');
    const parsed_data = JSON.parse(data);
    const new_student_data = parsed_data.students.filter((el) => {
        return el.name !== 'Munnu'
    })
    fs.writeFileSync('./data.json', JSON.stringify(new_student_data));
    res.send('Data has been deleted');
})

app.listen(4500, () => {
    console.log('Server is running at port 4500');
})