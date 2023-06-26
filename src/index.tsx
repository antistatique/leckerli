import { render } from 'preact';
import { App } from './app.tsx';

import './index.css';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);
