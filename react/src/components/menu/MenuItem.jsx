import Dish from "../dish/Dish.jsx";

export const MenuItem = ({ itemName, menuItems }) => {
  return (
    <div>
      <h2>{itemName.name}</h2>
      <ul>
        {menuItems.map((id) => (
            <Dish key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};