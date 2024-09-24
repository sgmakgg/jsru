export const ReviewList = ({ reviews }) => (
    <>
        <h3>Reviews</h3>
        <ul>
            {reviews.map(({ id, user, text, rating }) => (
                <li key={id}>
                    <h4>{user}</h4>
                    <p>{text}</p>
                    <p>Rating: {rating}</p>
                </li>
            ))}
        </ul>
    </>
);