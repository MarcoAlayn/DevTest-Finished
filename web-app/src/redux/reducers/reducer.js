import { LOGIN, LOGOUT } from "../actions/LoginActions";
import { GET_ALL_POKEMONS, ADD_TO_FAVORITES } from "../actions/PokemonActions";

const initialState = {
  user: null,
  isLoged: false,
  allPokemons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoged: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoged: false,
      };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
