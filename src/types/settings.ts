import defaultSettings from '../defaultSettings.ts';

import Cookie from './cookie.ts';

type Settings = typeof defaultSettings & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseData: any;
  permissions: {
    slug: string;
    title: string;
    description: string;
  }[];
  initialisationCallback?: (cookie: Cookie) => void;
  updateCallback?: (cookie: Cookie) => void;
};

export default Settings;
