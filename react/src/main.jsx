import { createRoot } from 'react-dom/client';
import { restaurants } from './constants/materials/mock.js';
import { App } from './components/app/App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App topic="Restaurants" restaurants={restaurants} />);