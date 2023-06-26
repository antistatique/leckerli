import { mergeDeepRight } from 'ramda';

export const defaultSettings = {
  translations: {
    banner: {
      title: 'This website uses cookies.',
      description: 'We use cookies to improve your browsing experience, deliver personalised advertising or content and analyse our traffic. By clicking on "Accept all", you consent to our use of cookies.',
      accept: 'Accept all',
      reject: 'Deny',
      customise: 'Customize'
    }
  }
}

const useSettings = () => mergeDeepRight(
  defaultSettings,
  window.leckerliSettings ?? {}
);

export default useSettings;
