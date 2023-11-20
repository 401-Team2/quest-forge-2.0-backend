const Game = require('../models/Game');

const startNewGame = async (req, res) => {
    try {
        res.status(200).json({ message: 'New game started successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error starting new game', error: error.message });
    }
};

const loadGame = async (req, res) => {
    try {
        const gameId = req.params.gameId;
        res.status(200).json({ message: 'Game loaded successfully', gameData: {/*...*/} });
    } catch (error) {
        res.status(500).json({ message: 'Error loading game', error: error.message });
    }
};

module.exports = {
    startNewGame,
    loadGame
};
