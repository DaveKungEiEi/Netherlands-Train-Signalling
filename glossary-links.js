/* Apply the saved/system theme as early as possible, then load the full theme UI. */
(() => {
  const valid = new Set(['system', 'light', 'dark']);
  let mode = 'system';

  try {
    const stored = localStorage.getItem('nts-theme');
    if (valid.has(stored)) mode = stored;
  } catch (_) {
    /* localStorage can be unavailable in strict/private contexts. */
  }

  const resolved = mode === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : mode;

  document.documentElement.dataset.themeMode = mode;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;

  if (!document.querySelector('link[href^="theme.css"]')) {
    const themeStyles = document.createElement('link');
    themeStyles.rel = 'stylesheet';
    themeStyles.href = 'theme.css?v=20260901-1';
    document.head.appendChild(themeStyles);
  }

  if (!document.querySelector('link[href^="theme-contrast-fix.css"]')) {
    const contrastStyles = document.createElement('link');
    contrastStyles.rel = 'stylesheet';
    contrastStyles.href = 'theme-contrast-fix.css?v=20260901-1';
    document.head.appendChild(contrastStyles);
  }

  /* Loaded last on purpose: page styles and the base theme both contain
     historical hard-coded light surfaces. This compatibility layer fixes
     dark-mode regressions without changing the light theme. */
  if (!document.querySelector('link[href^="dark-mode-regression-fix.css"]')) {
    const regressionStyles = document.createElement('link');
    regressionStyles.rel = 'stylesheet';
    regressionStyles.href = 'dark-mode-regression-fix.css?v=20260912-1';
    document.head.appendChild(regressionStyles);
  }

  /* Later page extensions (notably Switzerland comparison and the lower
     Impact layouts) arrived after the original theme pass. Keep their dark
     overrides separate so the base compatibility layer stays easy to audit. */
  if (!document.querySelector('link[href^="dark-mode-page-extensions.css"]')) {
    const extensionStyles = document.createElement('link');
    extensionStyles.rel = 'stylesheet';
    extensionStyles.href = 'dark-mode-page-extensions.css?v=20260912-2';
    document.head.appendChild(extensionStyles);
  }

  if (!document.querySelector('script[src^="theme.js"]')) {
    const themeScript = document.createElement('script');
    themeScript.src = 'theme.js?v=20260901-1';
    themeScript.async = true;
    document.head.appendChild(themeScript);
  }
})();

(() => {
  if (!document.querySelector('script[src^="latest-ertms-data-20260831.js"]')) {
    const latestDataScript = document.createElement('script');
    latestDataScript.src = 'latest-ertms-data-20260831.js?v=20260907-1';
    latestDataScript.async = true;
    document.head.appendChild(latestDataScript);
  }
})();

(() => {
  if (!document.querySelector('link[href^="image-lightbox.css"]')) {
    const lightboxStyles = document.createElement('link');
    lightboxStyles.rel = 'stylesheet';
    lightboxStyles.href = 'image-lightbox.css?v=20260831-1';
    document.head.appendChild(lightboxStyles);
  }
  if (!document.querySelector('script[src^="image-lightbox.js"]')) {
    const lightboxScript = document.createElement('script');
    lightboxScript.src = 'image-lightbox.js?v=20260907-1';
    lightboxScript.async = true;
    document.head.appendChild(lightboxScript);
  }
})();

/* Interactive keyword / glossary-link decoration intentionally removed.
   Railway terms are now rendered as normal text on every page. */
