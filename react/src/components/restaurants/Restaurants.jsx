import { MenuItem } from "../menu/MenuItem.jsx";
import { ReviewList } from "../reviews/ReviewList.jsx";
import { useEffect, useState } from "react";

export const Restaurants = ({ restaurants, page }) => {
  const [index, setIndex] = useState(page - 1);

  useEffect(() => {
    setIndex(page - 1);
  }, [page]);

  const currentRestaurant = restaurants[index];

  return (
    <div key={currentRestaurant.id}>
      {currentRestaurant.menu.length > 0 && <MenuItem itemName={currentRestaurant.name} menuItems={currentRestaurant.menu} />}
      {currentRestaurant.reviews.length > 0 && <ReviewList reviews={currentRestaurant.reviews} />}
    </div>
  );
};