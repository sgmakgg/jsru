import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/materials/normalized-mock.js";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  names: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant.name;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantNameById: (state, id) => state.names[id],
  },
});

export const {
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurantNameById,
} = restaurantsSlice.selectors;
