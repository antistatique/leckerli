import { render } from 'preact';

import App from './components/App';

import './index.css';

const root = document.createElement('div');
root.id = 'lkrl-wrapper';
document.body.appendChild(root);

render(<App />, root);
