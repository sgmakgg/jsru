import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";
import { Review } from "../review/review.jsx";
import { store } from "../../redux/store.js";

export const Reviews = ({ restaurantId }) => {
  const restaurant = restaurantsSelectors.selectById(
    store.getState(),
    restaurantId,
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
