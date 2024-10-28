"use client";
import ReviewForm from "../reviewForm/ReviewForm.jsx";
import { useAuth } from "../auth/useAuth.js";

import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";
import { Tab } from "../tab/Tab.jsx";
import { useSelector } from "react-redux";
import Link from "next/link";

export const Restaurant = ({ restaurantId, children }) => {
  const { authState } = useAuth();
  const restaurant = useSelector((state) =>
    restaurantsSelectors.selectById(state, restaurantId),
  );

  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      <Link href={`/restaurants/${restaurant.id}/menu`}>
        <Tab id={restaurant.id} tabTopic="Menu" />
      </Link>
      <Link href={`/restaurants/${restaurant.id}/reviews`}>
        <Tab id={restaurant.id} tabTopic="Reviews" />
      </Link>
      {children}
      {authState === "authorized" ? <ReviewForm /> : null}
    </div>
  );
};
