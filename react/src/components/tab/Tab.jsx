import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../redux/restaurants/restaurantsSlice.js";
import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";
import { useParams } from "react-router-dom";

export const Tab = ({ id, tabTopic = null }) => {
  const name = useSelector((state) => selectRestaurantNameById(state, id));
  const { restaurantId } = useParams();

  return (
    <ThemeDependingButton
      topic={tabTopic === null ? name : tabTopic}
      disabled={tabTopic === null ? restaurantId === id : false}
    />
  );
};
