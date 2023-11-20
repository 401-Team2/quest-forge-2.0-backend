"use strict";
import mongoose from 'mongoose';
const createcCharacterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    race: String,
    characterClass: String,

});

