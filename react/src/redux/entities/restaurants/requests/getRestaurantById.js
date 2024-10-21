import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`BACKEND_API_URL/api/restaurants/${id}`);
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
