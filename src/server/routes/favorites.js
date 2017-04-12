const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/_helpers');

const knex = require('../db/connection')

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  knex('airports').select('*')
  .then((response) => {
    res.json(response)
  })
})

router.post('/', (req, res, next) => {
  knex('airports').insert({
    name: req.body.name,
    code: req.body.code
  })
  .then((response) => {
    res.json(response)
  })
  .catch((error) => {
    res.status(500).send(error)
  })
})

router.delete('/:code', (req, res, next) => {
  console.log(req.params.code)
  knex('airports')
  .where({
    code: req.params.code
  })
  .del()
  .then((response) => {
    res.json(response)
  })
})

module.exports = router;
