# 🍪 Leckerli

> Lightweight (~23kB gzip) and customisable GDPR cookie manager

## 📗 Usage

### Standard approach with CDN

To use leckerli into your website, simply add the following CSS/JavaScript in your website:

```html
<html>
<head>
  <!-- somewhere in the <head /> -->
  <link
    rel="stylesheet"
    href="//www.unpkg.com/@antistatique/leckerli@1.2/dist/assets/leckerli.min.css"
  />
</head>
<body>
  <!-- at the end of your <body /> -->
  <script
    defer
    type="module"
    src="//www.unpkg.com/@antistatique/leckerli@1.2/dist/assets/leckerli.min.js"
  ></script>
</body>
</html>
```

### Google Tag Manager

For Google Tag Manager integration, you should use the Leckerli custom tag template, see [GTM integration](./doc/GTM_INTEGRATION.md) for more information.

### Local files

You can also download locally the CSS & JS files from [each release](https://github.com/antistatique/leckerli/releases) and use the file located in `dist/assets/`.

Then follow the Standard approach described above.

## ⚙️ Configuration

To configure Leckerli, attach a `leckerliSettings` object to your `window`. Something like:

```html
<script>
  window.leckerliSettings = {
    // Your settings
  }
</script>
```

Here are the settings that you can override:

### name

It's the `name` of your cookie.

### domain

It's the `domain` of your cookie, by default the current website (`window.location.hostname`).

### expires

It's the `expires` of your cookie, by default it is set for 92 days (3 months) from the current day. It should be a number of days.

### banner

`banner` is an object with the text content to override. By default:

```ts
window.leckerliSettings = {
  //...
  banner: {
    title: 'This website uses cookies.',
    description: 'We use cookies to improve your browsing experience, deliver personalised advertising or content and analyse our traffic. By clicking on "Accept all", you consent to our use of cookies.',
    accept: 'Accept all',
    reject: 'Deny',
    customise: 'Customize',
    customiseDescription: '',
    save: 'Save'
  },
  //...
}
```

if the `title`, `description` or `customiseDescription` are not provided, they won't be shown.

The `description` and `customizeDescription` can contain markup in a restricted way: only the following tags are allowed:

```ts
const allowedTags = [
  'b',
  'i',
  'em',
  'strong',
  'p',
  'ul',
  'li',
  'ol',
  'span',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'a',
  'div',
]
```

### permissions

The core of Leckerli, it's all the `permissions` that you want to manage. By default:

```ts
window.leckerliSettings = {
  //...
  banner: {
    //...
    settings: [
      {
        slug: 'settings',
        title: 'Preferences',
        description: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'
      },
    ],
    //...
  },
  permissions: [
    'settings',
  ],
  //...
}
```

if the `banner.settings` array is set to an empty array, the "Customize" button won't be shown and "Accept All" button will set
all `permissions` setting to true.

```ts
window.leckerliSettings = {
  //...
  banner: {
    //...
    settings: [],
    //...
  },
  //...
}
```

### baseData

`baseData` is an object of any kind that **will be passed to the final cookie** as well. For example for store consent-id of some sort.

### For example

You could have something like:

```html
<script>
  window.leckerliSettings = {
    name: 'website-gdpr',
    baseData: {
      consentid: 'b638a4a9-a846-475a-a29b-d2bb596cb735',
    },
    banner: {
      title: 'Nous respectons votre vie privée.',
      description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies.',
      accept: 'Accepter tout',
      reject: 'Tout rejeter',
      customise: 'Personnaliser',
      customiseDescription: 'Vous pouvez ajuster vos préférences en acceptant ou refusant chaque catégorie de cookies utilisée sur ce site.',
      save: 'Sauvegarder',
      settings: [
        {
          slug: 'analytics_storage',
          title: 'Google analytics',
          description: 'Google Analytics permet de mesurer et d\'analyser le comportement des visiteurs d\'un site internet, en fournissant des données clés sur leur provenance, leur navigation et leur engagement, afin d\'aider à optimiser le site et à améliorer l\'expérience utilisateur.'
        },
        {
          slug: 'personalization_storage',
          title: 'Préférences',
          description: 'Les cookies de préférence permettent à un site web de mémoriser des informations qui modifient le comportement ou l\'apparence du site, comme votre langue préférée ou la région dans laquelle vous vous trouvez.'
        },
      ],
    },
    permissions: [
      'analytics_storage',
      'personalization_storage',
    ],
  }
</script>
```

## 🩻 Cookie structure

With the default settings above, here is the value stored in our cookie:

```plain
{%settings%22:true}
```

And after a `JSON.parse()`:

```json
{"settings":true}
```

Basically, it's the `baseData` values, if there is any, and for each `permissions.slug`, a **boolean**.

## 🎫 Events

Here is a list of events you can **listen**:

```js
// To listen the initialisation
document.addEventListener('leckerli:initialised', (event) => {
  // to get cookie data OR null if the user's choice has not been made
  console.log(event.detail.cookie);
});

// To listen to the permissions / cookie's updates
document.addEventListener('leckerli:permissions-updated', (event) => {
  // to get cookie data
  console.log(event.detail.cookie);
});

// To listen the modal states
document.addEventListener('leckerli:modal-closed', () => {
  // react to modal closed
});
document.addEventListener('leckerli:modal-opened', () => {
  // react to modal opened
});
```

Here is a list of events you can **dispatch**:

```js
// To manage the banner, even after the user's choice
document.dispatchEvent(new CustomEvent('leckerli:open-banner'));
document.dispatchEvent(new CustomEvent('leckerli:close-banner'));

// To manage the settings modal
document.dispatchEvent(new CustomEvent('leckerli:open-modal'));
document.dispatchEvent(new CustomEvent('leckerli:close-modal'));
```

## 🎨 Theming

You can theme Leckerli with the following CSS custom properties (variables):

```html
<style>
  :root {
    --leckerli-foreground: #fff;        /* Texts */
    --leckerli-background: #000;        /* Backgrounds  */
    --leckerli-primary: #ff0099;        /* Call to actions */
    --leckerli-primary-hover: #d1007e;  /* Call to actions hovered */
    --leckerli-primary-active: #9D005F; /* Call to actions actived */
    --leckerli-font: sans-serif;        /* Font family */
  }
</style>
```

To override any other style, you can use the following classes:

| Class                                  | Description                                            |
|----------------------------------------|--------------------------------------------------------|
| `.banner-wrapper`                      | Override the banner display style                      |
| `.banner-title`                        | Override the title style                               |
| `.banner-description`                  | Override the description style                         |
| `.banner-btns`                         | Override the buttons display style                     |
| `.banner-btn-customise`                | Override the customize button style                    |
| `.banner-btn-accept`                   | Override the accept button style                       |
| `.banner-btn-reject`                   | Override the reject button style                       |
| `.banner-settings-title`               | Override the custom settings title style               |
| `.banner-settings-general-description` | Override the custom settings general description style |
| `.banner-settings-toggle`              | Override the custom settings toggle button style       |
| `.banner-settings-description`         | Override the custom settings description style         |
| `.banner-settings-save`                | Override the custom settings save button style         |
| `.banner-settings-close`               | Override the custom settings close button style        |

## 🧑‍💻 Contribute

To locally run the project:

```bash
$ yarn
$ yarn dev
```
