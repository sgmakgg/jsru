import { MenuItem } from "../menu/MenuItem.jsx";
import { Reviews } from "../reviews/Reviews.jsx";
import ReviewForm from "../reviewForm/ReviewForm.jsx";
import { useAuth } from "../auth/useAuth.js";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/restaurantsSlice.js";

export const Restaurant = ({ restaurantId }) => {
  const { authState } = useAuth();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      {restaurant.menu.length > 0 && (
        <MenuItem itemName={restaurant.name} menuItems={restaurant.menu} />
      )}
      {restaurant.reviews.length > 0 && (
        <Reviews reviews={restaurant.reviews} />
      )}
      {authState === "authorized" ? <ReviewForm /> : null}
    </div>
  );
};
