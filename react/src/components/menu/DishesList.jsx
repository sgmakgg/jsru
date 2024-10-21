import { dishesSelectors } from "../../redux/entities/menu/dishesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/menu/requests/getDishes.js";
import { NavLink } from "react-router-dom";
import Dish from "../dish/Dish.jsx";

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
            <NavLink to={`/dish/${item.id}`} key={item.id}>
              <Dish id={item.id} />
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
