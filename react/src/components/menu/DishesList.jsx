import Dish from "../dish/Dish.jsx";
import Link from "next/link";
import { getDishByIdServer } from "../../app/services/get-dishByIdServer.js";

export const DishesList = async ({ dishes }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {await Promise.all(
          dishes.map(async (item) => {
            const dish = await getDishByIdServer(item.id);
            return (
              <Link href={`/dish/${item.id}`} key={item.id}>
                <Dish dish={dish} />
              </Link>
            );
          }),
        )}
      </ul>
    </div>
  );
};
