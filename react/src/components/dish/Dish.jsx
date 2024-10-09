import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/menu/menuSlice.js";
import {DishCounter} from "../counters/DishCounter.jsx";
import {useAuthn} from "../authn/useAuthn.js";

const TOPIC_ORDER = "Order";

const Dish = ({id}) => {
    const {authnState} = useAuthn();
    const dish = useSelector((state) => selectDishById(state, id));
  return (
      <li key={id}>
          <h3>{dish.name}</h3>
          <p>{dish.ingredients.join(', ')}</p>
          <p>£{dish.price}</p>
          {authnState === 'authorized' ? <DishCounter topic={TOPIC_ORDER}/> : null}
      </li>
  );
};

export default Dish;