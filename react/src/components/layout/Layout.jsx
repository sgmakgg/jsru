export const Layout = ({ children }) => (
  <>
    <header>
      <h1>Restaurants App</h1>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <p>&copy; 2024 Restaurants App</p>
    </footer>
  </>
);