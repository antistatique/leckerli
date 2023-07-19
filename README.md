# 🍪 Leckerli

> Lightweight (~16kB gzip) and customisable GDPR cookie manager

## 📗 Usage

### Standard approach with CDN

To use leckerli into your website, simply add the following CSS/JavaScript in your website:

```html
<html>
<head>
  <!-- somewhere in the <head /> -->
  <link
    rel="stylesheet"
    href="//www.unpkg.com/@antistatique/leckerli/dist/assets/leckerli.min.css"
  />
</head>
<body>
  <!-- at the end of your <body /> -->
  <script
    defer
    type="module"
    src="//www.unpkg.com/@antistatique/leckerli/dist/assets/leckerli.min.js"
  ></script>
</body>
</html>
```

### GTM approach with CDN

You can also inject a bit of JavaScript to your website to install Leckerli using Google Tag Manager:

```js
// For the CSS
const leckerliStyles = document.createElement('link');
leckerliStyles.rel = 'stylesheet';
leckerliStyles.href = '//www.unpkg.com/@antistatique/leckerli/dist/assets/leckerli.min.css';
document.head.appendChild(leckerliStyles);

// For the JavaScript
const leckerliScript = document.createElement('script');
leckerliScript.src = '//www.unpkg.com/@antistatique/leckerli/dist/assets/leckerli.min.js';
document.body.appendChild(leckerliScript);
```

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

It's the `expires` of your cookie, by default it is set for a month from the current day. It should be either a Date or a number.

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
    save: 'Save'
  },
  //...
}
```

if the `title` or `description` are not provided, it won't be shown.

The `description` can contain markup in a restricted way: only the following tags are allowed:

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
  permissions: [
    {
      slug: 'settings',
      title: 'Preferences',
      description: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'
    }
  ],
  //...
}
```

if the `permissions` setting is set to an empty array, the "customize" button won't be shown.

```ts
window.leckerliSettings = {
  //...
  permissions: [],
  //...
}
```

### baseData

`baseData` is an object of any kind that **will be passed to the final cookie** as well. For example for store consent-id of some sort.

### enableGtmConsent

`enableGtmConsent` (`false` by default) enables the **consent update** based on the permissions's slugs, in the `window.dataLayer`. It simplifies Google Tag Manager integration.

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
      save: 'Sauvegarder'
    },
    permissions: [
      {
        slug: 'settings',
        title: 'Préférences',
        description: 'Les cookies de préférence permettent à un site web de mémoriser des informations qui modifient le comportement ou l\'apparence du site, comme votre langue préférée ou la région dans laquelle vous vous trouvez.'
      },
      {
        slug: 'ga',
        title: 'Google analytics',
        description: 'Google Analytics permet de mesurer et d\'analyser le comportement des visiteurs d\'un site internet, en fournissant des données clés sur leur provenance, leur navigation et leur engagement, afin d\'aider à optimiser le site et à améliorer l\'expérience utilisateur.'
      },
    ],
  }
</script>
```

Feel free to split the configuration object if you want to set the banner translations in the template of your website and the rest in Google Tag Manager for example:

```js
// In your template
window.leckerliSettings = {};
window.leckerliSettings.banner = {
  title: 'Nous respectons votre vie privée.',
  description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies.',
  accept: 'Accepter tout',
  reject: 'Tout rejeter',
  customise: 'Personnaliser',
};

// In GTM
window.leckerliSettings.name = 'website-gdpr';
window.leckerliSettings.baseData = {
  consentid: 'b638a4a9-a846-475a-a29b-d2bb596cb735',
};
window.leckerliSettings.permissions = [
  {
    slug: 'settings',
    title: 'Préférences',
    description: 'Les cookies de préférence permettent à un site web de mémoriser des informations qui modifient le comportement ou l\'apparence du site, comme votre langue préférée ou la région dans laquelle vous vous trouvez.'
  },
  {
    slug: 'ga',
    title: 'Google analytics',
    description: 'Google Analytics permet de mesurer et d\'analyser le comportement des visiteurs d\'un site internet, en fournissant des données clés sur leur provenance, leur navigation et leur engagement, afin d\'aider à optimiser le site et à améliorer l\'expérience utilisateur.'
  },
];
```

## 🩻 Cookie structure

With the default settings above, here is the value stored in our cookie:

```plain
{%22settings%22:true}
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

| Class                   | Description                         |
| ----------------------- | ----------------------------------- |
| `.banner-wrapper`       | Override the banner display style   |
| `.banner-title`         | Override the title style            |
| `.banner-description`   | Override the description style      |
| `.banner-btns`          | Override the buttons display style  |
| `.banner-btn-customise` | Override the customize button style |
| `.banner-btn-accept`    | Override the accept button style    |
| `.banner-btn-reject`    | Override the reject button style    |

## 🧑‍💻 Contribute

To locally run the project:

```bash
$ yarn
$ yarn dev
```
