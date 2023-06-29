import type Cookie from '../types/cookie.ts';
import type Settings from '../types/settings';

window.dataLayer = window.dataLayer || [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(_key: string, _key2: string, _perms: Record<string, string>) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

const gtmConsent = (settings: Settings & { cookie: Cookie }) => {
  gtag(
    'consent',
    'update',
    settings.permissions.reduce(
      (acc, val) => ({
        ...acc,
        [val.slug]: settings.cookie[val.slug] ? 'granted' : 'denied',
      }),
      {}
    )
  );
};

export default gtmConsent;