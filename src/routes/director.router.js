const { getAll, create, getOne, remove, update } = require('../controllers/director.controllers');
const express = require('express');

const directors = express.Router();

directors.route('/directors')
    .get(getAll)
    .post(create);

directors.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directors;