'use strict';

const express = require('express');
const router = express.Router();
const UserModel = require('../src/api/models/UserModel.js');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new UserModel({
      username,
      email,
      password,
    });

    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
