const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/_helpers');

const indexController = require('../controllers/index');

const knex = '../db/connection'

router.get('/favorites', function (req, res, next) {
  res.send('What Up')
});

module.exports = router;
