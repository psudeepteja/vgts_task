import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "../feature/slices/counterSlice";
import categoryReducer from "../feature/slices/categorySlice";
import mealReducer from "../feature/slices/mealsSlice";
import mealDataReducer from "../feature/slices/mealDataSlice";
import checkoutReducer from "../feature/slices/checkoutSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  category: categoryReducer,
  meals: mealReducer,
  mealData: mealDataReducer,
  checkout: checkoutReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
