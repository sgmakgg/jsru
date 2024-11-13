import { Reviews } from "../../../../components/reviews/Reviews.jsx";
import { getReviewsByIdNext } from "../../../services/get-reviewsByRestaurantIdNext.js";

export default async function ReviewsPage({ params }) {
  const restaurantId = (await params).restaurantId;
  const reviewsList = await getReviewsByIdNext(restaurantId);

  return <Reviews reviews={reviewsList} />;
}
