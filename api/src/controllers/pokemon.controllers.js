const axios = require('axios');

class PokemonController {
  static async getPokemonByName(req, res) {
    try {
      const pokemon = req.params.name;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      );
      const { id, name, sprites } = response.data;
      const pokemonData = {
        id,
        name,
        imageFront: sprites.front_default,
        imageBack: sprites.back_default,
      };
      res.json(pokemonData);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el Pokémon.' });
    }
  }

  static async getAllPokemons(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
      );

      const pokemonUrls = response.data.results.map((pokemon) => pokemon.url);

      const pokemonDetails = await Promise.all(
        pokemonUrls.map(async (url) => {
          const pokemonResponse = await axios.get(url);
          const { id, name, sprites } = pokemonResponse.data;
          return {
            id,
            name,
            imageFront: sprites.front_default,
            imageBack: sprites.back_default,
          };
        }),
      );

      res.json(pokemonDetails);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Error al obtener la lista de Pokémones.' });
    }
  }

  static async getAllPokemonsByIds(pokemonIds) {
    try {
      const pokemonDetails = await Promise.all(
        pokemonIds.map(async (pokemonId) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
          );
          const { id, name, sprites } = response.data;
          return {
            id,
            name,
            imageFront: sprites.front_default,
            imageBack: sprites.back_default,
          };
        }),
      );
      return pokemonDetails;
    } catch (error) {
      throw new Error('Error al obtener los Pokémon por ID.');
    }
  }
}

module.exports = PokemonController;
