import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../materials/normalized-mock.js";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = menuSlice.selectors;
