const express = require('express');
const router = express.Router();
const actors = require("./actor.router");
const movies = require('./movie.router');
const genres = require('./genre.router');
const directors = require('./director.router');

// colocar las rutas aquí

router.use(actors)
router.use(movies)
router.use(genres)
router.use(directors)



module.exports = router;