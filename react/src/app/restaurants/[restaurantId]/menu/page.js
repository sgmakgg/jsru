import { DishesList } from "../../../../components/menu/DishesList.jsx";
import { getDishesListServer } from "./getDishesListServer.js";

export default async function MenuPage({ params }) {
  const dishesList = await getDishesListServer((await params).restaurantId);

  return <DishesList dishes={dishesList}>Order dishes</DishesList>;
}
