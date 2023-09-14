import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const authenticateUser = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/v1/user",
      payload
    );
    return dispatch({
      type: LOGIN,
      payload: response.data
    });
  };
};

export const CloseSession = ()=>{
  return async (dispatch) => {
    return dispatch({
      type: LOGOUT,
    });
  };
}