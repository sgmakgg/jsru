"use client";

import ScrollProgressBar from "../progressbar/ProgressBar.jsx";
import { Cart } from "../cart/cart.jsx";
import { useAuth } from "../auth/useAuth.js";
import AuthButton from "../auth/authButton.jsx";
import { ThemeSwitcherButton } from "../buttonThemeSwitcher/themeSwitcherButton.jsx";
import { Clock } from "../clock/clock.jsx";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  const { authState } = useAuth();

  return (
    <>
      <header className={styles.header}>
        <ScrollProgressBar viewVariant="accent" />
        <ThemeSwitcherButton />
        <AuthButton />
        <Clock />
      </header>
      {authState === "authorized" ? <Cart /> : null}
      {children}
      <footer>
        <p>&copy; 2024 Restaurants App</p>
      </footer>
    </>
  );
};
