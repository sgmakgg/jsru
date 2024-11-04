"use client";

import { DishesList } from "../../../../components/menu/DishesList.jsx";
import { useRestaurantDishes } from "./useRestaurantDishes.js";

export default function MenuPage({ params }) {
  const { dishesList } = useRestaurantDishes(params);

  return <DishesList dishes={dishesList}>Order dishes</DishesList>;
}
