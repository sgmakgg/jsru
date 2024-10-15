import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/menu/menuSlice.js";
import { DishCounter } from "../counters/DishCounter.jsx";
import { useAuth } from "../auth/useAuth.js";

const TOPIC_ORDER = "Order";

const Dish = ({ id }) => {
  const { authState } = useAuth();
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <li key={id}>
      <h3>{dish.name}</h3>
      <p>{dish.ingredients.join(", ")}</p>
      <p>£{dish.price}</p>
      {authState === "authorized" ? (
        <DishCounter topic={TOPIC_ORDER} dishId={dish.id} />
      ) : null}
    </li>
  );
};

export default Dish;
