import { Counter } from "./Counter.jsx";
import { useSelector } from "react-redux";
import { selectAmount } from "../../redux/ui/cart/cart.js";

export const DishCounter = ({ dishId }) => {
  const amount = useSelector((state) => selectAmount(state, dishId));

  return <Counter outerValue={amount} dishId={dishId} />;
};
