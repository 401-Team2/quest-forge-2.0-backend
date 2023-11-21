const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');
const axios = require('axios');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection

// console.log('MongoDB URI:', process.env.MONGODB_URI); // For debugging

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// OpenAI initialization
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Define Character Schema and Model
const characterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    race: String,
    class: String,
});
const Character = mongoose.model('Character', characterSchema);

// Define Character Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    race: String,
    class: String,
});
const Character = mongoose.model('Character', characterSchema);

// Character Routes
app.post('/createcharacter', async (req, res) => {
  console.log(req.body);
  try {
    let response = await axios.post('https://tjmp838d98.execute-api.us-west-2.amazonaws.com/WorkingPOST', req.body);
    console.log('HERE IS THE DATA', response.data);
    res.send(response.data);
  } catch (e) {
    res.send(e);
  }
});

app.post('/startgame', async (req, res) => {
    const characterId = generateCharacterId();
    const gameState = initializeGameState(); // Implement this function based on your game's logic
    gameStates[characterId] = gameState;
    res.json({ characterId, gameState });
});

app.get('/characters', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Game Logic Route
app.post('/game/generateStory', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150,
        });
        res.json({ story: response.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

