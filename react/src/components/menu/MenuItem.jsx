import Dish from "../dish/Dish.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/restaurantsSlice.js";

export const MenuItem = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
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
