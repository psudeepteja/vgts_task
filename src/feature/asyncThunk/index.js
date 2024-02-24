import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../services";

export const categoryFetch = createAsyncThunk("categoryFetch", async (url) => {
  const data = await Service(url);
  return data;
});

export const mealFetch = createAsyncThunk("mealFetch", async (url) => {
  const data = await Service(url);
  return data;
});
