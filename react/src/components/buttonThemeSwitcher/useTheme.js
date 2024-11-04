"use client";
import { useContext } from "react";
import { ThemeContext } from "./themeContext.js";

export const useTheme = () => {
  return useContext(ThemeContext);
};
