import type Settings from './settings';

type Cookie = Settings['baseData'] & Record<string, boolean>;

export default Cookie;
