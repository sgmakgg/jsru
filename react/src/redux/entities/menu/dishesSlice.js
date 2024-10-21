import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, PENDING, REJECTED } from "../../../request.constants.js";
import { getDishes } from "./requests/getDishes.js";
import { getDishById } from "./requests/getDishById.js";

const menuAdapter = createEntityAdapter({
  selectId: (menu) => menu.id,
});
const initialState = menuAdapter.getInitialState({
  requestStatus: "idle",
});

export const dishesSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.filter((item) => item.id === id),
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        menuAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getDishById.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        menuAdapter.setOne(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishById.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const dishesSelectors = menuAdapter.getSelectors((state) => state.menu);

export const { selectRequestStatus } = dishesSlice.selectors;
