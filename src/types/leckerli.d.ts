/* eslint-disable @typescript-eslint/no-explicit-any */
import type Settings from './settings';

export {};

declare global {
  interface Window {
    leckerliSettings: Settings;
    leckerliInitialisation: any;
    leckerliUpdate: any;
  }
}
