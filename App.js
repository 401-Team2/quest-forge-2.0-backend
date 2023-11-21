// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3000;
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// // Mock database
// const gameStates = {}; // Stores game states indexed by characterId
// const characters = {}; // Stores character data indexed by characterId

// app.use(cors());
// app.use(bodyParser.json());

// // Start New Game Endpoint
// app.post('/startgame', async (req, res) => {
//     const characterId = generateCharacterId();
//     const gameState = initializeGameState(); // Implement this function based on your game's logic
//     gameStates[characterId] = gameState;
//     res.json({ characterId, gameState });
// });

// // Load Game Endpoint
// app.post('/loadgame', async (req, res) => {
//     const { characterId } = req.body;
//     if (!gameStates[characterId]) {
//         return res.status(404).json({ message: 'Game state not found for character' });
//     }
//     res.json(gameStates[characterId]);
// });

// // Continue Game Endpoint
// app.post('/adventure', async (req, res) => {
//   const { characterId, userChoice } = req.body;
//   if (!gameStates[characterId]) {
//     return res.status(404).json({ message: 'Game state not found for character' });
//   }

//   try {
//     let updatedGameState;
    
//     // Option 1: AI Call
//     // Uncomment the following lines if you want to make an AI call to process the user's choice
//     updatedGameState = await processUserChoice(gameStates[characterId], userChoice);
    
//     // Option 2: Game Logic Processing
//     // Uncomment the following lines if you want to process the user's choice using game logic
//     // updatedGameState = processUserChoiceWithGameLogic(gameStates[characterId], userChoice);

//     gameStates[characterId] = updatedGameState;

//     res.json(updatedGameState);
//   } catch (error) {
//     res.status(500).json({ message: 'Error processing game state', error: error.message });
//   }
// });

// // Fetch Characters Endpoint
// app.get('/characters', async (req, res) => {
//     res.json(Object.values(characters));
// });

// // Create Character Endpoint
// app.post('/createcharacter', async (req, res) => {
//     const characterData = req.body;
//     const characterId = generateCharacterId();
//     characters[characterId] = characterData;
//     res.json({ characterId, characterData });
// });

// // Helper functions
// function generateCharacterId() {
//     return Math.floor(Math.random() * 1000000).toString();
// }

// function initializeGameState() {
//     // Initialize and return the game state
//     return {};
// }

// async function processUserChoice(gameState, userChoice) {
//   // Process the user choice and update the game state
//   // Make a request to the OpenAI API
//   const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//     prompt: userChoice,
//     max_tokens: 100,
//     temperature: 0.7,
//     n: 1
//   }, {
//     headers: {
//       'Authorization': `Bearer ${OPENAI_API_KEY}`,
//       'Content-Type': 'application/json'
//     }
//   });

//   const generatedText = response.data.choices[0].text.trim();

//   gameState.generatedText = generatedText;

//   return gameState;
// }

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
