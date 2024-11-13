import { Ingredients } from "../../../components/dishIngredients/DishIngredients.jsx";
import App from "../../../app.jsx";
import { getDishByIdNext } from "../../services/get-dishById.js";

export default async function DishLayout({ params }) {
  const { dishId } = await params;
  const dish = await getDishByIdNext(dishId);

  return (
    <App>
      <Ingredients dish={dish} />
    </App>
  );
}
