const { getAll, create, getOne, remove, update } = require('../controllers/actor.controllers');
const express = require('express');

const actors = express.Router();

actors.route('/actors')
    .get(getAll)
    .post(create)

actors.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update)


module.exports = actors;