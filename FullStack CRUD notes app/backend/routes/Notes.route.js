const express = require('express');
const notesRouter = express.Router();

notesRouter.get('/', (req, res) => {
    res.send('Home notes')
})

notesRouter.post('/create', (req, res) => {
    res.send('created')
})

notesRouter.delete('/delete/:id', (req, res) => {
    res.send('created')
})

module.exports = notesRouter;