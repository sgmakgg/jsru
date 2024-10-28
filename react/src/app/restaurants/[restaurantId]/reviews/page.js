"use client";

import { useEffect, useState } from "react";
import { Reviews } from "../../../../components/reviews/Reviews.jsx";

export default function ReviewsPage({ params }) {
  const [restaurantId, setRestaurantId] = useState(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setRestaurantId(resolvedParams.restaurantId);
    });
  }, [params]);

  if (!restaurantId) {
    return <div>Loading...</div>;
  }

  return <Reviews restaurantId={restaurantId} />;
}
