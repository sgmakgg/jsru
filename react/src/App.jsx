import { Layout } from "./components/layout/Layout.jsx";
import { ThemeContextProvider } from "./components/buttonThemeSwitcher/themeContextProvider.jsx";
import { ThemeSwitcherButton } from "./components/buttonThemeSwitcher/themeSwitcherButton.jsx";
import { AuthContextProvider } from "./components/auth/authContextProvider.jsx";
import AuthButton from "./components/auth/authButton.jsx";
import RestaurantsPage from "./components/restaurantspage/RestaurantsPage.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <ThemeSwitcherButton />
          <AuthButton />
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
