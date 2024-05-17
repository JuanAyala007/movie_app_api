const { getAll, create, getOne, remove, update, setGenre } = require('../controllers/genre.controllers');
const express = require('express');

const genres = express.Router();

genres.route('/genres')
    .get(getAll)
    .post(create);

genres.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update);


module.exports = genres;