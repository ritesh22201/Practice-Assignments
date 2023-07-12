const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    dob: {
      type: Date,
      required: true
    },
    role: {
      type: String,
      enum : ['Admin', 'Explorer'],
      required: true
    },
    location: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  // Create the model
  const User = mongoose.model('User', userSchema);
  
  // Export the model
  module.exports = User;