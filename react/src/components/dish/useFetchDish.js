"use client";

import { useEffect, useState } from "react";
import { getDishByIdNext } from "../../app/services/get-dishById.js";

export const useFetchDish = (id) => {
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const fetchDish = async () => {
      if (id) {
        const dishes = await getDishByIdNext(id);
        setDish(dishes);
      }
    };
    fetchDish();
  }, [id]);

  return dish;
};
