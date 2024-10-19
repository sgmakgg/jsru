import { DishCounter } from "../counters/DishCounter.jsx";
import styles from "./cartItem.module.css";
import { menuSelectors } from "../../redux/entities/menu/menuSlice.js";
import { useSelector } from "react-redux";

export const CartItem = ({ itemId }) => {
  const dish = useSelector((state) => menuSelectors.selectById(state, itemId));

  return (
    <div className={styles.container}>
      <span>{dish.name}</span>
      <DishCounter dishId={itemId} />
    </div>
  );
};
