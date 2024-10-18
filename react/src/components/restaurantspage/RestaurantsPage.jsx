import { Tab } from "../tab/Tab.jsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { GET_restaurants } from "../../redux/entities/restaurants/GET_restaurants.js";
import {
  restaurantsSelectors,
  selectRequestStatus,
} from "../../redux/entities/restaurants/restaurantsSlice.js";
import { IDLE, PENDING, REJECTED } from "../../request.constants.js";
import { store } from "../../redux/store.js";

const RestaurantPage = ({ topic = "Restaurants" }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_restaurants());
  }, [dispatch]);

  const restaurantIds = restaurantsSelectors.selectIds(store.getState());
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
export default RestaurantPage;
