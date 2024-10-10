import { DishCounter } from "../counters/DishCounter.jsx";
import { selectDishById } from "../../redux/menu/menuSlice.js";
import { useSelector } from "react-redux";

export const CartItem = ({ itemId }) => {
  const dish = useSelector((state) => selectDishById(state, itemId));
  return (
    <div key={itemId} style={{ display: "flex" }}>
      <span style={{ margin: "0 10px" }}>{dish.name}</span>
      <DishCounter topic={""} dishId={itemId} />
    </div>
  );
};
