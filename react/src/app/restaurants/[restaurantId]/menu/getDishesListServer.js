import { getDishesListNext } from "../../../services/get-dishesList.js";

export const getDishesListServer = async (restaurantId) => {
  return await getDishesListNext(restaurantId);
};
