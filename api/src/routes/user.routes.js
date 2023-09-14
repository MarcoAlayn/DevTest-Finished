const express = require('express');
const router = express.Router();
const { User, Favorites } = require('../db.js');
const PokemonController = require('../controllers/pokemon.controllers');

router.post('/user', async (req, res) => {
  const {
    payload: {
      email,
      given_name: firstName,
      family_name: lastName,
      picture: image,
    },
  } = req.body;
  try {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({
        firstName,
        lastName,
        image,
        email,
      });
    }

    const pokemonIds = await Favorites.findAll({ where: { user_id: user.id } });

    const favoritePokemons =
      await PokemonController.getAllPokemonsByIds(pokemonIds);

    const response = {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        email: user.email,
      },
      favoritePokemons,
    };

    res.json(response);
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
