import { Counter } from "../counter/Counter.jsx";

const TOPIC_ORDER = "Order";

export const MenuItem = ({ itemName, menuItems }) => {
  return (
    <div>
      <h2>{itemName.name}</h2>
      <ul>
        {menuItems.map(({ id, name, ingredients, price }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>{ingredients.join(', ')}</p>
            <p>£{price}</p>
            <Counter topic={TOPIC_ORDER}/>
          </li>
        ))}
      </ul>
    </div>
  );
};