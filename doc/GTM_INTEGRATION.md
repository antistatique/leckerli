# 🍪 Leckerli GTM integration

## Prerequisites and what you should know about GTM

First, if you don't already have one for your website, you must set up _[Google Tag Manager](https://support.google.com/tagmanager/answer/6103696)_ according to the official documentation.

If you don't have any consent management yet, you will have to [review each tag](https://support.google.com/tagmanager/answer/10718549) after Leckerli setup according to the official documentation. If you do not configure consent for a tag, the tag will fire anyway and could not follow user consent settings if they do not have _Built-In Consent Checks_. It's important to review all your tags, and choose between _No additional consent required_ and _Require additional consent for tag to fire_.

1. Go to the tag configuration panel, select _Advanced Settings_ and _Consent Settings_.
2. If the tag does not need any consent or has Built-In Consent Checks like _Google Analytics: GA4 Configuration_, you can select that _no additional consent is required_. With this option, the tag will fire anyway and could load script or even set a cookie; you must check the behavior of the tag to understand how it works. If the tag has Built-In Consent, that means it should follow user consent settings, could still load a script but must not set cookies not allowed by user. Depending on how the Built-In Consent was implemented in the tag, it could update its behavior after the user changes consent settings.
3. You can also require additional consent for the tag to fire, and in this case the tag will _not_ fire if the user did not allow the consent required. To be able to fire this tag after the user changes consent settings without wait on a new page load, have a look at trigger event usage below in this documentation.

## Installation

### Create Leckerli tag

First you have to install the tag template (not yet available in the template gallery, so you need to import it manually).

1. Download the latest [Leckerli Google Tag Template](https://raw.githubusercontent.com/antistatique/leckerli/main/doc/gtm-tag-template.tpl) from GitHub.
2. Select the _Templates_ tab in your website's _Google Tag Manager_ workspace.
3. Click on the _New_ button, select _Import_ in the three-dot menu, and upload the template you downloaded previously.
4. Review the code and permissions, then save the template.

Then you can add the tag and configure it.

1. Select the _Tags_ tab in your website's _Google Tag Manager_ workspace.
2. Click on the _New_ button.
3. Click on the _Triggering_ block and select _Consent Initialization - All Pages_.
4. Click on the _Tag Configuration_ block and select _Leckerli Cookie Banner_ in the _Custom_ section.
5. (Optional) Click on _Tag permissions_ and review them.
6. Set the _leckerli settings_ according to the configuration section below and the [Leckerli README](../README.md). The field must be a valid JSON string and can have multiple lines. You should at least remove not required consent from the permissions array.
7. (Optional) Change the default consent (this is the consent values before the user's consent settings are updated). The default is set to _denied_ for all consents (_ad_storage_, _analytics_storage_, _functionality_storage_, _personalization_storage_, and _security_storage_).
8. Click on the _Save_ button and optionally choose another tag name.

### (Optional) Create Leckerli trigger event

If you need to fire a tag when the user's consent settings are updated, you can configure a trigger. Remember that tags that do not have required additional consent have already been fired and should not be fired again if you are not sure about what will happen. Tags that have Built-In Consent Checks have probably handled the user's consent update.

1. Select the _Triggers_ tab in your website's _Google Tag Manager_ workspace.
2. Click on the _New_ button.
3. Click on the _Trigger Configuration_ block and select _Custom Event_ in the _Other_ section.
4. Set the _Event name_ value to `leckerliConsentUpdate`.
5. Click on the _Save_ button and set _Leckerli Consent Update_ as trigger name.

### (Optional) Manage Internationalisation

Using the html[lang] attribute, a _Trigger_ and a _Tag_ dedicated for each language can be created. 

1. Create a _Custom variable_ type _DOM element_ with "Element selector" : html and "Attribute name": lang
2. For each language
	1. Create a _Trigger_ type "Consent Initialization" which fire only on your custom variable = your language code 
	2. Create a _Tag_ type "Leckerli Cookie Banner" with json configuration according to your language strings
	
#### JSON configuration auf deutsch

```
{
  "banner": {
	"title": "Wir respektieren Ihre Privatsphäre.",
	"description": "Wir verwenden Cookies, um Ihr Surf-Erlebnis zu verbessern, personalisierte Anzeigen oder Inhalte zu schalten und unseren Verkehr zu analysieren. Durch Klicken auf „Alles akzeptieren“ stimmen Sie unserer Verwendung von Cookies zu.",
	"accept": "Alles akzeptieren",
	"reject": "Alles ablehnen",
	"customise": "Anpassen",
	"save": "Speichern",
	"settings": [
	  {
		"slug": "analytics_storage",
		"title": "Google Analytics",
		"description": "Google Analytics ermöglicht es, das Verhalten von Website-Besuchern zu messen und zu analysieren, indem es Schlüsseldaten über ihre Herkunft, Navigation und Engagement liefert, um die Website zu optimieren und das Benutzererlebnis zu verbessern."
	  }
	]
  },
  "permissions": [
	"analytics_storage"
  ]
}

```


## Configuration

### How to configure Leckerli with GTM

* Settings can be defined in website code and tag settings, website config and tag config are merged (webside have priority)
* Cookie name is not editable
* Auto load can be disabled in tag config (but not from website), a script will still be loaded to setup callback
* gtag must be loaded before Leckerli

### How to use event trigger

## Update

### How to update the tag template
re-import and overwrite current tag template, verify if any breaking change between your previous version and the new one exist, fix settings if required. Use preview mode to check that everything works well, then publish.

### a word about versionning
minor update can introduce breaking change for now as leckerli is in active early developement stage, so tag templage will only load updated patch version. The goal is to avoid breaking change in minor update in near future.