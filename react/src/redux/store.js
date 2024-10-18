import { restaurantsSlice } from "./entities/restaurants/restaurantsSlice";
import { reviewSlice } from "./entities/review/reviewSlice";
import { userSlice } from "./entities/user/user";
import { cartSlice } from "./ui/cart/cart";
import { menuSlice } from "./entities/menu/menuSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
