const express = require('express');
const router = express.Router();
const { createCharacter, getCharacters } = require('../controllers/characterController');

router.post('/create', createCharacter);
router.get('/', getCharacters);

module.exports = router;
