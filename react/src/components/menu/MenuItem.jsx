import { menuSelectors } from "../../redux/entities/menu/menuSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_menu } from "../../redux/entities/menu/requests/GET_menu.js";
import { NavLink } from "react-router-dom";
import Dish from "../dish/Dish.jsx";

export const MenuItem = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_menu(restaurantId));
  }, [dispatch, restaurantId]);

  const menu = useSelector((state) => menuSelectors.selectAll(state));

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menu.map((item) => {
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
