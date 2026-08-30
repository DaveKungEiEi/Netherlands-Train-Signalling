const pages = [
  ['index.html', { th: 'หน้าแรก', en: 'Home' }],
  ['atb.html', { th: 'ATB', en: 'ATB' }],
  ['ertms.html', { th: 'ERTMS/ETCS', en: 'ERTMS/ETCS' }],
  ['status.html', { th: 'สถานะ', en: 'Status' }],
  ['problems.html', { th: 'ปัญหา', en: 'Challenges' }],
  ['comparison.html', { th: 'เปรียบเทียบ', en: 'Comparison' }],
  ['impact.html', { th: 'ผลกระทบ', en: 'Impact' }],
  ['summary.html', { th: 'บทสรุป', en: 'Conclusion' }],
  ['other.html', { th: 'อื่น ๆ', en: 'More' }]
];

const currentPage = document.body.dataset.page || 'index.html';
const languageParams = new URLSearchParams(window.location.search);
const explicitLanguage = languageParams.get('lang');
const storedLanguage = localStorage.getItem('nts-language');
const currentLang = explicitLanguage === 'en' || explicitLanguage === 'th'
  ? explicitLanguage
  : storedLanguage === 'en'
    ? 'en'
    : 'th';

localStorage.setItem('nts-language', currentLang);
document.documentElement.lang = currentLang;
document.body.dataset.lang = currentLang;

// Keep the chapter/update label identical across every content page.
// Page-specific English scripts may rebuild the hero after script.js runs,
// so a lightweight observer reapplies the shared label whenever needed.
const chapterNumbers = {
  'atb.html': '01',
  'ertms.html': '02',
  'status.html': '03.1',
  'problems.html': '03.2',
  'comparison.html': '04.1',
  'impact.html': '04.2',
  'summary.html': '05'
};

const chapterUpdateText = {
  th: 'อัปเดตล่าสุด 30 ส.ค. 2026',
  en: 'Updated 30 Aug 2026'
};

const applyChapterUpdateLabel = () => {
  const chapter = chapterNumbers[currentPage];
  if (!chapter) return;

  const eyebrow = document.querySelector('.page-hero .eyebrow');
  if (!eyebrow) return;

  const lang = document.documentElement.lang === 'en' || document.body.dataset.lang === 'en' ? 'en' : 'th';
  const expected = `Chapter ${chapter} • ${chapterUpdateText[lang]}`;
  if (eyebrow.textContent.trim() === expected) return;

  let dot = eyebrow.querySelector('.eyebrow-dot');
  if (!dot) {
    dot = document.createElement('span');
    dot.className = 'eyebrow-dot';
  }
  eyebrow.replaceChildren(dot, document.createTextNode(` ${expected}`));
};

applyChapterUpdateLabel();
window.addEventListener('load', () => window.setTimeout(applyChapterUpdateLabel, 0), { once: true });

const chapterLabelObserver = new MutationObserver(() => applyChapterUpdateLabel());
chapterLabelObserver.observe(document.body, { childList: true, subtree: true });

const text = {
  th: {
    navLabel: 'เมนูหลัก',
    brandLabel: 'กลับไปหน้าแรก Netherlands Train System',
    languageLabel: 'เปลี่ยนภาษา',
    thai: 'ไทย',
    english: 'English',
    footerSummary: 'การศึกษาเส้นทางการเปลี่ยนผ่านระบบอาณัติสัญญาณรถไฟทางไกลของเนเธอร์แลนด์\nจาก ATB สู่ ERTMS/ETCS และผลต่อระบบรถไฟในยุคดิจิทัล',
    footerRouteAria: 'สถานะการเปลี่ยนผ่านจาก ATB สู่ ETCS: ประมาณ 6 เปอร์เซ็นต์ของขอบเขต Tranche 1 เข้าสู่งานภาคสนามแล้ว',
    legacy: 'ระบบเดิม',
    target: 'ระบบเป้าหมาย',
    transitionStatus: 'สถานะการเปลี่ยนผ่าน ≈6%',
    transitionDetail: '≈25 km / 419 km ของ Tranche 1 เข้าสู่งานภาคสนาม',
    signalling: 'ระบบอาณัติสัญญาณ',
    transition: 'การเปลี่ยนผ่าน',
    explore: 'สำรวจเพิ่มเติม',
    currentStatus: 'สถานะปัจจุบัน',
    challenges: 'ปัญหาและความท้าทาย',
    impact: 'ผลกระทบ',
    comparison: 'เปรียบเทียบประเทศเพื่อนบ้าน',
    references: 'คำศัพท์และแหล่งอ้างอิง',
    home: 'หน้าแรก',
    backTop: 'กลับด้านบน',
    footerNavLabel: 'เมนูท้ายเว็บไซต์',
    sourceLink: 'แหล่งอ้างอิง',
    sourceAria: 'เปิดแหล่งอ้างอิงของหัวข้อนี้ในหน้าอื่น ๆ'
  },
  en: {
    navLabel: 'Main navigation',
    brandLabel: 'Go to the Netherlands Train System homepage',
    languageLabel: 'Change language',
    thai: 'ไทย',
    english: 'English',
    footerSummary: 'A study of the transition of Dutch mainline railway signalling\nfrom ATB to ERTMS/ETCS and its impact on a digital railway system.',
    footerRouteAria: 'ATB to ETCS transition status: approximately 6 percent of the Tranche 1 scope has entered field works',
    legacy: 'Legacy system',
    target: 'Target system',
    transitionStatus: 'Transition status ≈6%',
    transitionDetail: '≈25 km / 419 km of Tranche 1 has entered field works',
    signalling: 'Signalling systems',
    transition: 'Migration',
    explore: 'Explore more',
    currentStatus: 'Current status',
    challenges: 'Problems and challenges',
    impact: 'Impact',
    comparison: 'Neighbouring-country comparison',
    references: 'Glossary and references',
    home: 'Home',
    backTop: 'Back to top',
    footerNavLabel: 'Footer navigation',
    sourceLink: 'References',
    sourceAria: 'Open the references for this topic in the More page'
  }
}[currentLang];

const pageHref = (page) => currentLang === 'en' ? `${page}?lang=en` : page;

// Shared styles loaded on every page.
[
  'footer-style.css',
  'language-style.css'
].forEach((href) => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = href;
    document.head.appendChild(stylesheet);
  }
});

// Shared NS-inspired design system for all content pages.
if (currentPage !== 'index.html' && !document.querySelector('link[href="content-page-style.css"]')) {
  const contentStylesheet = document.createElement('link');
  contentStylesheet.rel = 'stylesheet';
  contentStylesheet.href = 'content-page-style.css';
  document.head.appendChild(contentStylesheet);
}

// Page-specific visual systems.
const pageStyles = {
  'status.html': 'status-style.css',
  'other.html': 'reference-style.css'
};
if (pageStyles[currentPage] && !document.querySelector(`link[href="${pageStyles[currentPage]}"]`)) {
  const pageStylesheet = document.createElement('link');
  pageStylesheet.rel = 'stylesheet';
  pageStylesheet.href = pageStyles[currentPage];
  document.head.appendChild(pageStylesheet);
}

// Final geometry pass for all timeline designs. This stylesheet is deliberately
// loaded after shared and page-specific CSS so every page uses the same axis rule.
if (!document.querySelector('link[href="timeline-align.css"]')) {
  const timelineStylesheet = document.createElement('link');
  timelineStylesheet.rel = 'stylesheet';
  timelineStylesheet.href = 'timeline-align.css';
  document.head.appendChild(timelineStylesheet);
}

const languageSwitcherMarkup = `
  <div class="language-switcher">
    <button class="language-toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-label="${text.languageLabel}">
      <span class="language-flag" aria-hidden="true">${currentLang === 'en' ? '🇬🇧' : '🇹🇭'}</span>
      <span class="language-name">${currentLang === 'en' ? text.english : text.thai}</span>
      <svg class="language-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 7.5L10 12L14.5 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div class="language-menu" role="menu" aria-label="${text.languageLabel}">
      <button class="language-option ${currentLang === 'th' ? 'active' : ''}" type="button" role="menuitem" data-lang-option="th"><span aria-hidden="true">🇹🇭</span><span>ไทย</span><span class="check">✓</span></button>
      <button class="language-option ${currentLang === 'en' ? 'active' : ''}" type="button" role="menuitem" data-lang-option="en"><span aria-hidden="true">🇬🇧</span><span>English</span><span class="check">✓</span></button>
    </div>
  </div>`;

const header = document.querySelector('[data-site-header]');
if (header) {
  header.innerHTML = `
    <div class="reading-progress" aria-hidden="true"></div>
    <div class="site-header">
      <div class="nav-shell">
        <a class="brand" href="${pageHref('index.html')}" aria-label="${text.brandLabel}">
          <span class="brand-mark brand-logo" aria-hidden="true">
            <img class="brand-logo-image" src="logo.webp" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <svg class="brand-logo-fallback" viewBox="0 0 46 30" fill="none" style="display:none"><path d="M4 15h12l6-8 6 8h14M4 15h12l6 8 6-8h14" stroke="#003082" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <span>Netherlands Train System</span>
        </a>
        <nav class="nav-links" id="mainNav" aria-label="${text.navLabel}">
          ${pages.map(([href, labels]) => `<a href="${pageHref(href)}" class="${currentPage === href ? 'active' : ''}">${labels[currentLang]}</a>`).join('')}
          ${languageSwitcherMarkup}
        </nav>
        <button class="menu-toggle" aria-expanded="false" aria-controls="mainNav" aria-label="${currentLang === 'en' ? 'Open menu' : 'เปิดเมนู'}"><span>☰</span></button>
      </div>
    </div>`;
}

const footer = document.querySelector('[data-site-footer]');
if (footer) {
  footer.innerHTML = `
    <footer class="site-footer footer-v3">
      <div class="footer-v3-accent" aria-hidden="true"></div>
      <div class="footer-v3-main">
        <section class="footer-v3-brand" aria-labelledby="footer-brand-title">
          <a class="footer-v3-brand-link" href="${pageHref('index.html')}" aria-label="${text.brandLabel}">
            <span class="footer-v3-logo-wrap"><img src="logo.webp" alt="" class="footer-v3-logo" onerror="this.style.display='none'"></span>
            <span id="footer-brand-title">Netherlands Train System</span>
          </a>
          <p class="footer-v3-summary">${text.footerSummary.replace('\n', '<br>')}</p>
          <div class="footer-route" aria-label="${text.footerRouteAria}">
            <div class="footer-route-stop footer-route-stop-atb"><span class="footer-route-dot"></span><div><strong>ATB</strong><small>${text.legacy}</small></div></div>
            <div class="footer-route-progress"><div class="footer-route-line" aria-hidden="true"><span></span></div><div class="footer-route-status"><strong>${text.transitionStatus}</strong><small>${text.transitionDetail}</small></div></div>
            <div class="footer-route-stop footer-route-stop-etcs"><span class="footer-route-dot"></span><div><strong>ETCS</strong><small>${text.target}</small></div></div>
          </div>
        </section>
        <nav class="footer-v3-nav" aria-label="${text.footerNavLabel}">
          <section class="footer-link-group"><h2>${text.signalling}</h2><a href="${pageHref('atb.html')}">ATB</a><a href="${pageHref('ertms.html')}">ERTMS / ETCS</a></section>
          <section class="footer-link-group"><h2>${text.transition}</h2><a href="${pageHref('status.html')}">${text.currentStatus}</a><a href="${pageHref('problems.html')}">${text.challenges}</a><a href="${pageHref('impact.html')}">${text.impact}</a></section>
          <section class="footer-link-group"><h2>${text.explore}</h2><a href="${pageHref('comparison.html')}">${text.comparison}</a><a href="${pageHref('other.html')}#sources">${text.references}</a><a href="${pageHref('index.html')}">${text.home}</a></section>
        </nav>
      </div>
      <div class="footer-v3-bottom">
        <div class="footer-v3-bottom-inner">
          <div class="footer-v3-meta"><strong>Railway Technical School</strong><span>Academic Railway Research Website · 2026</span><span>Designed &amp; developed by Thakrn Jaitham</span></div>
          <button class="footer-to-top" type="button" aria-label="${text.backTop}"><span>${text.backTop}</span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 15L12 9L18 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>
    </footer>`;
}

// Language dropdown behaviour.
const languageSwitcher = document.querySelector('.language-switcher');
const languageToggle = document.querySelector('.language-toggle');
if (languageSwitcher && languageToggle) {
  const closeLanguageMenu = () => {
    languageSwitcher.classList.remove('open');
    languageToggle.setAttribute('aria-expanded', 'false');
  };

  languageToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = languageSwitcher.classList.toggle('open');
    languageToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('[data-lang-option]').forEach((option) => {
    option.addEventListener('click', () => {
      const nextLanguage = option.dataset.langOption;
      localStorage.setItem('nts-language', nextLanguage);
      const nextUrl = new URL(window.location.href);
      if (nextLanguage === 'en') nextUrl.searchParams.set('lang', 'en');
      else nextUrl.searchParams.delete('lang');
      window.location.href = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    });
  });

  document.addEventListener('click', (event) => {
    if (!languageSwitcher.contains(event.target)) closeLanguageMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLanguageMenu();
  });
}

// Load manually written English content only when English is active.
const translationReady = new Promise((resolve) => {
  if (currentLang !== 'en') {
    resolve();
    return;
  }
  if (typeof window.applyEnglishContent === 'function') {
    window.applyEnglishContent(currentPage);
    resolve();
    return;
  }
  const translationScript = document.createElement('script');
  translationScript.src = 'translations-en.js';
  translationScript.onload = () => {
    if (typeof window.applyEnglishContent === 'function') window.applyEnglishContent(currentPage);
    resolve();
  };
  translationScript.onerror = resolve;
  document.head.appendChild(translationScript);
});

translationReady.then(() => {
  // Reapply after the shared English translator updates the page hero.
  applyChapterUpdateLabel();

  // Centralise source references in other.html.
  const referenceTargets = {
    'atb.html': 'ref-atb',
    'ertms.html': 'ref-ertms',
    'status.html': 'ref-status',
    'problems.html': 'ref-problems',
    'comparison.html': 'ref-comparison',
    'impact.html': 'ref-impact'
  };

  if (currentPage !== 'other.html' && referenceTargets[currentPage]) {
    const oldSourcesSection = document.getElementById('sources');
    if (oldSourcesSection) oldSourcesSection.remove();

    const oldSourcesNav = document.querySelector('.aside a[href="#sources"]');
    if (oldSourcesNav) {
      oldSourcesNav.href = `${pageHref('other.html')}#${referenceTargets[currentPage]}`;
      oldSourcesNav.textContent = text.sourceLink;
      oldSourcesNav.setAttribute('aria-label', text.sourceAria);
    }
  }

  // Keep English navigation in English when following internal HTML links.
  if (currentLang === 'en') {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(href) || href.includes('lang=en')) return;
      const match = href.match(/^([^#?]+\.html)(\?[^#]*)?(#.*)?$/i);
      if (!match) return;
      const base = match[1];
      const existingQuery = match[2] || '';
      const hash = match[3] || '';
      const query = existingQuery ? `${existingQuery}&lang=en` : '?lang=en';
      link.setAttribute('href', `${base}${query}${hash}`);
    });
  }

  // Homepage history formatting and historical images.
  if (currentPage === 'index.html') {
    if (!document.querySelector('link[href="history-fix.css"]')) {
      const historyFixStylesheet = document.createElement('link');
      historyFixStylesheet.rel = 'stylesheet';
      historyFixStylesheet.href = 'history-fix.css';
      document.head.appendChild(historyFixStylesheet);
    }

    document.querySelectorAll('#ns-history p').forEach((paragraph) => {
      paragraph.style.textIndent = currentLang === 'en' ? '2em' : '5em';
    });

    const historyImages = {
      '.visual-1800': '1800s.webp',
      '.visual-1837': '1837.webp',
      '.visual-1900': '1900s.webp',
      '.visual-1937': '1937.webp',
      '.visual-1960': '1960s.webp',
      '.visual-1995': '1995.webp',
      '.visual-2000': '2000s.webp',
      '.visual-now': 'now.webp'
    };

    Object.entries(historyImages).forEach(([selector, src]) => {
      const visual = document.querySelector(selector);
      if (!visual) return;
      visual.style.backgroundImage = `url("${src}")`;
      visual.style.backgroundSize = 'cover';
      visual.style.backgroundPosition = 'center';
      visual.style.backgroundRepeat = 'no-repeat';
      const yearLabel = visual.querySelector('.visual-year');
      if (yearLabel) yearLabel.hidden = true;
    });
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('span').textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Footer route animation.
  const footerRoute = document.querySelector('.footer-route');
  if (footerRoute) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      footerRoute.classList.add('is-active', 'is-settled');
    } else {
      const footerRouteObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          footerRoute.classList.add('is-active');
          window.setTimeout(() => footerRoute.classList.add('is-settled'), 1450);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.45 });
      footerRouteObserver.observe(footerRoute);
    }
  }

  const footerTopButton = document.querySelector('.footer-to-top');
  if (footerTopButton) {
    footerTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const progress = document.querySelector('.reading-progress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const siteHeader = document.querySelector('.site-header');
  const updateHeaderState = () => {
    if (!siteHeader) return;
    siteHeader.classList.toggle('scrolled', window.scrollY > 32);
  };
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  const historyTimeline = document.getElementById('historyTimeline');
  const historyLineFill = document.getElementById('historyLineFill');
  if (historyTimeline && historyLineFill) {
    const updateHistoryLine = () => {
      const rect = historyTimeline.getBoundingClientRect();
      const viewportMiddle = window.innerHeight * 0.58;
      const travelled = viewportMiddle - rect.top;
      const ratio = Math.max(0, Math.min(1, travelled / rect.height));
      historyLineFill.style.height = `${ratio * 100}%`;
    };
    window.addEventListener('scroll', updateHistoryLine, { passive: true });
    window.addEventListener('resize', updateHistoryLine);
    updateHistoryLine();
  }
});