___INFO___

{
  "type": "TAG",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "Leckerli Cookie Banner",
  "brand": {
    "id": "brand_dummy",
    "displayName": ""
  },
  "description": "The leckerli GTM integration compatible with leckerli version ~1.2.0. More information on leckerli repository : https://github.com/antistatique/leckerli",
  "containerContexts": [
    "WEB"
  ]
}


___TEMPLATE_PARAMETERS___

[
  {
    "type": "TEXT",
    "name": "leckerliSettings",
    "displayName": "Leckerli Settings",
    "simpleValueType": true,
    "defaultValue": "{\"permissions\": [\"ad_storage\", \"analytics_storage\", \"functionality_storage\", \"personalization_storage\", \"security_storage\"] }",
    "lineCount": 8,
    "help": "JSON format"
  },
  {
    "type": "CHECKBOX",
    "name": "autoInstall",
    "checkboxText": "Auto include leckerli script \u0026 styles",
    "simpleValueType": true,
    "defaultValue": true,
    "help": "You must load Lekerli javascript and css on your website by yourself if this option is disable.",
    "alwaysInSummary": false
  },
  {
    "type": "SIMPLE_TABLE",
    "name": "defaultConsent",
    "displayName": "Default consent",
    "simpleTableColumns": [
      {
        "defaultValue": "",
        "displayName": "Storage name",
        "name": "consentName",
        "type": "SELECT",
        "selectItems": [
          {
            "value": "ad_storage",
            "displayValue": "ad_storage"
          },
          {
            "value": "analytics_storage",
            "displayValue": "analytics_storage"
          },
          {
            "value": "functionality_storage",
            "displayValue": "functionality_storage"
          },
          {
            "value": "personalization_storage",
            "displayValue": "personalization_storage"
          },
          {
            "value": "security_storage",
            "displayValue": "security_storage"
          }
        ]
      },
      {
        "defaultValue": "denied",
        "displayName": "Consent",
        "name": "consentState",
        "type": "SELECT",
        "selectItems": [
          {
            "value": "granted",
            "displayValue": "Granted"
          },
          {
            "value": "denied",
            "displayValue": "Denied"
          }
        ]
      }
    ]
  }
]


___SANDBOXED_JS_FOR_WEB_TEMPLATE___

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
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'denied',
};

const ALLOWED_CONSENT_STATE = Object.keys(DEFAULT_CONSENT_STATE);
const CONSENT_UPDATE_CUSTOM_EVENT = 'leckerliConsentUpdate';
const COOKIE_NAME = 'gtm-leckerli';
const LECKERLI_JS_URL = 'https://www.unpkg.com/@antistatique/leckerli@1.2/dist/assets/leckerli-gtm.min.js';

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
    dataLayerPush({'event': CONSENT_UPDATE_CUSTOM_EVENT});
  });
};

main(data);
data.gtmOnSuccess();


___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "logging",
        "versionId": "1"
      },
      "param": [
        {
          "key": "environments",
          "value": {
            "type": 1,
            "string": "debug"
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "access_consent",
        "versionId": "1"
      },
      "param": [
        {
          "key": "consentTypes",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "analytics_storage"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "ad_storage"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "functionality_storage"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "wait_for_update"
                  },
                  {
                    "type": 8,
                    "boolean": false
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "security_storage"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "personalization_storage"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "inject_script",
        "versionId": "1"
      },
      "param": [
        {
          "key": "urls",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "https://www.unpkg.com/@antistatique/leckerli*"
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "access_globals",
        "versionId": "1"
      },
      "param": [
        {
          "key": "keys",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "key"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  },
                  {
                    "type": 1,
                    "string": "execute"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "leckerliSettings"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "key"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  },
                  {
                    "type": 1,
                    "string": "execute"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "leckerliGTMUpdate"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "key"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  },
                  {
                    "type": 1,
                    "string": "execute"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "dataLayer"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "get_cookies",
        "versionId": "1"
      },
      "param": [
        {
          "key": "cookieAccess",
          "value": {
            "type": 1,
            "string": "specific"
          }
        },
        {
          "key": "cookieNames",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "gtm-leckerli"
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  }
]


___TESTS___

scenarios: []


___NOTES___

Created on 04/08/2023 09:54:08
