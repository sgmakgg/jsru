export const Layout = ({ children }) => (
  <>
    <header>
      <p>Restaurants App</p>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <p>&copy; 2024 Restaurants App</p>
    </footer>
  </>
);