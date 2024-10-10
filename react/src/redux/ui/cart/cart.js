import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (!existingItem) {
        state.items.push({
          id: payload.id,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem(state, { payload }) {
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== payload.id);
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
  selectors: {
    selectItems: (state) => state.items,
    selectAmount: (state, id) => {
      const item = state.items.find((item) => item.id === id);
      return item ? item.quantity : 0;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const { selectItems, selectAmount } = cartSlice.selectors;
