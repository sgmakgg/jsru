import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/menu/menuSlice.js";
import { DishCounter } from "../counters/DishCounter.jsx";
import { useAuth } from "../auth/useAuth.js";

const TOPIC_ORDER = "Order";

export const Ingredients = ({ dishId }) => {
  const { authState } = useAuth();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <ul>
      <h3>{dish.name}</h3>
      <p>{dish.ingredients.join(", ")}</p>
      <p>£{dish.price}</p>
      {authState === "authorized" ? (
        <DishCounter topic={TOPIC_ORDER} dishId={dish.id} />
      ) : null}
    </ul>
  );
};
