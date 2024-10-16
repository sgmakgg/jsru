import { createBrowserRouter, Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout.jsx";
import RestaurantsPage from "../components/restaurantspage/RestaurantsPage.jsx";
import { Restaurant } from "../components/restaurant/Restaurant.jsx";
import { MenuItem } from "../components/menu/MenuItem.jsx";
import { Reviews } from "../components/reviews/Reviews.jsx";
import { Ingredients } from "../components/dishIngredients/DishIngredients.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={"/restaurants"}> Restaurants </Link>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: "/restaurants/:restaurantId",
            element: <Restaurant />,
            children: [
              {
                path: "/restaurants/:restaurantId/menu",
                element: <MenuItem />,
              },
              {
                path: "/restaurants/:restaurantId/reviews",
                element: <Reviews />,
              },
            ],
          },
        ],
      },
      {
        path: "/dish/:dishId",
        element: <Ingredients />,
      },
    ],
  },
]);
