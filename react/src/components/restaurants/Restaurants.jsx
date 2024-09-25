import { MenuItem } from "../menu/MenuItem.jsx";
import { ReviewList } from "../reviews/ReviewList.jsx";
import {restaurants} from "../../constants/materials/mock.js";

export const Restaurants = ({ restaurantId }) => {

  const currentRestaurant = restaurants.find(({ id }) => id === restaurantId);

  return (
    <div key={currentRestaurant.id}>
      <h2>{currentRestaurant.name}</h2>
      {currentRestaurant.menu.length > 0 && <MenuItem itemName={currentRestaurant.name} menuItems={currentRestaurant.menu} />}
      {currentRestaurant.reviews.length > 0 && <ReviewList reviews={currentRestaurant.reviews} />}
    </div>
  );
};