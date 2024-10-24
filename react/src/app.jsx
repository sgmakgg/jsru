"use client";

import { ThemeContextProvider } from "./components/buttonThemeSwitcher/themeContextProvider.jsx";
import { AuthContextProvider } from "./components/auth/authContextProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./configs/router.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
