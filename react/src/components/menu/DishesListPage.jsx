import { DishesList } from "./DishesList.jsx";
import { useParams } from "react-router-dom";

export const DishesListPage = () => {
  const { restaurantId } = useParams();
  return <DishesList restaurantId={restaurantId} />;
};
