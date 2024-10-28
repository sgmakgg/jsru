"use client";

import { Tab } from "../tab/Tab.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurants/requests/getRestaurants.js";
import {
  restaurantsSelectors,
  selectRequestStatus,
} from "../../redux/entities/restaurants/restaurantsSlice.js";
import { IDLE, PENDING, REJECTED } from "../../request.constants.js";
import Link from "next/link";

const RestaurantTabs = ({ children, topic = "Restaurants" }) => {
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
        <Link href={`/restaurants/${id}`} key={id}>
          <Tab key={id} id={id} />
        </Link>
      ))}
      {children}
    </div>
  );
};
export default RestaurantTabs;
