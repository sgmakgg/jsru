import { Tab } from "../tab/Tab.jsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurants/requests/getRestaurants.js";
import {
  restaurantsSelectors,
  selectRequestStatus,
} from "../../redux/entities/restaurants/restaurantsSlice.js";
import { IDLE, PENDING, REJECTED } from "../../request.constants.js";

const RestaurantTabs = ({ topic = "Restaurants" }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantIds = useSelector(restaurantsSelectors.selectIds);
  const requestStatus = useSelector(selectRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <div>Loading...</div>;
  }

  if (requestStatus === REJECTED) {
    return <div>Failed to load data</div>;
  }

  return (
    <div>
      <h1>{topic}</h1>
      {restaurantIds.map((id) => (
        <NavLink to={`/restaurants/${id}`} key={id}>
          <Tab key={id} id={id} />
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};
export default RestaurantTabs;
