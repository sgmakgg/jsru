import { createRoot } from 'react-dom/client'
import {restaurants} from "./constants/materials/mock.js";
import {App} from "./components/app/App.jsx";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App topic="Restaurants" restaurants={restaurants} />
);
