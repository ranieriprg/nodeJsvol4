const routes = require('express').Router()
const controller = require('../controller')

routes.get('/todos', controller.pokemon.getPokemon)

module.exports = routes