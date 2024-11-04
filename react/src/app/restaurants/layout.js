import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs.jsx";
import App from "../../app.jsx";
import { getRestaurantsNext } from "../services/get-restaurants.js";

export default async function RestaurantLayout({ children }) {
  const restaurants = await getRestaurantsNext();

  return (
    <App>
      <RestaurantTabs restaurants={restaurants}>{children}</RestaurantTabs>;
    </App>
  );
}
