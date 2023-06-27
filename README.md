# 🍪 Leckerli

> Lightweight and customisable GDPR cookie manager

## 📗 Usage

To use leckerli into your website, simply add the following CSS/JavaScript in your website:

```html
<html>
<head>
  <!-- somewhere in the <head /> -->
  <link rel="stylesheet" href="leckerli.css">
</head>
<body>
  <!-- at the end of your <body /> -->
  <<script type="module" src="leckerli.js"></script>
</body>
</html>
```

## ⚙️ Configuration

To configure Leckerli, attach a `leckerliSettings` object to your `window`. Something like:

```html
<script>
  window.leckerliSettings = {
    // Your settings
    baseData: {
      consentid: 'b638a4a9-a846-475a-a29b-d2bb596cb735',
    },
    banner: {
      title: 'Nous respectons votre vie privée.',
      description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies.',
      accept: 'Accepter tout',
      reject: 'Tout rejeter',
      customise: 'Personnaliser',
    },
    permissions: [
      {
        slug: 'ga',
        title: 'Google analytics',
        description: 'To track all your actions.'

      },
      {
        slug: 'settings',
        title: 'Preferences',
        description: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'

      }
    ],
  }
</script>
```

Here are the settings that you can override:

### `name`

It's the name of your cookie.

### `banner`

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
  },
  //...
}
```

### `permissions`

The core of Leckerli, it's all the permissions that you want to manage. By default:

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

### `baseData`

`baseData` is an object of any kind that **will be passed to the final cookie** as well. For example for store consent-id of some sort.

### For example

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

## 🧑‍💻 Contribute

To locally run the project:

```bash
$ yarn
$ yarn dev
```
