import { Restaurant } from "./Restaurant.jsx";
import { useParams } from "react-router-dom";

export const SingleRestaurantPage = () => {
  const { restaurantId } = useParams();
  return <Restaurant restaurantId={restaurantId} />;
};
