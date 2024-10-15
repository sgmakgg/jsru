import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/ui/cart/cart.js";

export const Counter = ({ topic = null, outerValue = 0, dishId }) => {
  const dispatch = useDispatch();

  const orderCountUp = () => {
    if (outerValue < 5) dispatch(addItem({ id: dishId }));
  };

  const orderCountDown = (event) => {
    event.preventDefault();
    if (outerValue > 0) dispatch(removeItem({ id: dishId }));
  };

  return (
    <>
      {topic !== null ? <label>{topic}</label> : null}
      <br />
      <input
        type="button"
        value={outerValue}
        onClick={orderCountUp}
        onContextMenu={orderCountDown}
      />
    </>
  );
};
