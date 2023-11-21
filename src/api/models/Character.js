const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  race: String,
  class: String,
  // Add other fields as necessary
});

module.exports = mongoose.model('Character', characterSchema);
