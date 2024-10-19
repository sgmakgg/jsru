import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_API_URL } from "../../../../request.constants.js";

export const GET_menu = createAsyncThunk(
  "menu/GET_menu",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BACKEND_API_URL}/api/dishes?restaurantId=${id}`,
      );
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
