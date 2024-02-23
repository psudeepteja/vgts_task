import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/slices/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
