// import required modules
let express = require('express');
let morgan = require('morgan');
let path = require('path');
const fs = require('fs');
const app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', '../access.log'), { flags: 'a' })
app.use(morgan(':method :url :status :http-version :date[web] :res[content-length] - :response-time ms', {stream : accessLogStream}));

app.get('/', (req, res) => {
    res.status(200).send({ message: "welcome to server" });
})

app.get('/get-users', (req, res) => {
    res.status(200).send({"message": "here is the list of all users"});
})

app.post('/add-user', (req, res) => {
    res.status(201).send({message: "user added successfully"});
})

app.put('/user/:id', (req, res) => {
    const id = +req.params.id;
    res.status(201).send({"message": `user ${id} updated successfylly`})
})

app.delete('/user/:id', (req, res) => {
    const id = +req.params.id;
    res.send({"message": `user ${id} deleted successfylly`})
})

app.listen(8080, () => {
    console.log('Server is listening  at port 8080');
})
// export the server
// eg.module.exports = app;
module.exports = app;
