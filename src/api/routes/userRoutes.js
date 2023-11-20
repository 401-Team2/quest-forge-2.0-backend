const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createuser', userController.createUser);

router.get('/user/:id', userController.getUser);

module.exports = router;
