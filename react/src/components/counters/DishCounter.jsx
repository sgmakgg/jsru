import { useState } from "react";
import { Counter } from "./Counter.jsx";

export const DishCounter = ({ topic }) => {
  const [order, setOrder] = useState(0);

  return (
    <Counter
      topic={topic}
      outerValue={order}
      addOuterValueCallBack={setOrder}
    />
  );
};