import classNames from "classnames";
import styles from "./tab.module.css";
import { useTheme } from "../buttonThemeSwitcher/useTheme.js";
import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../redux/restaurants/restaurantsSlice.js";

export const Tab = ({ id, onTabClick, currentTab }) => {
  const name = useSelector((state) => selectRestaurantNameById(state, id));

  const { value } = useTheme();
  return (
    <button
      className={classNames(styles.default, {
        [styles.purple]: value === "purple",
        [styles.mediumPurple]: value === "mediumPurple",
      })}
      onClick={onTabClick}
      disabled={currentTab}
    >
      {name}
    </button>
  );
};
