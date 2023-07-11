const express = require('express');
const authenticate = require('../middlewares/authenticate.middleware');
const NotesModel = require('../models/Notes.model');
const notesRouter = express.Router();

notesRouter.get('/', authenticate, async(req, res) => {
    try {
        const notes = await NotesModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

notesRouter.post('/create', authenticate, async(req, res) => {
    try {
        const notes = await NotesModel.create(req.body);
        res.status(200).send({'msg' : 'Notes posted', notes});
    } catch (error) {
        res.status(400).send(error.message);
    }
})

notesRouter.delete('/delete/:id', authenticate, async(req, res) => {
    const noteID = req.params.id;
    try {
        const note = await NotesModel.findByIdAndDelete({_id : noteID});
        res.status(200).send({'msg' : 'Note deleted', note});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = notesRouter;