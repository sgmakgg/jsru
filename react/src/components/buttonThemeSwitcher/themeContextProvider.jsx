import { ThemeContext } from "./themeContext.js";
import { useState } from "react";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("mediumPurple");

  const switchTheme = () => {
    setTheme((theme) => (theme === "purple" ? "mediumPurple" : "purple"));
  };

  return (
    <ThemeContext.Provider value={{ value: theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
