import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingDetails: {},
};

export const checkoutSlice = createSlice({
  name: "Checkout",
  initialState,
  reducers: {
    shippingDetailsAction: (state, action) => {
      state.shippingDetails = action.payload;
    },
    clearShippingDetails: (state) => {
      state.shippingDetails = {};
    },
  },
});

export const { shippingDetailsAction, clearShippingDetails } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
