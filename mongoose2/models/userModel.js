const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {type : String, required : true},
    email : {type : String, required : true},
    age : {type : Number},
    password : {type : String, required : true},
})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;