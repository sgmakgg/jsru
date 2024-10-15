import { Counter } from "../counters/Counter.jsx";
import useReviewForm from "./useReviewForm.js";

const ReviewForm = () => {
  const { state, setReview, setRating, setName, setInitialState } =
    useReviewForm();

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <br />
        <textarea
          id="review"
          value={state.review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <Counter outerValue={state.rating} addOuterValueCallBack={setRating} />
      </div>
      <button type="button" onClick={setInitialState}>
        Clear
      </button>
    </form>
  );
};

export default ReviewForm;
