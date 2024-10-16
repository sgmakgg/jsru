import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/restaurantsSlice.js";

export const useRestaurant = () => {
  const { restaurantId } = useParams();

  return useSelector((state) => selectRestaurantById(state, restaurantId));
};
