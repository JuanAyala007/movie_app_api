const { getAll, create, getOne, remove, update, setMovie, setGenre, setDirector } = require('../controllers/movie.controllers');
const express = require('express');

const movies = express.Router();

movies.route('/movies')
    .get(getAll)
    .post(create);

movies.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
    
movies.route('/movies/:id/actor')
    .post(setMovie)

movies.route('/movies/:id/genre')
    .post(setGenre)

movies.route('/movies/:id/director')
    .post(setDirector)



module.exports = movies;