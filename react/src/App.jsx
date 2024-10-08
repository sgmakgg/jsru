import { Layout } from "./components/layout/Layout.jsx";
import { Restaurant } from "./components/restaurant/Restaurant.jsx";
import { Tab } from "./components/tab/Tab.jsx";
import { useState } from "react";
import { restaurants } from "./constants/materials/mock.js";
import ScrollProgressBar from "./components/progressbar/ProgressBar.jsx";
import {SwitcherContextProvider} from "./components/buttonThemeSwitcher/switcherContextProvider.jsx";
import {SwitcherButton} from "./components/buttonThemeSwitcher/switcherButton.jsx";
import {AuthnContextProvider} from "./components/authn/authnContextProvider.jsx";
import AuthnButton from "./components/authn/authnButton.jsx";

export const App = ({ topic }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurants[0].id);

  const onTabChange = (id) => {
    setCurrentRestaurantId(id);
  };

  const currentRestaurant = restaurants.find((restaurant) => restaurant.id === currentRestaurantId);
  return (
      <AuthnContextProvider>
        <SwitcherContextProvider>
          <SwitcherButton>Switch Theme</SwitcherButton>
          <AuthnButton/>
          <Layout>
            <ScrollProgressBar viewVariant='accent'/>
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
        </SwitcherContextProvider>
      </AuthnContextProvider>

  );
};