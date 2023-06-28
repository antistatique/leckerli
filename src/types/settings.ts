import defaultSettings from '../defaultSettings.ts';

type Settings = typeof defaultSettings & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseData: any;
  permissions: {
    slug: string;
    title: string;
    description: string;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInitialization: ((event: any) => void) | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPermissionsUpdate: ((event: any) => void) | undefined;
};

export default Settings;
