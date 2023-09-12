if (window.leckerliSettings.enableGtmAutoLoad) {
  const leckerliStyles = document.createElement("link");
  leckerliStyles.rel = "stylesheet";
  leckerliStyles.href = `//www.unpkg.com/@antistatique/leckerli@${"1.2.0"}/dist/assets/leckerli.min.css`;
  document.head.appendChild(leckerliStyles);
}
if (window.leckerliSettings.enableGtmAutoLoad) {
  const leckerliScript = document.createElement("script");
  leckerliScript.src = `//www.unpkg.com/@antistatique/leckerli@${"1.2.0"}/dist/assets/leckerli.min.js`;
  if (!window.leckerliSettings.minify) {
    leckerliScript.src = `//www.unpkg.com/@antistatique/leckerli@${"1.2.0"}/dist/assets/leckerli.js`;
  }
  document.body.appendChild(leckerliScript);
}
document.addEventListener("leckerli:permissions-updated", (event) => {
  window.leckerliGTMUpdate(event.detail.cookie);
});
