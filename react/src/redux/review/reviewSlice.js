import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../materials/normalized-mock.js";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewSlice.selectors;
