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
