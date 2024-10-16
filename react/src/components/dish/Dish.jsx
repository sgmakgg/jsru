import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/menu/menuSlice.js";

const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <li key={id}>
      <h3>{dish.name}</h3>
    </li>
  );
};

export default Dish;
