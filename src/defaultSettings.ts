const defaultSettings = {
  name: 'leckerli',
  expires: 92,
  banner: {
    title: 'This website uses cookies.',
    description:
      'We use cookies to improve your browsing experience, deliver personalised advertising or content and analyse our traffic. By clicking on "Accept all", you consent to our use of cookies.',
    accept: 'Accept all',
    reject: 'Deny',
    customise: 'Customize',
    customiseDescription: '',
    save: 'Save',
    settings: [
      {
        slug: 'analytics_storage',
        title: 'Statistics',
        description:
          'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
      },
      {
        slug: 'ad_storage',
        title: 'Marketing',
        description:
          'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
      },
    ],
  },
  permissions: ['analytics_storage', 'ad_storage'],
  baseData: {},
  cookie: {},
  choiceMade: false,
  settingsOpen: false,
  domain: window.location.hostname,
  enableGtmAutoLoad: false,
  displayDelay: 0,
};

export default defaultSettings;
