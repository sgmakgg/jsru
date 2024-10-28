import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs.jsx";
import App from "../../app.jsx";

export default function RestaurantLayout({ children }) {
  return (
    <App>
      <RestaurantTabs>{children}</RestaurantTabs>;
    </App>
  );
}
