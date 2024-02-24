import { createSlice } from "@reduxjs/toolkit";
import { mealFetch } from "../asyncThunk";

const initialState = {
  meals: {},
  isLoading: false,
  isError: null,
};

export const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    clearMeals: (state) => {
      state.meals = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(mealFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(mealFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.meals = action.payload;
      state.isError = false;
    });

    builder.addCase(mealFetch.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { clearMeals } = mealSlice.actions;

export default mealSlice.reducer;
