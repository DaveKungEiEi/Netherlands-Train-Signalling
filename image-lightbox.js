(() => {
  const getLang = () => document.documentElement.lang === 'en' || document.body?.dataset.lang === 'en' ? 'en' : 'th';
  const labels = {
    th: { dialog: 'ดูรูปภาพขนาดใหญ่', close: 'ปิดรูปภาพ', open: 'กดเพื่อขยายรูปภาพ' },
    en: { dialog: 'Large image viewer', close: 'Close image', open: 'Open larger image' }
  };

  let lightbox;
  let lightboxImage;
  let lightboxCaption;
  let closeButton;
  let lastTrigger = null;
  let closeTimer = 0;

  const extractUrls = (backgroundImage) => {
    if (!backgroundImage || backgroundImage === 'none') return [];
    const urls = [];
    const re = /url\((?:"|')?(.*?)(?:"|')?\)/g;
    let match;
    while ((match = re.exec(backgroundImage))) {
      if (match[1]) urls.push(match[1]);
    }
    return urls;
  };

  const cleanPseudoContent = (value) => {
    if (!value || value === 'none' || value === 'normal' || value === '""') return '';
    let text = value;
    if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
      text = text.slice(1, -1);
    }
    return text.replace(/\\A/g, ' ').replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
  };

  const createLightbox = () => {
    if (lightbox) return;
    const lang = getLang();
    lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', labels[lang].dialog);
    lightbox.innerHTML = `
      <div class="image-lightbox-backdrop" data-lightbox-close></div>
      <button class="image-lightbox-close" type="button" aria-label="${labels[lang].close}" data-lightbox-close>×</button>
      <div class="image-lightbox-stage">
        <img class="image-lightbox-image" alt="">
        <p class="image-lightbox-caption"></p>
      </div>`;
    document.body.appendChild(lightbox);
    lightboxImage = lightbox.querySelector('.image-lightbox-image');
    lightboxCaption = lightbox.querySelector('.image-lightbox-caption');
    closeButton = lightbox.querySelector('.image-lightbox-close');

    lightbox.addEventListener('click', (event) => {
      if (event.target.closest('[data-lightbox-close]')) closeLightbox();
    });
  };

  const openLightbox = (src, caption = '', trigger = null) => {
    if (!src) return;
    createLightbox();
    window.clearTimeout(closeTimer);
    lastTrigger = trigger instanceof HTMLElement ? trigger : null;
    lightboxImage.src = src;
    lightboxImage.alt = caption || '';
    lightboxCaption.textContent = caption || '';
    lightbox.hidden = false;
    document.body.classList.add('image-lightbox-open');
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
      closeButton?.focus({ preventScroll: true });
    });
  };

  const closeLightbox = () => {
    if (!lightbox || lightbox.hidden) return;
    lightbox.classList.remove('is-open');
    document.body.classList.remove('image-lightbox-open');
    closeTimer = window.setTimeout(() => {
      lightbox.hidden = true;
      lightboxImage.removeAttribute('src');
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
      lastTrigger = null;
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 210);
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox && !lightbox.hidden) {
      event.preventDefault();
      closeLightbox();
    }
  });

  const captionForImage = (img) => {
    const figcaption = img.closest('figure')?.querySelector('figcaption');
    if (figcaption?.textContent.trim()) return figcaption.textContent.trim().replace(/\s+/g, ' ');
    if (img.alt?.trim()) return img.alt.trim();
    const sectionTitle = img.closest('.article-section')?.querySelector('h2,h3');
    return sectionTitle?.textContent.trim() || '';
  };

  const bindImage = (img) => {
    if (!(img instanceof HTMLImageElement) || img.dataset.lightboxBound === '1') return;
    if (img.closest('.site-header,.site-footer,[data-site-header],[data-site-footer],.image-lightbox')) return;
    if (img.closest('a[href]')) return;
    if (img.classList.contains('brand-logo-image') || img.classList.contains('footer-v3-logo') || /logo\.webp(?:\?|$)/i.test(img.getAttribute('src') || '')) return;

    img.dataset.lightboxBound = '1';
    img.classList.add('lightbox-zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `${labels[getLang()].open}${img.alt ? `: ${img.alt}` : ''}`);

    const activate = () => openLightbox(img.currentSrc || img.src, captionForImage(img), img);
    img.addEventListener('click', activate);
    img.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activate();
    });
  };

  const captionForBackground = (element) => {
    const credit = cleanPseudoContent(getComputedStyle(element, '::after').content);
    if (credit) return credit;
    const ownText = element.querySelector?.('figcaption,.caption,.media-caption')?.textContent.trim();
    if (ownText) return ownText.replace(/\s+/g, ' ');
    const nearbyTitle = element.closest('.article-section')?.querySelector('h2,h3') || element.closest('.history-item')?.querySelector('h3');
    return nearbyTitle?.textContent.trim() || '';
  };

  const bindBackgroundElement = (element) => {
    if (!(element instanceof HTMLElement) || element.dataset.lightboxBgBound === '1') return;
    if (element.closest('.site-header,.site-footer,.image-lightbox')) return;
    if (element.matches('.page-hero,.hero-editorial,body,html,main,.page-sheet,.section,.container,.article,.article-section')) return;
    if (element.closest('.page-hero') && !element.classList.contains('page-badge')) return;
    if (element.querySelector('img')) return;

    const rect = element.getBoundingClientRect();
    if (rect.width < 110 || rect.height < 70) return;
    const urls = extractUrls(getComputedStyle(element).backgroundImage);
    if (!urls.length) return;
    const src = urls[urls.length - 1];

    element.dataset.lightboxBgBound = '1';
    element.classList.add('lightbox-background-zoomable');
    if (!element.hasAttribute('tabindex')) element.tabIndex = 0;
    if (!element.hasAttribute('role')) element.setAttribute('role', 'button');
    element.setAttribute('aria-label', labels[getLang()].open);

    const activate = (event) => {
      if (event?.target instanceof Element && event.target !== element && event.target.closest('a,button,input,select,textarea')) return;
      openLightbox(src, captionForBackground(element), element);
    };
    element.addEventListener('click', activate);
    element.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activate(event);
    });
  };

  const bindPseudoImage = (element) => {
    if (!(element instanceof HTMLElement) || element.dataset.lightboxPseudoBound === '1') return;
    const pseudo = getComputedStyle(element, '::after');
    const urls = extractUrls(pseudo.backgroundImage);
    if (!urls.length) return;

    const src = urls[urls.length - 1];
    const heightValue = parseFloat(pseudo.height) || parseFloat(pseudo.minHeight) || 320;
    if (!Number.isFinite(heightValue) || heightValue < 100) return;

    element.dataset.lightboxPseudoBound = '1';
    element.classList.add('lightbox-pseudo-source');
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'lightbox-pseudo-trigger';
    trigger.style.height = `${Math.round(heightValue)}px`;
    trigger.setAttribute('aria-label', labels[getLang()].open);
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      openLightbox(src, cleanPseudoContent(pseudo.content) || captionForBackground(element), trigger);
    });
    element.appendChild(trigger);
  };

  const scan = () => {
    document.querySelectorAll('main img, .page-hero img').forEach(bindImage);

    /* Background images used as real content: history cards, hero badges and
       other editorial/media blocks. The page/hero background itself is never scanned. */
    document.querySelectorAll('main *, .page-badge').forEach(bindBackgroundElement);

    /* Several editorial photos are generated with ::after in the existing CSS.
       Add a transparent zoom target over only that image area. */
    document.querySelectorAll('main .article-section, body.home-page #ns-history').forEach(bindPseudoImage);
  };

  const init = () => {
    createLightbox();
    scan();
    window.setTimeout(scan, 250);
    window.setTimeout(scan, 900);
    window.addEventListener('load', scan, { once: true });

    let timer = 0;
    const observer = new MutationObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(scan, 90);
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src','style'] });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
