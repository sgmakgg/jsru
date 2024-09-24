import { OrderButton } from "../orderButton/OrderButton.jsx";

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
            <OrderButton />
          </li>
        ))}
      </ul>
    </div>
  );
};