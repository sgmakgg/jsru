"use client";

import { dishesSelectors } from "../../redux/entities/menu/dishesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/menu/requests/getDishes.js";
import Dish from "../dish/Dish.jsx";
import Link from "next/link";

export const DishesList = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);

  const dishes = useSelector((state) => dishesSelectors.selectAll(state));

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dishes.map((item) => {
          return (
            <Link href={`/dish/${item.id}`} key={item.id}>
              <Dish id={item.id} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
