import ScrollProgressBar from "../progressbar/ProgressBar.jsx";
import { Cart } from "../cart/cart.jsx";
import { useAuth } from "../auth/useAuth.js";
import AuthButton from "../auth/authButton.jsx";

export const Layout = ({ children }) => {
  const { authState } = useAuth();

  return (
    <>
      <ScrollProgressBar viewVariant="accent" />
      <AuthButton />
      <header>
        <p>Restaurants App</p>
      </header>
      <main>
        {children}
        {authState === "authorized" ? <Cart /> : null}
      </main>
      <footer>
        <p>&copy; 2024 Restaurants App</p>
      </footer>
    </>
  );
};
