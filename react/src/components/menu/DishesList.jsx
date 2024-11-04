import Dish from "../dish/Dish.jsx";
import Link from "next/link";

export const DishesList = ({ dishes }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dishes.map((item) => {
          return (
            <Link href={`/dish/${item.id}`} key={item.id}>
              <Dish id={item.id} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
