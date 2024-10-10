import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../constants/materials/normalized-mock.js";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = userSlice.selectors;
