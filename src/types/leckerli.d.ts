/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookie from './cookie';
import type Settings from './settings';

export {};

declare global {
  interface Window {
    leckerliGTMUpdate: (cookie: Cookie) => void;
    leckerliSettings: Settings;
    dataLayer: any;
  }

  interface Event {
    detail: any;
  }
}
