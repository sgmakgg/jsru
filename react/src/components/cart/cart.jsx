import { useSelector } from "react-redux";
import { selectItems } from "../../redux/ui/cart/cart.js";
import { CartItem } from "../cartItem/cartItem.jsx";

export const Cart = () => {
  const cartItems = useSelector(selectItems);
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} itemId={item.id} />
      ))}
    </div>
  );
};
