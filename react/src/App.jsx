import { Layout } from "./components/layout/Layout.jsx";
import ScrollProgressBar from "./components/progressbar/ProgressBar.jsx";
import { SwitcherContextProvider } from "./components/buttonThemeSwitcher/switcherContextProvider.jsx";
import { SwitcherButton } from "./components/buttonThemeSwitcher/switcherButton.jsx";
import { AuthnContextProvider } from "./components/authn/authnContextProvider.jsx";
import AuthnButton from "./components/authn/authnButton.jsx";
import RestaurantsPage from "./components/restaurantspage/RestaurantsPage.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthnContextProvider>
        <SwitcherContextProvider>
          <SwitcherButton>Switch Theme</SwitcherButton>
          <AuthnButton />
          <Layout>
            <ScrollProgressBar viewVariant="accent" />
            <RestaurantsPage />
          </Layout>
        </SwitcherContextProvider>
      </AuthnContextProvider>
    </Provider>
  );
};
