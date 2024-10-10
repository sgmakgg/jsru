import { useContext } from "react";
import { SwitcherContext } from "./switcherContext.js";

export const useTheme = () => {
  return useContext(SwitcherContext);
};
