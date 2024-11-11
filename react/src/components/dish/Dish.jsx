import Loading from "../../app/restaurants/[restaurantId]/loading.js";
import { Suspense } from "react";

const Dish = ({ dish }) => {
  return (
    <Suspense fallback={<Loading />}>
      <li>
        <h3>{dish?.name}</h3>
      </li>
    </Suspense>
  );
};

export default Dish;
