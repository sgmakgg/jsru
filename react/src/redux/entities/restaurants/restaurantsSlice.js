import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { GET_restaurants } from "./requests/GET_restaurants.js";
import { FULFILLED, PENDING, REJECTED } from "../../../request.constants";
import { GET_restaurantById } from "./requests/GET_restaurantById.js";

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
      .addCase(GET_restaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(GET_restaurants.fulfilled, (state, { payload }) => {
        restaurantsAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(GET_restaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(GET_restaurantById.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(GET_restaurantById.fulfilled, (state, { payload }) => {
        restaurantsAdapter.setOne(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(GET_restaurantById.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const restaurantsSelectors = restaurantsAdapter.getSelectors(
  (state) => state.restaurants,
);

export const { selectRequestStatus } = restaurantsSlice.selectors;
