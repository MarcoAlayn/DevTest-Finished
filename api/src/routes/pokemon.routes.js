const express = require('express');
const router = express.Router();
const {
  getAllPokemons,
  getPokemonByName,
  addToFavorites
} = require('../controllers/pokemon.controllers');

router.get('/pokemon/:name', getPokemonByName);

router.get('/pokemons', getAllPokemons);

router.post('/pokemons', addToFavorites )

module.exports = router;
