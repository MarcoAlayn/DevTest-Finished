import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"

export const getAllPokemos = (payload) => {
    return async (dispatch) => {
      const response = await axios.get(
        "http://localhost:3001/v1/pokemons"
      );
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: response.data
      });
    };
  };