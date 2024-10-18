import Dish from "../dish/Dish.jsx";
import { NavLink } from "react-router-dom";
import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";
import { store } from "../../redux/store.js";

export const MenuItem = ({ restaurantId }) => {
  const restaurant = restaurantsSelectors.selectById(
    store.getState(),
    restaurantId,
  );

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
