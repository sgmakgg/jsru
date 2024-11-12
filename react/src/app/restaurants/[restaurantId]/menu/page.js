import { DishesList } from "../../../../components/menu/DishesList.jsx";
import { getDishesListNext } from "../../../services/get-dishesList.js";

export default async function MenuPage({ params }) {
  const dishesList = await getDishesListNext((await params).restaurantId);

  return <DishesList dishes={dishesList}>Order dishes</DishesList>;
}
