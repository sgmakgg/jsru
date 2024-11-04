export async function getDishByIdNext(id) {
  const result = await fetch(`http://localhost:3001/api/dish/${id}`);
  return await result.json();
}
