"use client";

import { useEffect, useState } from "react";
import { Reviews } from "../../../../components/reviews/Reviews.jsx";
import { getReviewsByIdNext } from "../../../services/get-reviewsByRestaurantIdNext.js";

export default function ReviewsPage({ params }) {
  const [restaurantId, setRestaurantId] = useState(null);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    params.then((resolvedParams) => {
      setRestaurantId(resolvedParams.restaurantId);
    });
  }, [params]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (restaurantId) {
        const reviews = await getReviewsByIdNext(restaurantId);
        setReviewsList(reviews);
      }
    };
    fetchReviews();
  }, [restaurantId]);

  return <Reviews reviews={reviewsList} />;
}
