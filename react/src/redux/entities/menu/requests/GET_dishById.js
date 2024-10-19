import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_API_URL } from "../../../../request.constants.js";

export const GET_dishById = createAsyncThunk(
  "menu/GET_dishById",
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const existingDish = state.menu.entities[id];
    try {
      if (existingDish) {
        return existingDish;
      } else {
        const response = await fetch(`${BACKEND_API_URL}/api/dish/${id}`);
        return await response.json();
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
