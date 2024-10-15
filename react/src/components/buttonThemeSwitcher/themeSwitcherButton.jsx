import { useTheme } from "./useTheme.js";
import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";

export const ThemeSwitcherButton = () => {
  const { switchTheme } = useTheme();

  return <ThemeDependingButton topic="Switch Theme" callback={switchTheme} />;
};
