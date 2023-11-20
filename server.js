'use strict';

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;
console.log('HERE');
