import cookies from 'js-cookie';
import { isNil, isNotNil, mergeDeepRight } from 'ramda';
import { create } from 'zustand';

import defaultSettings from '../defaultSettings.ts';
import Cookie from '../types/cookie';
import type Settings from '../types/settings';

type SettingsStore = Settings & {
  choiceMade: boolean;
  settingsOpen: boolean;
  cookie: Cookie;
  init: () => void;
  setChoice: (value: boolean) => void;
  setModal: (value: boolean) => void;
  setPermissions: (slugs: string | string[], value: boolean) => void;
  togglePermission: (slugs: string) => void;
  acceptAll: () => void;
  rejectAll: () => void;
};

// Override default settings with custom settings
const initialState = mergeDeepRight(
  defaultSettings,
  window.leckerliSettings ?? {}
);

// Get cookie value
const initialCookie = cookies.get(initialState.name);

// Set store's cookie value based on existing cookie or settings permissions
initialState.cookie = isNotNil(initialCookie)
  ? JSON.parse(initialCookie)
  : initialState.permissions.reduce(
      (acc, val) => ({
        ...acc,
        [val.slug]: false,
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
    if (isNil(initialCookie) && getState().choiceMade) {
      cookies.set(getState().name, JSON.stringify(getState().cookie));
    }

    // Emit initial event and data or null if the choice has not been made
    document.dispatchEvent(
      new CustomEvent('leckerli:initialised', {
        detail: { cookie: getState().choiceMade ? getState().cookie : null },
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
  setPermissions: (slugs: string | string[], value: boolean) =>
    set(state => {
      const list = Array.isArray(slugs) ? slugs : [slugs];

      const newCookie = state.permissions.reduce((acc, val) => {
        if (list.includes(val.slug)) {
          acc[val.slug] = value;
        } else {
          acc[val.slug] = state.cookie[val.slug] ?? false;
        }
        return acc;
      }, state.baseData);

      cookies.set(state.name, JSON.stringify(newCookie));

      // Emit event and data
      document.dispatchEvent(
        new CustomEvent('leckerli:permissions-updated', {
          detail: { cookie: newCookie },
        })
      );

      return { ...state, choiceMade: true, cookie: newCookie };
    }),

  // Toggle cookie permission
  togglePermission: (slug: string) =>
    set(state => {
      const newCookie = state.permissions.reduce((acc, val) => {
        if (slug === val.slug) {
          acc[val.slug] = isNotNil(state.cookie[val.slug])
            ? !state.cookie[val.slug]
            : true;
        } else {
          acc[val.slug] = state.cookie[val.slug] ?? false;
        }
        return acc;
      }, state.baseData);

      cookies.set(state.name, JSON.stringify(newCookie));

      // Emit event and data
      document.dispatchEvent(
        new CustomEvent('leckerli:permissions-updated', {
          detail: { cookie: newCookie },
        })
      );

      return { ...state, choiceMade: true, cookie: newCookie };
    }),

  // All permission at true shorthand
  acceptAll: () => {
    getState().setPermissions(
      getState().permissions.map(i => i.slug),
      true
    );
  },

  // All permission at false shorthand
  rejectAll: () => {
    getState().setPermissions(
      getState().permissions.map(i => i.slug),
      false
    );
  },
}));

export default useSettings;
