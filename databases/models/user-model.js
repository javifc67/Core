'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  uuid: {
    type: String,
    unique: true,
  },
  name: String,
  email: String,
  phone: String,
  friends: [],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
