const mongoose = require('mongoose');
// step 1 :- create the schema for user
const userSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  dob: { type: String, required: false },
  age: { type: Number, required: false },
});

// step 2 :- connect the schema to the users collection
const User = mongoose.model('user', userSchema); // users

module.exports = User;
