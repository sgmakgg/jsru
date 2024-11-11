import { getDishByIdNext } from "./get-dishById.js";

export const getDishByIdServer = async (id) => {
  if (id) {
    return await getDishByIdNext(id);
  }
  return null;
};
