export async function getRestaurantByIdNext(id) {
  const result = await fetch(`http://localhost:3001/api/restaurant/${id}`);
  return await result.json();
}
