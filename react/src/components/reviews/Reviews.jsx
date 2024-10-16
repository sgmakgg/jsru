import { Review } from "../review/review.jsx";
import { useRestaurant } from "../restaurant/useRestaraunt.js";

export const Reviews = () => {
  const restaurant = useRestaurant();
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
