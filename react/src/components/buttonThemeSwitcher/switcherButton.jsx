import styles from './switcherButton.module.css';
import classNames from "classnames";
import {useTheme} from "./useTheme.js";
import {SwitcherContextProvider} from "./switcherContextProvider.jsx";

export const SwitcherButton = ({children}) => {
    const {value, switchTheme } =  useTheme();

    return (
        <SwitcherContextProvider>
            <button className={classNames(styles.default, {
                [styles.purple]: value === 'purple',
                [styles.mediumPurple]: value === 'mediumPurple',
            })}
            onClick={ switchTheme }
            >
                {children}
            </button>
        </SwitcherContextProvider>
    );
}