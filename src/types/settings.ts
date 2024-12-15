import defaultSettings from '../defaultSettings.ts';

type Settings = typeof defaultSettings & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseData: any;
  expires: number;
  permissions: string[];
  enableGtmAutoLoad: boolean;
};

export default Settings;
