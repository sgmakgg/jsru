import { SwitcherContext } from "./switcherContext.js";
import { useState } from "react";

export const SwitcherContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("mediumPurple");

  const switchTheme = () => {
    setTheme((theme) => (theme === "purple" ? "mediumPurple" : "purple"));
  };

  return (
    <SwitcherContext.Provider value={{ value: theme, switchTheme }}>
      {children}
    </SwitcherContext.Provider>
  );
};
