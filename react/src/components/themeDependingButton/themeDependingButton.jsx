import classNames from "classnames";
import styles from "./themeDependingButton.module.css";
import { useTheme } from "../buttonThemeSwitcher/useTheme.js";

export const ThemeDependingButton = ({ callback, topic, disabled = false }) => {
  const { value } = useTheme();
  return (
    <button
      className={classNames(styles.default, {
        [styles.purple]: value === "purple",
        [styles.mediumPurple]: value === "mediumPurple",
      })}
      onClick={() => callback()}
      disabled={disabled}
    >
      {topic}
    </button>
  );
};
