const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Poke-API' });
});

module.exports = router;
