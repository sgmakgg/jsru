import { Restaurant } from "../../../components/restaurant/Restaurant.jsx";
import { getRestaurantByIdNext } from "../../services/get-restaurantById.js";

export const generateStaticParams = () => {
  return [
    { restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" },
    { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },
  ];
};

export async function generateMetadata({ params }) {
  const restaurant = await getRestaurantByIdNext((await params).restaurantId);
  return {
    title: restaurant.name,
  };
}

export default async function RestaurantLayout({ params, children }) {
  const restaurant = await getRestaurantByIdNext((await params).restaurantId);

  return <Restaurant restaurant={restaurant}>{children}</Restaurant>;
}
