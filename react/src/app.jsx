"use client";

import { ThemeContextProvider } from "./components/buttonThemeSwitcher/themeContextProvider.jsx";
import { AuthContextProvider } from "./components/auth/authContextProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Layout } from "./components/layout/Layout.jsx";

export const App = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>{children}</Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
