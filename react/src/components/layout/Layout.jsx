import ScrollProgressBar from "../progressbar/ProgressBar.jsx";
import { Cart } from "../cart/cart.jsx";
import { useAuth } from "../auth/useAuth.js";

export const Layout = ({ children }) => {
  const { authState } = useAuth();

  return (
    <>
      <ScrollProgressBar viewVariant="accent" />
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
