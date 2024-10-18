import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";
import { useParams } from "react-router-dom";
import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";
import { store } from "../../redux/store.js";

export const Tab = ({ id, tabTopic = null }) => {
  const name = restaurantsSelectors.selectById(store.getState(), id).name;
  const { restaurantId } = useParams();

  return (
    <ThemeDependingButton
      topic={tabTopic === null ? name : tabTopic}
      disabled={tabTopic === null ? restaurantId === id : false}
    />
  );
};
