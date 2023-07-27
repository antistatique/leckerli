import cookies from 'js-cookie';
import { isNil, isNotNil, mergeDeepRight } from 'ramda';
import { create } from 'zustand';

import defaultSettings from '../defaultSettings.ts';
import type Cookie from '../types/cookie';
import type Settings from '../types/settings';
import gtmConsent from '../utils/gtmConsent.ts';

type SettingsStore = Settings & {
  choiceMade: boolean;
  settingsOpen: boolean;
  cookie: Cookie;
  init: () => void;
  propagate: (cookie: Cookie) => void;
  setChoice: (value: boolean) => void;
  setModal: (value: boolean) => void;
  setPermissions: (permissions: Record<string, boolean>) => void;
  togglePermission: (slugs: string) => void;
  acceptAll: () => void;
  rejectAll: () => void;
};

// Override default settings with custom settings
const initialState = mergeDeepRight(
  defaultSettings,
  window.leckerliSettings ?? {}
);

// Build the expiration date
const expirationDate = new Date();
expirationDate.setMonth(expirationDate.getMonth() + 1);

// Define cookie configuration
const cookieConfig: {
  sameSite: 'strict';
  domain: string;
  expires?: number | Date;
} = {
  sameSite: 'strict',
  domain: initialState.domain,
  expires: expirationDate, // 1 month by default
};

// Get cookie value
const initialCookie = cookies.get(initialState.name);

// Set store's cookie value based on existing cookie or settings permissions
initialState.cookie = isNotNil(initialCookie)
  ? JSON.parse(initialCookie)
  : initialState.permissions.reduce(
      (acc, val) => ({
        ...acc,
        [val]: false,
      }),
      initialState.baseData
    );

// With the existing cookie or not, set the choiceMade
initialState.choiceMade = isNotNil(initialCookie);

// Deliver the hook
const useSettings = create<SettingsStore>((set, getState) => ({
  ...initialState,

  // Write cookie if not exist and setup eventListeners
  init: () => {
    const state = getState();

    if (isNil(initialCookie) && state.choiceMade) {
      cookies.set(state.name, JSON.stringify(state.cookie), cookieConfig);
    }

    if (state.choiceMade && state.enableGtmConsent) gtmConsent(state);

    // Emit initial event and data or null if the choice has not been made
    document.dispatchEvent(
      new CustomEvent('leckerli:initialised', {
        detail: { cookie: state.choiceMade ? state.cookie : null },
      })
    );

    // Open banner by resseting choiceMade
    document.addEventListener('leckerli:open-banner', () =>
      getState().setChoice(false)
    );
    document.addEventListener('leckerli:close-banner', () =>
      getState().setChoice(true)
    );

    // Manage modal
    document.addEventListener('leckerli:open-modal', () =>
      getState().setModal(true)
    );
    document.addEventListener('leckerli:close-modal', () =>
      getState().setModal(false)
    );
  },

  // Propagate new cookie values
  propagate(newCookie: Cookie) {
    const state = getState();

    // Update cookie
    cookies.set(state.name, JSON.stringify(newCookie), cookieConfig);

    // if enabled, send to datalayer
    if (state.enableGtmConsent) gtmConsent({ ...state, cookie: newCookie });

    // Emit event and data
    document.dispatchEvent(
      new CustomEvent('leckerli:permissions-updated', {
        detail: { cookie: newCookie },
      })
    );
  },

  // Manage banner display
  setChoice: (value: boolean) =>
    set(state => ({ ...state, choiceMade: value })),

  // Manage modal display
  setModal: (value: boolean) =>
    set(state => {
      document.dispatchEvent(
        new CustomEvent(`leckerli:modal-${value ? 'opened' : 'closed'}`)
      );
      return { ...state, settingsOpen: value };
    }),

  // Set cookie permission(s)
  setPermissions: (permissions: Record<string, boolean>) =>
    set(state => {
      const newCookie = state.permissions.reduce(
        (acc, val) => ({
          ...acc,
          [val]: permissions[val] ?? false,
        }),
        state.baseData
      );

      state.propagate(newCookie);

      return { ...state, choiceMade: true, cookie: newCookie };
    }),

  // Toggle cookie permission
  togglePermission: (slug: string) =>
    set(state => {
      const newCookie = state.permissions.reduce((acc, val) => {
        if (slug === val) {
          acc[val] = isNotNil(state.cookie[val]) ? !state.cookie[val] : true;
        } else {
          acc[val] = state.cookie[val] ?? false;
        }
        return acc;
      }, state.baseData);

      state.propagate(newCookie);

      return { ...state, choiceMade: true, cookie: newCookie };
    }),

  // All permission at true shorthand
  acceptAll: () => {
    getState().setPermissions(
      getState().permissions.reduce((acc, val) => ({ ...acc, [val]: true }), {})
    );
  },

  // All permission at false shorthand
  rejectAll: () => {
    getState().setPermissions(
      getState().permissions.reduce(
        (acc, val) => ({ ...acc, [val]: false }),
        {}
      )
    );
  },
}));

export default useSettings;
