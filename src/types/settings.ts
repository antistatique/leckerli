import defaultSettings from "../defaultSettings.ts";

type Settings = typeof defaultSettings & {
  baseData: any,
  permissions: {
    slug: string;
    title: string;
    description: string;
  }[]
};

export default Settings;
