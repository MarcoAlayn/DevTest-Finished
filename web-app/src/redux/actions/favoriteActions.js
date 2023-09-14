

//todo
 const ADD_FAVORITE = "ADD_FAVORITE"


export const addFavorite = (pokemon)=> ({
  type: ADD_FAVORITE,
  payload: { pokemon },
});


const favoriteActions = {
  addFavorite,
};

export default favoriteActions;
