import { Reviews } from "./Reviews.jsx";
import { useParams } from "react-router-dom";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <Reviews restaurantId={restaurantId} />;
};
