import Dish from "../dish/Dish.jsx";
import { useRestaurant } from "../restaurant/useRestaraunt.js";
import { NavLink } from "react-router-dom";

export const MenuItem = () => {
  const restaurant = useRestaurant();

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {restaurant.menu.map((id) => (
          <NavLink to={`/dish/${id}`} key={id}>
            <Dish id={id} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
