import { configureStore, combineReducers } from "@reduxjs/toolkit";
import login from "./actions/login";
import homeCRUD from "./actions/homeCRUD";

const reducers = combineReducers({
  login: login,
  crud: homeCRUD,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
