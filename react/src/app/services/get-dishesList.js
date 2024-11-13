export async function getDishesListNext(id) {
  const result = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${id}`,
    { next: { tags: ["getDishesList"] } },
  );
  return await result.json();
}
