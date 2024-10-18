import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_API_URL } from "../../../request.constants.js";

export const GET_restaurants = createAsyncThunk(
  "restaurants/GET_restaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BACKEND_API_URL + "/api/restaurants");
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
