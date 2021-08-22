const axios = require('./axiosService')

module.exports = {
    async getAllPokemon() {
        let pokemonList = await axios.pokemonAPI.get('pokemon')
        return pokemonList.data
    }
}