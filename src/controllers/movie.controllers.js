const catchError = require('../utils/catchError');
const movie = require('../models/Movie');
const Actors = require('../models/Actor');
const Genres = require('../models/Genre');
const Directors = require('../models/Director');

const getAll = catchError(async(req, res) => {
    const results = await movie.findAll({include: [Actors, Genres, Directors]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {name, image, synopsis, releaseYear} = req.body
    const result = await movie.create({
        name: name,
        image: image,
        synopsis: synopsis,
        releaseYear: releaseYear
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movie.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await movie.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setMovie = catchError(async (req, res) => {
    const { id } = req.params
    const listMovie = await movie.findByPk(id)
    if(listMovie === null) return res.status(404).json({message: "movie no found"})

    await listMovie.setActors(req.body)
    const movieActor = await listMovie.getActors()
    return res.json(movieActor)
})

const setGenre = catchError(async (req, res) => {
    const { id } = req.params
    const listGenre = await movie.findByPk(id)
    if(listGenre === null) return res.status(404).json({message: "movie no found"})

    await listGenre.setGenres(req.body)
    const movieGenre = await listGenre.getGenres()
    return res.json(movieGenre)
})

const setDirector = catchError(async (req, res) => {
    const { id } = req.params
    const listDirector = await movie.findByPk(id)
    if(listDirector === null) return res.status(404).json({message: "movie no found"})

    await listDirector.setDirectors(req.body)
    const movieDirector = await listDirector.getDirectors()
    return res.json(movieDirector)
})




module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMovie,
    setGenre,
    setDirector
}