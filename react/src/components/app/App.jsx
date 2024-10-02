import { Layout } from "../layout/Layout.jsx";
import { Restaurant } from "../restaurant/Restaurant.jsx";
import { Tab } from "../tab/Tab.jsx";
import { useState } from "react";
import { restaurants } from "../../constants/materials/mock.js";
import ScrollProgressBar from "../progressbar/ProgressBar.jsx";

export const App = ({ topic }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurants[0].id);

  const onTabChange = (id) => {
    setCurrentRestaurantId(id);
  };

  const currentRestaurant = restaurants.find((restaurant) => restaurant.id === currentRestaurantId);

  return (
    <Layout>
      <ScrollProgressBar />
      <div>
        <h1>{topic}</h1>
        {restaurants.map(({ id, name }) => (
            <Tab
                key = {id}
                name={name}
                onTabClick={() => onTabChange(id)}
                currentTab={id === currentRestaurantId} />
        ))}
        <Restaurant
            restaurant={currentRestaurant} />
      </div>
    </Layout>
  );
};