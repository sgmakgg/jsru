import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./restaurants/restaurantsSlice.js";
import { menuSlice } from "./menu/menuSlice.js";
import { reviewSlice } from "./review/reviewSlice.js";
import { userSlice } from "./user/user.js";
import { cartSlice } from "./ui/cart/cart.js";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
