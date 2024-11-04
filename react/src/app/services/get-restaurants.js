export async function getRestaurantsNext() {
  const result = await fetch("http://localhost:3001/api/restaurants", {
    next: { revalidate: 10 },
  });
  return await result.json();
}
