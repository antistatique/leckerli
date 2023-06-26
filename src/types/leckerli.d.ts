import type Settings from './settings';

export {};

declare global {
  interface Window {
    leckerliSettings: Settings;
  }
}
