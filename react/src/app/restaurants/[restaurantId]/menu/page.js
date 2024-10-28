"use client";

import { useEffect, useState } from "react";
import { DishesList } from "../../../../components/menu/DishesList.jsx";

export default function MenuPage({ params }) {
  const [restaurantId, setRestaurantId] = useState(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setRestaurantId(resolvedParams.restaurantId);
    });
  }, [params]);

  if (!restaurantId) {
    return <div>Loading...</div>;
  }

  return <DishesList restaurantId={restaurantId}>Order dishes</DishesList>;
}
