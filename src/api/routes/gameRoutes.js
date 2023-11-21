const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/generateStory', gameController.generateStory);

module.exports = router;
