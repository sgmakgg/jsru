import classNames from "classnames";
import styles from "./tab.module.css";
import {useTheme} from "../buttonThemeSwitcher/useTheme.js";

export const Tab = ({ name, onTabClick, currentTab }) => {
   const { value } = useTheme()
  return (
        <button className={classNames(styles.default, {
            [styles.purple]: value === 'purple',
            [styles.mediumPurple]: value === 'mediumPurple',
        })} onClick={onTabClick} disabled={currentTab}>
         {name}
        </button>)
};