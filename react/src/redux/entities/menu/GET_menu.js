import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_API_URL } from "../../../request.constants.js";

export const GET_menu = createAsyncThunk(
  "menu/GET_menu",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/api/dishes`);
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
