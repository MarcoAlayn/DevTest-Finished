const express = require('express');
const router = express.Router();
const {
  getAllPokemons,
  getPokemonByName,
} = require('../controllers/pokemon.controllers');

router.get('/pokemon/:name', getPokemonByName);

router.get('/pokemons', getAllPokemons);

module.exports = router;
