import classNames from "classnames";
import styles from "../buttonThemeSwitcher/switcherButton.module.css";
import { useAuthn } from "./useAuthn.js";
import { useTheme } from "../buttonThemeSwitcher/useTheme.js";

const AuthnButton = () => {
    const { authnState, setAuthnState } = useAuthn();
    const { value } = useTheme();

    const handleClick = () => {
        setAuthnState((status) => (status === 'authorized' ? 'unauthorized' : 'authorized'));
    };

    return (
        <button
            className={classNames(styles.default, {
                [styles.purple]: value === 'purple',
                [styles.mediumPurple]: value === 'mediumPurple',
            })}
            onClick={handleClick}
        >
            {authnState === 'authorized' ? 'Logout' : 'Login'}
        </button>
    );
};

export default AuthnButton;