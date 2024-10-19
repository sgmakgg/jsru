import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_restaurantById = createAsyncThunk(
  "restaurants/GET_restaurantById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`BACKEND_API_URL/api/restaurants/${id}`);
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
