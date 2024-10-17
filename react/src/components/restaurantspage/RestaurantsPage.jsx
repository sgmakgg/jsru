import { Tab } from "../tab/Tab.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants/restaurantsSlice.js";
import { NavLink, Outlet } from "react-router-dom";

const RestaurantPage = ({ topic = "Restaurants" }) => {
  const restaurantIds = useSelector(selectRestaurantsIds);

  return (
    <div>
      <h1>{topic}</h1>
      {restaurantIds.map((id) => (
        <NavLink to={`/restaurants/${id}`} key={id}>
          <Tab key={id} id={id} />
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};
export default RestaurantPage;
