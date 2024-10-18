import { DishCounter } from "../counters/DishCounter.jsx";

import { useSelector } from "react-redux";
import styles from "./cartItem.module.css";
import { selectDishById } from "../../redux/entities/menu/menuSlice.js";

export const CartItem = ({ itemId }) => {
  const dish = useSelector((state) => selectDishById(state, itemId));
  return (
    <div className={styles.container}>
      <span>{dish.name}</span>
      <DishCounter dishId={itemId} />
    </div>
  );
};
