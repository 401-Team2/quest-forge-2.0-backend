'use strict';

const dotenv = require('dotenv').config();
const axios = require('axios');

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
