export async function getUsersNext() {
  const result = await fetch(`http://localhost:3001/api/users`);
  return await result.json();
}
