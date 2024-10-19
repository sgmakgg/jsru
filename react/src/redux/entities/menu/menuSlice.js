import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, PENDING, REJECTED } from "../../../request.constants.js";
import { GET_menu } from "./requests/GET_menu.js";
import { GET_dishById } from "./requests/GET_dishById.js";

const menuAdapter = createEntityAdapter({
  selectId: (menu) => menu.id,
});
const initialState = menuAdapter.getInitialState({
  requestStatus: "idle",
});

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.filter((item) => item.id === id),
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(GET_menu.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(GET_menu.fulfilled, (state, { payload }) => {
        menuAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(GET_menu.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(GET_dishById.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(GET_dishById.fulfilled, (state, { payload }) => {
        if (payload && payload.id) {
          if (!state[payload.id]) {
            menuAdapter.addOne(state, payload);
          } else {
            menuAdapter.updateOne(state, {
              id: payload.id,
              changes: payload,
            });
          }
          state.requestStatus = FULFILLED;
        } else {
          console.error("Invalid payload:", payload);
        }
      })
      .addCase(GET_dishById.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const menuSelectors = menuAdapter.getSelectors((state) => state.menu);

export const { selectRequestStatus } = menuSlice.selectors;
