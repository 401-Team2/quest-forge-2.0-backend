'use strict';

const dotenv = require('dotenv').config();
const axios = require('axios');

const MONGODB_URL = process.env.MONGODB_URL;

class Character {
  constructor(id, name, age, characerClass, race, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.characerClass = characerClass;
    this.race = race;
    this.gender = gender;
  }
}

async function getAllCharacters() {
  try {
    const response = await axios.get(`${MONGODB_URL}/`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function getOneCharacter(id) {
  try {
    const response = await axios.get(`${MONGODB_URL}/:${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { getAllCharacters, getOneCharacter };
