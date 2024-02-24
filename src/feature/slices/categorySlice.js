import { createSlice } from "@reduxjs/toolkit";
import { categoryFetch } from "../asyncThunk";

const initialState = {
  category: {},
  isLoading: false,
  isError: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(categoryFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(categoryFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
      state.isError = false;
    });

    builder.addCase(categoryFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default categorySlice.reducer;
