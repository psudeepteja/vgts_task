import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealData: {},
};

export const mealDataSlice = createSlice({
  name: "mealData",
  initialState,
  reducers: {
    mealDataAction: (state, action) => {
      state.mealData = action.payload;
    },
    clearMealData: (state) => {
      state.mealData = {};
    },
  },
});

export const { mealDataAction, clearMealData } = mealDataSlice.actions;

export default mealDataSlice.reducer;
