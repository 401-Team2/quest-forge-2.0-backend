'use strict';
const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  race: String,
  characterClass: String,
  gender: String,
});

const CharacterModel = mongoose.model('characters', CharacterSchema);

module.exports = CharacterModel;
