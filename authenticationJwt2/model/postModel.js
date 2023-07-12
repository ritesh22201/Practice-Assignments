const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    username : {type : String, required : true},
    userID : {type : mongoose.Schema.Types.ObjectId, ref:'User', required : true}
  });
  
  // Create the model
  const Post = mongoose.model('post', postSchema);
  
  // Export the model
  module.exports = Post;