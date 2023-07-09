const {Schema, model} = require('mongoose');

const blackListSchema = new Schema({
    token : [String]
})

const BlackListModel = model('blacklist', blackListSchema);

module.exports = BlackListModel;