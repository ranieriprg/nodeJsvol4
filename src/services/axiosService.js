const axios = require('axios')

const pokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

module.exports = {
    pokemonAPI,
    default: axios
}