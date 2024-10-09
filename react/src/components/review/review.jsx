import {selectReviewById} from "../../redux/review/reviewSlice.js";
import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/user/user.js";

export const Review = ({ id }) => {
    const review = useSelector(state => selectReviewById(state, id));
    const user = useSelector(state => selectUserById(state, review.userId));
    return(
        <>
                <li key={review.id}>
                    <h4>{user.name}</h4>
                    <p>{review.text}</p>
                    <p>Rating: {review.rating}</p>
                </li>
        </>
    );
}