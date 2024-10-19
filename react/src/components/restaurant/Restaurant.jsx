import ReviewForm from "../reviewForm/ReviewForm.jsx";
import { useAuth } from "../auth/useAuth.js";
import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";
import { NavLink, Outlet } from "react-router-dom";
import { Tab } from "../tab/Tab.jsx";
import { useSelector } from "react-redux";

export const Restaurant = ({ restaurantId }) => {
  const { authState } = useAuth();
  const restaurant = useSelector((state) =>
    restaurantsSelectors.selectById(state, restaurantId),
  );

  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      <NavLink to={`${restaurant.id}/menu`}>
        <Tab id={restaurant.id} tabTopic="Menu" />
      </NavLink>
      <NavLink to={`${restaurant.id}/reviews`}>
        <Tab id={restaurant.id} tabTopic="Reviews" />
      </NavLink>
      <Outlet />
      {authState === "authorized" ? <ReviewForm /> : null}
    </div>
  );
};
