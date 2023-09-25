// For the CSS
if (window.leckerliSettings.enableGtmAutoLoad) {
  const leckerliStyles = document.createElement('link');
  leckerliStyles.rel = 'stylesheet';
  leckerliStyles.href = `//www.unpkg.com/@antistatique/leckerli@${APP_VERSION}/dist/assets/leckerli.min.css`;
  document.head.appendChild(leckerliStyles);
}

// For the JavaScript
if (window.leckerliSettings.enableGtmAutoLoad) {
  const leckerliScript = document.createElement('script');
  leckerliScript.src = `//www.unpkg.com/@antistatique/leckerli@${APP_VERSION}/dist/assets/leckerli.min.js`;
  document.body.appendChild(leckerliScript);
}

// Call GTM tag event handle function
document.addEventListener('leckerli:permissions-updated', event => {
  window.leckerliGTMUpdate(event.detail.cookie);
});
