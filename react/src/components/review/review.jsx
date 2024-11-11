import { getUsersNext } from "../../app/services/get-users.js";

export const Review = async ({ review }) => {
  const users = await getUsersNext();
  const user = users.find((user) => user.id === review.userId);

  return (
    <li key={review.id}>
      <h4>{user?.name}</h4>
      <p>{review.text}</p>
      <p>Rating: {review.rating}</p>
    </li>
  );
};
