import { Review } from "../review/review.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/restaurantsSlice.js";

export const Reviews = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((id) => (
          <Review key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
