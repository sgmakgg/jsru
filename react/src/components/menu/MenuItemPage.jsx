import { MenuItem } from "./MenuItem.jsx";
import { useParams } from "react-router-dom";

export const MenuItemPage = () => {
  const { restaurantId } = useParams();
  return <MenuItem restaurantId={restaurantId} />;
};
