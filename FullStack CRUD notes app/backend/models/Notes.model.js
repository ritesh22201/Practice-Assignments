const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title : String,
    body : String,
    user : String
})

const NoteModel = mongoose.model('user', userSchema);

module.exports = UserModel;