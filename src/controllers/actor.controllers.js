const catchError = require('../utils/catchError');
const actor = require('../models/Actor');
const { where } = require('sequelize');
const Movies = require('../models/Movie');

const getAll = catchError(async(req, res) => {
    const actors = await actor.findAll({include: [Movies]})

    return res.json(actors)
});

const create = catchError(async(req, res) => {
    const {firstName, lastName, nationality, image, birthday } = req.body
    const actors = await actor.create({
        firstName: firstName,
        lastName: lastName,
        nationality: nationality,
        image: image,
        birthday: birthday,
    })

    return res.status(201).json(actors)
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const actorId = await actor.findByPk(id)
    return res.json(actorId)
})

const remove = catchError(async(req, res) => {
    const { id } = req.params
    await actor.destroy({where: {id: id} })
    return res.sendStatus(204)
})

const update = catchError(async(req, res ) => {
    const { firstName, lastName, image, birthday, nationality} = req.body
    const { id } = req.params
    const actorUp = await actor.update({
        firstName: firstName,
        lastName: lastName,
        image: image,
        birthday: birthday,
        nationality: nationality
    }, { where: { id: id }, returning: true })
    return res.json(actorUp)
})



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}
