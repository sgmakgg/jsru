import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";
import { Review } from "../review/review.jsx";
import { useSelector } from "react-redux";

export const Reviews = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    restaurantsSelectors.selectById(state, restaurantId),
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
