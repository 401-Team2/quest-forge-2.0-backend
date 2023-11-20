'use strict';

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;
console.log("HERE");
