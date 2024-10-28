"use client";

import { useEffect, useState } from "react";
import { Restaurant } from "../../../components/restaurant/Restaurant.jsx";

export default function RestaurantLayout({ params, children }) {
  const [restaurantId, setRestaurantId] = useState(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setRestaurantId(resolvedParams.restaurantId);
    });
  }, [params]);

  if (!restaurantId) {
    return <div>Loading...</div>;
  }

  return <Restaurant restaurantId={restaurantId}>{children}</Restaurant>;
}
