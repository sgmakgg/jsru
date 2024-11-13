"use client";
import ReviewForm from "../reviewForm/ReviewForm.jsx";
import { useAuth } from "../auth/useAuth.js";
import { Tab } from "../tab/Tab.jsx";
import Link from "next/link";

export const Restaurant = ({ restaurant, children }) => {
  const { authState } = useAuth();

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
