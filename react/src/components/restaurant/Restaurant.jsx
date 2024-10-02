import { MenuItem } from "../menu/MenuItem.jsx";
import { ReviewList } from "../reviews/ReviewList.jsx";
import ReviewForm from "../reviewForm/ReviewForm.jsx";

export const Restaurant = ({ restaurant }) => {
  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      {restaurant.menu.length > 0 && <MenuItem itemName={restaurant.name} menuItems={restaurant.menu} />}
      {restaurant.reviews.length > 0 && <ReviewList reviews={restaurant.reviews} />}
      <ReviewForm />
    </div>
  );
};