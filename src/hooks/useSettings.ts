import { isNil, isNotNil, mergeDeepRight } from 'ramda';
import { create } from 'zustand'

import type Settings from '../types/settings';
import Cookie from "../types/cookie";
import defaultSettings from "../defaultSettings.ts";
import cookies from "js-cookie";

type SettingsStore = Settings & {
  choiceMade: boolean;
  cookie: Cookie;
  init: () => void;
  setChoice: (value: boolean) => void;
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
  : initialState.permissions.reduce((acc, val) => ({
    ...acc,
    [val.slug]: false,
  }), initialState.baseData);

// With the existing cookie or not, set the choiceMade
initialState.choiceMade = isNotNil(initialCookie);

// Deliver the hook
const useSettings = create<SettingsStore>((set, getState) => ({
  ...initialState,

  // Write cookie if not exist and setup eventListeners
  init: () => {
    if (isNil(initialCookie)) {
      cookies.set(getState().name, JSON.stringify(getState().cookie));
    }

    // Open banner by resseting choiceMade
    document.addEventListener('leckerli-open-banner', () => getState().setChoice(false));
  },

  // Manage banner display
  setChoice: (value: boolean) => set(state => {
    return { ...state, choiceMade: value };
  }),

  // Set cookie permission(s)
  setPermissions: (slugs: string | string[], value: boolean) =>
    set(state => {
      const list = Array.isArray(slugs) ? slugs : [slugs];

      const newCookie = state.permissions.reduce((acc, val) => {
        if (list.includes(val.slug)) {
          acc[val.slug] =  value;
        } else {
          acc[val.slug] = state.cookie[val.slug] ?? false;
        }
        return acc;
      }, state.baseData);

      cookies.set(state.name, JSON.stringify(newCookie));

      return { ...state, choiceMade: true, cookie: newCookie };
    }),

  // Toggle cookie permission
  togglePermission: (slug: string) =>
    set(state => {
      const newCookie = state.permissions.reduce((acc, val) => {
        if (slug === val.slug) {
          acc[val.slug] =  isNotNil(state.cookie[val.slug]) ? !state.cookie[val.slug] : true;
        } else {
          acc[val.slug] = state.cookie[val.slug] ?? false;
        }
        return acc;
      }, state.baseData);

      cookies.set(state.name, JSON.stringify(newCookie));

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
