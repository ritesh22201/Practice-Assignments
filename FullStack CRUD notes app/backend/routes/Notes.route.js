const express = require('express');
const authenticate = require('../middlewares/authenticate.middleware');
const notesRouter = express.Router();

notesRouter.get('/', authenticate, (req, res) => {
    res.send('Home notes')
})

notesRouter.post('/create', authenticate, (req, res) => {
    res.send('created')
})

notesRouter.delete('/delete/:id', authenticate, (req, res) => {
    res.send('created')
})

module.exports = notesRouter;