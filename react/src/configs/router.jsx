import { createBrowserRouter, Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout.jsx";
import RestaurantsPage from "../components/restaurantTabs/RestaurantTabs.jsx";
import { IngredientsPage } from "../components/dishIngredients/DishIngredientsPage.jsx";
import { DishesListPage } from "../components/menu/DishesListPage.jsx";
import { ReviewsPage } from "../components/reviews/ReviewsPage.jsx";
import { SingleRestaurantPage } from "../components/restaurant/RestaurantPage.jsx";

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
            path: ":restaurantId",
            element: <SingleRestaurantPage />,
            children: [
              {
                path: ":restaurantId/menu",
                element: <DishesListPage />,
              },
              {
                path: ":restaurantId/reviews",
                element: <ReviewsPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/dish/:dishId",
        element: <IngredientsPage />,
      },
    ],
  },
]);
