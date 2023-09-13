import { render } from 'preact';

import App from './components/App';

import './index.css';

const root = document.createElement('div');
root.id = 'lkrl-wrapper';
document.body.appendChild(root);

render(<App />, root);

// Not so nice hack to trick the bundler and avoid $ (jQuery) overrides by libs
try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // prettier-ignore
  // eslint-disable-next-line no-global-assign,@typescript-eslint/no-unused-vars,no-nested-ternary
  $ = typeof $ !== 'undefined' ? $ : typeof jQuery !== 'undefined' ? jQuery : null;
  // eslint-disable-next-line no-empty
} catch (e) {}
