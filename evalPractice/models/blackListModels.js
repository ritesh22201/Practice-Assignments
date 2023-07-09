const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
    token : String
})

const BlacklistUser = mongoose.model('blacklist', blacklistSchema);

module.exports = BlacklistUser;