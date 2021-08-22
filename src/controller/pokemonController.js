const service = require('../services')

module.exports = {
    async getPokemon(req, res, next) {
        let result = await service.pokemon.getAllPokemon()
        console.log('log do controler', result)
        res.json({ result: result })
    }
}