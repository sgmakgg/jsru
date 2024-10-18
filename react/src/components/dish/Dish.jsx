import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/menu/menuSlice.js";

const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <li>
      <h3>{dish.name}</h3>
    </li>
  );
};

export default Dish;
