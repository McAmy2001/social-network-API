const { Schema, model } = require('mongoose');
//const validateEmail = require('../utils/validateEmail');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    //validate: [validateEmail, 'Please enter a valid email address.']
  },
  thoughts: [],
  friends: []
});

const User = model('User', UserSchema);

module.exports = User;
