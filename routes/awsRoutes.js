'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const axios = require('axios');

router.use(express.json());

router.post('/createChar', async (req, res) => {
  const characterData = req.body;
  characterData.age = parseInt(characterData.age);
  console.log(characterData);
  axios
    .post(
      'https://tjmp838d98.execute-api.us-west-2.amazonaws.com/WorkingPOST',
      characterData
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
});

router.get('/prompt/:charid', async (req, res) => {
  console.log('Request received');
  const charid = req.params.charid;
  axios
    .post(
      `https://tjmp838d98.execute-api.us-west-2.amazonaws.com/WorkingPOST/user/${charid}`
    )
    .then((results) => res.send(results.data))
    .catch((err) => res.send(err));
});

module.exports = router;
