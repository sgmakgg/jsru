import { Review } from "../review/review.jsx";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((id) => (
          <Review key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
