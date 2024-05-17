const Actors = require("./Actor");
const Directors = require("./Director");
const Genres = require("./Genre");
const Movies = require("./Movie");



Movies.belongsToMany(Genres, {through: "movie_genre"})
Movies.belongsToMany(Directors, {through: "movie_director"})
Movies.belongsToMany(Actors, {through: "movie_actor"})

Actors.belongsToMany(Movies, {through: "movie_actor"})
Directors.belongsToMany(Movies, {through: "movie_director"})
Genres.belongsToMany(Movies, {through: "movie_genre"})