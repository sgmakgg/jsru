import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../redux/restaurants/restaurantsSlice.js";
import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";

export const Tab = ({ id, onTabClick, currentTab }) => {
  const name = useSelector((state) => selectRestaurantNameById(state, id));

  return (
    <ThemeDependingButton
      topic={name}
      callback={onTabClick}
      disabled={currentTab}
    />
  );
};
