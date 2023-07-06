const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/university');

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    age  : {type : Number, required : true},
    city : {type : String, required : true},
    language : {type : String, required : true},
    is_married : {type : Boolean, required : true}
},{
    versionKey : false
})

const Usermodel = mongoose.model('user', userSchema);

module.exports = {
    connection, 
    Usermodel
}
