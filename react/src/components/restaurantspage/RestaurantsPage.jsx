import { useState } from "react";
import { Tab } from "../tab/Tab.jsx";
import { Restaurant } from "../restaurant/Restaurant.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants/restaurantsSlice.js";
import { Cart } from "../cart/cart.jsx";
import { useAuthn } from "../authn/useAuthn.js";

const RestaurantPage = ({ topic = "Restaurants" }) => {
  const restaurantIds = useSelector(selectRestaurantsIds);
  const { authnState } = useAuthn();

  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0],
  );

  const onTabChange = (id) => {
    setCurrentRestaurantId(id);
  };

  return (
    <div>
      <h1>{topic}</h1>
      {restaurantIds.map((id) => (
        <Tab
          key={id}
          id={id}
          onTabClick={() => onTabChange(id)}
          currentTab={id === currentRestaurantId}
        />
      ))}
      <div style={{ display: "flex" }}>
        <Restaurant restaurantId={currentRestaurantId} />
        <div style={{ width: "150px" }} />
        {authnState === "authorized" ? <Cart /> : null}
      </div>
    </div>
  );
};
export default RestaurantPage;
