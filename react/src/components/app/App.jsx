import { Layout } from "../layout/Layout.jsx";
import { Restaurant } from "../restaurant/Restaurant.jsx";
import {Tab} from "../tab/Tab.jsx";
import { useState } from "react";
import {restaurants} from "../../constants/materials/mock.js";

const TAB = 'tab';
const RESTAURANT_ID = 'restaurantId';
const defaultSelection = new Map().set(TAB, 1).set(RESTAURANT_ID, restaurants[0].id);

export const App = ({ topic }) => {
  const [currentSelection, setCurrentSelection] = useState(defaultSelection);

  const onTabChange = (tab) => {
    const selection =
        new Map()
        .set(TAB, tab)
        .set(RESTAURANT_ID, restaurants[tab - 1].id);
    setCurrentSelection(selection);
  };

  return (
    <Layout>
      <div>
        <h1>{topic}</h1>
        <Tab totalTabs={restaurants.length}
             onTabClick={onTabChange}
             currentTab={currentSelection.get(TAB)}/>
        <Restaurant
            restaurant={restaurants.find((restaurant) =>
                restaurant.id === currentSelection.get(RESTAURANT_ID))} />
      </div>
    </Layout>
  );
};