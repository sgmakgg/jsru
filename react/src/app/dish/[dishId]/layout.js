import { Ingredients } from "../../../components/dishIngredients/DishIngredients.jsx";
import App from "../../../app.jsx";

export default async function DishLayout({ params }) {
  const { dishId } = await params;

  return (
    <App>
      <Ingredients dishId={dishId} />
    </App>
  );
}
