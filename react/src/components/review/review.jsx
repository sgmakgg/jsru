import { getUsersNext } from "../../app/services/get-users.js";
import { useEffect, useState } from "react";

export const Review = ({ review }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getUsersNext();
      const foundUser = users.find((user) => user.id === review.userId);
      setUser(foundUser);
    };
    fetchUser();
  }, [review]);

  return (
    <li key={review.id}>
      <h4>{user?.name}</h4>
      <p>{review.text}</p>
      <p>Rating: {review.rating}</p>
    </li>
  );
};
