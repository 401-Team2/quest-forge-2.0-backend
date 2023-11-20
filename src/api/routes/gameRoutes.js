const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/startgame', gameController.startNewGame);

router.get('/loadgame/:gameId', gameController.loadGame);

module.exports = router;
