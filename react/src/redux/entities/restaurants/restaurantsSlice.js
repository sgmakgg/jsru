import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./requests/getRestaurants.js";
import { FULFILLED, PENDING, REJECTED } from "../../../request.constants";
import { getRestaurantById } from "./requests/getRestaurantById.js";

const restaurantsAdapter = createEntityAdapter({
  selectId: (restaurant) => restaurant.id,
});
const initialState = restaurantsAdapter.getInitialState({
  ids: [],
  entities: {},
  requestStatus: "idle",
});

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        restaurantsAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getRestaurantById.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        restaurantsAdapter.setOne(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const restaurantsSelectors = restaurantsAdapter.getSelectors(
  (state) => state.restaurants,
);

export const { selectRequestStatus } = restaurantsSlice.selectors;
