import { Counter } from "./Counter.jsx";
import { useSelector } from "react-redux";
import { selectAmount } from "../../redux/ui/cart/cart.js";

export const DishCounter = ({ topic, dishId }) => {
  const amount = useSelector((state) => selectAmount(state, dishId));

  return <Counter topic={topic} outerValue={amount} dishId={dishId} />;
};
