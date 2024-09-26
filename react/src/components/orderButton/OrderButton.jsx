import { useState } from "react";

export const OrderButton = () => {
  const [order, setOrder] = useState(0);

  const orderCountUp = () => order < 5 && setOrder(order + 1);
  const orderCountDown = (event) => {
    event.preventDefault();
    order > 0 && setOrder(order - 1);
  };

  return (
    <input
      type="button"
      value={`Click for order ${order}`}
      onClick={orderCountUp}
      onContextMenu={orderCountDown}
    />
  );
};