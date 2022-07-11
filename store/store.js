import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const reducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;
