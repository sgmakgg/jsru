import { DishCounter } from "../counters/DishCounter.jsx";
import {useAuthn} from "../authn/useAuthn.js";

const TOPIC_ORDER = "Order";

export const MenuItem = ({ itemName, menuItems }) => {
    const {authnState} = useAuthn();
  return (
    <div>
      <h2>{itemName.name}</h2>
      <ul>
        {menuItems.map(({ id, name, ingredients, price }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>{ingredients.join(', ')}</p>
            <p>£{price}</p>
              { authnState === 'authorized' ? <DishCounter topic={TOPIC_ORDER}/> : null }
          </li>
        ))}
      </ul>
    </div>
  );
};