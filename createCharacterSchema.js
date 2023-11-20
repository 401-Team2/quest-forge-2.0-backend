'use strict';
import mongoose from 'mongoose';
const createcCharacterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  race: String,
  characterClass: String,
  gender: String,
});

const createCharacterModel = mongoose.model(
  'characters',
  createcCharacterSchema
);

module.exports = createCharacterModel;
