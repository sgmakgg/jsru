export async function getReviewsByIdNext(id) {
  const result = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${id}`,
  );
  return await result.json();
}
