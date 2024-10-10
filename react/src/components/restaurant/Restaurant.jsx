import { MenuItem } from "../menu/MenuItem.jsx";
import { Reviews } from "../reviews/Reviews.jsx";
import ReviewForm from "../reviewForm/ReviewForm.jsx";
import { useAuthn } from "../authn/useAuthn.js";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/restaurantsSlice.js";

export const Restaurant = ({ restaurantId }) => {
  const { authnState } = useAuthn();
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
      {authnState === "authorized" ? <ReviewForm /> : null}
    </div>
  );
};
