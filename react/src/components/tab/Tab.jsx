import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { restaurantsSelectors } from "../../redux/entities/restaurants/restaurantsSlice.js";

export const Tab = ({ id, tabTopic = null }) => {
  const name = useSelector(
    (state) => restaurantsSelectors.selectById(state, id)?.name,
  );
  const { restaurantId } = useParams();

  const disabledButton = restaurantId === id && tabTopic === null;

  return (
    <ThemeDependingButton
      topic={tabTopic === null ? name : tabTopic}
      disabled={disabledButton}
      onClick={disabledButton ? null : () => {}}
    />
  );
};
