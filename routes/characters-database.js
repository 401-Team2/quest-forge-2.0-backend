'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const createCharacterModel = require('../createCharacterSchema.js');
const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    let documents = await createCharacterModel.find({});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  let { id, name, age, race, characterClass, gender } = req.body;
  let character = new createCharacterModel({
    id,
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

module.exports = router;
