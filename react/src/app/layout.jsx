// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: "Restaurants App",
  description: "App description",
  keywords: "My App keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
