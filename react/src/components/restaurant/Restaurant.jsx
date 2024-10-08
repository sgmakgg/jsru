import { MenuItem } from "../menu/MenuItem.jsx";
import { ReviewList } from "../reviews/ReviewList.jsx";
import ReviewForm from "../reviewForm/ReviewForm.jsx";
import {useAuthn} from "../authn/useAuthn.js";

export const Restaurant = ({ restaurant }) => {
    const {authnState} = useAuthn();
  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      {restaurant.menu.length > 0 && <MenuItem itemName={restaurant.name} menuItems={restaurant.menu} />}
      {restaurant.reviews.length > 0 && <ReviewList reviews={restaurant.reviews} />}
        { authnState === 'authorized' ? <ReviewForm /> : null }
    </div>
  );
};