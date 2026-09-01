(() => {
  const STORAGE_KEY = 'nts-theme';
  const VALID = new Set(['system', 'light', 'dark']);
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const readStoredMode = () => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return VALID.has(value) ? value : 'system';
    } catch (_) {
      return 'system';
    }
  };

  const writeStoredMode = (mode) => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (_) {
      /* Storage can be unavailable in strict/private contexts. */
    }
  };

  const resolvedTheme = (mode) => mode === 'system'
    ? (media.matches ? 'dark' : 'light')
    : mode;

  let currentMode = readStoredMode();

  const updatePressedState = () => {
    document.querySelectorAll('[data-theme-option]').forEach((button) => {
      const active = button.dataset.themeOption === currentMode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const applyTheme = (mode, persist = false) => {
    currentMode = VALID.has(mode) ? mode : 'system';
    const resolved = resolvedTheme(currentMode);
    const root = document.documentElement;

    root.dataset.themeMode = currentMode;
    root.dataset.theme = resolved;
    root.style.colorScheme = resolved;

    if (persist) writeStoredMode(currentMode);
    updatePressedState();
  };

  applyTheme(currentMode);

  const iconSystem = `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="2"></rect>
      <path d="M8 21h8M12 17v4"></path>
    </svg>`;

  const iconLight = `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"></path>
    </svg>`;

  const iconDark = `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path>
    </svg>`;

  const getLabels = () => {
    const english = document.documentElement.lang === 'en' || document.body?.dataset.lang === 'en';
    return english
      ? {
          label: 'Appearance',
          group: 'Website appearance',
          system: 'System',
          light: 'Light',
          dark: 'Dark'
        }
      : {
          label: 'รูปแบบสี',
          group: 'รูปแบบสีของเว็บไซต์',
          system: 'ตามระบบ',
          light: 'สว่าง',
          dark: 'มืด'
        };
  };

  const buttonMarkup = (mode, label, icon) => `
    <button class="footer-theme-button" type="button" data-theme-option="${mode}" aria-pressed="false" aria-label="${label}">
      ${icon}
      <span>${label}</span>
    </button>`;

  const mountSwitcher = () => {
    if (document.querySelector('.footer-theme-switcher')) {
      updatePressedState();
      return true;
    }

    const footerBottom = document.querySelector('.footer-v3-bottom-inner');
    if (!footerBottom) return false;

    const labels = getLabels();
    const wrapper = document.createElement('div');
    wrapper.className = 'footer-theme-switcher';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', labels.group);
    wrapper.innerHTML = `
      <span class="footer-theme-label">${labels.label}</span>
      <div class="footer-theme-options">
        ${buttonMarkup('system', labels.system, iconSystem)}
        ${buttonMarkup('light', labels.light, iconLight)}
        ${buttonMarkup('dark', labels.dark, iconDark)}
      </div>`;

    const backToTop = footerBottom.querySelector('.footer-to-top');
    footerBottom.insertBefore(wrapper, backToTop || null);

    wrapper.addEventListener('click', (event) => {
      const button = event.target.closest('[data-theme-option]');
      if (!button) return;
      applyTheme(button.dataset.themeOption, true);
    });

    updatePressedState();
    return true;
  };

  const ensureMounted = () => {
    if (mountSwitcher()) return;

    const observer = new MutationObserver(() => {
      if (mountSwitcher()) observer.disconnect();
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureMounted, { once: true });
  } else {
    ensureMounted();
  }

  const onSystemThemeChange = () => {
    if (currentMode === 'system') applyTheme('system');
  };

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', onSystemThemeChange);
  } else if (typeof media.addListener === 'function') {
    media.addListener(onSystemThemeChange);
  }

  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return;
    const incoming = VALID.has(event.newValue) ? event.newValue : 'system';
    applyTheme(incoming);
  });
})();
