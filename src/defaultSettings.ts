const defaultSettings = {
  name: 'leckerli',
  banner: {
    title: 'This website uses cookies.',
    description:
      'We use cookies to improve your browsing experience, deliver personalised advertising or content and analyse our traffic. By clicking on "Accept all", you consent to our use of cookies.',
    accept: 'Accept all',
    reject: 'Deny',
    customise: 'Customize',
  },
  permissions: [
    {
      slug: 'settings',
      title: 'Preferences',
      description:
        'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.',
    },
  ],
  baseData: {},
  cookie: {},
  choiceMade: false,
  settingsOpen: false,
  domain: window.location.hostname,
};

export default defaultSettings;
