"use client";

import { useEffect, useState } from "react";
import { getDishesListNext } from "../../../services/get-dishesList.js";

export const useRestaurantDishes = (params) => {
  const [restaurantId, setRestaurantId] = useState(null);
  const [dishesList, setDishesList] = useState([]);

  useEffect(() => {
    params.then((resolvedParams) => {
      setRestaurantId(resolvedParams.restaurantId);
    });
  }, [params]);

  useEffect(() => {
    const fetchDishes = async () => {
      if (restaurantId) {
        const dishes = await getDishesListNext(restaurantId);
        setDishesList(dishes);
      }
    };
    fetchDishes();
  }, [restaurantId]);

  return { dishesList };
};
