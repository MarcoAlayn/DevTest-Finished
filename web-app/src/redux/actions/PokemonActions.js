import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const getAllPokemos = (payload) => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/v1/pokemons");
    return dispatch({
      type: GET_ALL_POKEMONS,
      payload: response.data,
    });
  };
};

export const addToFavorites = (pokemonsId, userId) => {
  const dataToSend = {
    userId: userId,
    pokemonId: pokemonsId,
  };
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/v1/pokemons",
      dataToSend
    );
    console.log(dataToSend)
    return dispatch({
      type: ADD_TO_FAVORITES,
      payload: response.data,
    });
  };
};
