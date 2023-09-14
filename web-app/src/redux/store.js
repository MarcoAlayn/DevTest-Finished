import {
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = reducer;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
