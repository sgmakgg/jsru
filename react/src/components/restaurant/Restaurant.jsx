import ReviewForm from "../reviewForm/ReviewForm.jsx";
import { useAuth } from "../auth/useAuth.js";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/restaurantsSlice.js";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Tab } from "../tab/Tab.jsx";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const { authState } = useAuth();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      <NavLink to={`/restaurants/${restaurant.id}/menu`}>
        <Tab id={restaurant.id} tabTopic="Menu" />
      </NavLink>
      <NavLink to={`/restaurants/${restaurant.id}/reviews`}>
        <Tab id={restaurant.id} tabTopic="Reviews" />
      </NavLink>
      <Outlet />
      {authState === "authorized" ? <ReviewForm /> : null}
    </div>
  );
};
