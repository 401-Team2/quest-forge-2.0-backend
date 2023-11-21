'use strict';

const dotenv = require('dotenv').config();
const axios = require('axios');

const MONGODB_URI = process.env.MONGODB_URI;

class Character {
  constructor(name, age, characterClass, race, gender) {
    this.name = name;
    this.age = age;
    this.characterClass = characterClass;
    this.race = race;
    this.gender = gender;
  }
}

async function getAllCharacters() {
  try {
    const response = await axios.get(`${MONGODB_URI}/characters`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function getOneCharacter(id) {
  try {
    const response = await axios.get(`${MONGODB_URI}/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { getAllCharacters, getOneCharacter };
