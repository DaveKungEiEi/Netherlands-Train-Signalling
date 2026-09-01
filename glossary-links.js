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
    latestDataScript.src = 'latest-ertms-data-20260831.js?v=20260831-1';
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
    lightboxScript.src = 'image-lightbox.js?v=20260831-2';
    lightboxScript.async = true;
    document.head.appendChild(lightboxScript);
  }
})();

/* Interactive keyword / glossary-link decoration intentionally removed.
   Railway terms are now rendered as normal text on every page. */
