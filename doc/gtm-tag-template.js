const copyFromWindow = require('copyFromWindow');
const createQueue = require('createQueue');
const getCookieValues = require('getCookieValues');
const injectScript = require('injectScript');
const JSON = require('JSON');
const log = require('logToConsole');
const Object = require('Object');
const setDefaultConsentState = require('setDefaultConsentState');
const setInWindow = require('setInWindow');
const updateConsentState = require('updateConsentState');

const DEFAULT_CONSENT_STATE = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
};
const ALLOWED_CONSENT_STATE = Object.keys(DEFAULT_CONSENT_STATE);
const COOKIE_NAME = 'gtm-leckerli';
const LECKERLI_JS_URL = 'https://www.unpkg.com/@antistatique/leckerli@1.1/dist/assets/leckerli-gtm.min.js'

/**
 * Used to merge an object in another.
 */
const mergeObject = (target, source) => {
  Object.entries(source).reduce((hash, item) => {
    if (typeof item[1] === 'object') {
      mergeObject(hash[item[0]], item[1]);
    } else {
      hash[item[0]] = item[1];
    }
    return hash;
  }, target);
};

/**
 * Called when consent changes. Assumes that consent object contains keys which
 * directly correspond to Google consent types.
 */
const updateLeckerliConsent = leckerliConsent => {
  const consentState = {};
  Object.keys(leckerliConsent).forEach(key => {
    if (ALLOWED_CONSENT_STATE.indexOf(key) >= 0) {
      consentState[key] = leckerliConsent[key] ? 'granted' : 'denied';
    }
  });

  updateConsentState(consentState);
};

/**
 * Executes the default command, sets the developer ID, and setup default consent
 * realated values and setup leckerli itself.
 */
const main = (data) => {
  // Set developer ID
  // gtagSet('developer_id.<replace_with_your_developer_id>', true);

  // Set default consent state
  const defaultConsentState = { wait_for_update: 500 };
  Object.entries(DEFAULT_CONSENT_STATE).forEach((item) => {
    defaultConsentState[item[0]] = item[1];
  });

  if (typeof data.defaultConsent !== 'undefined')
  {
    data.defaultConsent.reduce((hash, item) => {
      hash[item.consentName] = item.consentState;
    }, defaultConsentState);
  }

  setDefaultConsentState(defaultConsentState);

  // Set data redaction settings
  // gtagSet('ads_data_redaction', data.ads_data_redaction);

  // Prepare leckerli settings, merging website config with GTM config
  const leckerliSettings = JSON.parse(data.leckerliSettings);
  mergeObject(leckerliSettings, copyFromWindow('leckerliSettings') || {});
  leckerliSettings.enableGtmAutoLoad = typeof data.autoInstall === 'undefined' || data.autoInstall;
  leckerliSettings.name = COOKIE_NAME;

  // Check if cookie is set and run updateLeckerliConsent()
  const consent = JSON.parse(getCookieValues(leckerliSettings.name));
  if (typeof consent !== 'undefined') {
    updateLeckerliConsent(consent);
  }

  // Set leckerli settings
  setInWindow('leckerliSettings', leckerliSettings, true);

  // Inject script to load leckerli
  injectScript(LECKERLI_JS_URL);

  // Add event listener to trigger update when consent changes
  setInWindow('leckerliGTMUpdate', (leckerliConsent) => {
    updateLeckerliConsent(leckerliConsent);

    const dataLayerPush = createQueue('dataLayer');
    dataLayerPush({'event': 'leckerliUpdate'});
  });
};

main(data);
data.gtmOnSuccess();