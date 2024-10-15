import { DishCounter } from "../counters/DishCounter.jsx";
import { selectDishById } from "../../redux/menu/menuSlice.js";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./cartItem.module.css";

export const CartItem = ({ itemId }) => {
  const dish = useSelector((state) => selectDishById(state, itemId));
  return (
    <div className={classNames(styles.container)}>
      <span>{dish.name}</span>
      <DishCounter dishId={itemId} />
    </div>
  );
};
