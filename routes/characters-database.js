'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const CharacterModel = require('../src/api/models/CharacterModel.js');
const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    let documents = await CharacterModel.find({});
    res.json(documents);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:characterId', async (req, res) => {
  const { characterId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(characterId)) {
    res.status(400).send('Invalid character Id.');
    return;
  }

  try {
    let result = await CharacterModel.findById(characterId);
    if (!result) {
      res.status(404).send('Character not found');
    } else {
      res.json(result);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  let { name, age, race, characterClass, gender } = req.body;
  let character = new CharacterModel({
    name,
    age,
    race,
    characterClass,
    gender,
  });
  try {
    let document = await character.save();
    res.json(document);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:characterId', async (req, res) => {
  const { characterId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(characterId)) {
    res.status(400).send('Invalid character Id.');
    return;
  }

  try {
    let result = await CharacterModel.findByIdAndDelete(characterId);
    if (!result) {
      res.status(404).send('Character not found');
    } else {
      res.status(204).send('Character deleted successfully');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
