const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://ritesh22201:Ritesh12345@cluster0.qztm0a3.mongodb.net/psc2?retryWrites=true&w=majority');

module.exports = connection;