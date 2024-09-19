import { createRoot } from 'react-dom/client'
import {restaurants} from "../materials/mock.js";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <div>{restaurants.map((item) => (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <ul>
                {item.menu.map((menuItem) => (
                    <li key={menuItem.id}>
                        <h3>{menuItem.name}</h3>
                        <p>{menuItem.ingredients.join(', ')}</p>
                        <p>£{menuItem.price}</p>
                    </li>
                ))}
            </ul>
            <h3>Reviews</h3>
            <ul>
                {item.reviews.map((review) => (
                    <li key={review.id}>
                        <h4>{review.user}</h4>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    ))}</div>
);
