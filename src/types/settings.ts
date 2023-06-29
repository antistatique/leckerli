import defaultSettings from '../defaultSettings.ts';

type Settings = typeof defaultSettings & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseData: any;
  permissions: {
    slug: string;
    title: string;
    description: string;
  }[];
  enableGtmConsent: boolean;
};

export default Settings;
