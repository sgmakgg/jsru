import { restaurantsSlice } from "./entities/restaurants/restaurantsSlice";
import { reviewSlice } from "./entities/review/reviewSlice";
import { userSlice } from "./entities/user/user";
import { cartSlice } from "./ui/cart/cart";
import { dishesSlice } from "./entities/menu/dishesSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
