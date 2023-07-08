const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    alias : {type : String, required : true},
    post : {type : String, required : true},
    age : {type : Number, required : true},
})

const Superheroes = mongoose.model('marvel', userSchema);

module.exports = Superheroes;