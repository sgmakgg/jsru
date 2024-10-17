import { Ingredients } from "./DishIngredients.jsx";
import { useParams } from "react-router-dom";

export const IngredientsPage = () => {
  const { dishId } = useParams();
  if (!dishId) {
    return null;
  }
  return <Ingredients dishId={dishId} />;
};
