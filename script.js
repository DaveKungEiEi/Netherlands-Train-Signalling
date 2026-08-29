const pages = [
  ['index.html','หน้าแรก'],
  ['atb.html','ATB'],
  ['ertms.html','ERTMS/ETCS'],
  ['status.html','สถานะ'],
  ['problems.html','ปัญหา'],
  ['comparison.html','เปรียบเทียบ'],
  ['impact.html','ผลกระทบ'],
  ['other.html','อื่น ๆ']
];

// Load the shared footer style on every page.
if (!document.querySelector('link[href="footer-style.css"]')) {
  const footerStylesheet = document.createElement('link');
  footerStylesheet.rel = 'stylesheet';
  footerStylesheet.href = 'footer-style.css';
  document.head.appendChild(footerStylesheet);
}

const header = document.querySelector('[data-site-header]');
if (header) {
  const current = document.body.dataset.page || 'index.html';
  header.innerHTML = `
    <div class="reading-progress" aria-hidden="true"></div>
    <div class="site-header">
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="กลับไปหน้าแรก Netherlands Train System">
          <span class="brand-mark brand-logo" aria-hidden="true">
            <img class="brand-logo-image" src="logo.webp" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <svg class="brand-logo-fallback" viewBox="0 0 46 30" fill="none" style="display:none"><path d="M4 15h12l6-8 6 8h14M4 15h12l6 8 6-8h14" stroke="#003082" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <span>Netherlands Train System</span>
        </a>
        <nav class="nav-links" id="mainNav" aria-label="เมนูหลัก">
          ${pages.map(([href,label]) => `<a href="${href}" class="${current === href ? 'active' : ''}">${label}</a>`).join('')}
        </nav>
        <button class="menu-toggle" aria-expanded="false" aria-controls="mainNav" aria-label="เปิดเมนู"><span>☰</span></button>
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
          <a class="footer-v3-brand-link" href="index.html" aria-label="กลับไปหน้าแรก Netherlands Train System">
            <span class="footer-v3-logo-wrap">
              <img src="logo.webp" alt="" class="footer-v3-logo" onerror="this.style.display='none'">
            </span>
            <span id="footer-brand-title">Netherlands Train System</span>
          </a>

          <p class="footer-v3-summary">
            การศึกษาเส้นทางการเปลี่ยนผ่านระบบอาณัติสัญญาณรถไฟทางไกลของเนเธอร์แลนด์
            จาก ATB สู่ ERTMS/ETCS และผลต่อระบบรถไฟในยุคดิจิทัล
          </p>

          <div class="footer-route" aria-label="เส้นทางการเปลี่ยนผ่านจาก ATB สู่ ETCS">
            <div class="footer-route-stop footer-route-stop-atb">
              <span class="footer-route-dot"></span>
              <div><strong>ATB</strong><small>Legacy system</small></div>
            </div>
            <div class="footer-route-line" aria-hidden="true"><span></span></div>
            <div class="footer-route-stop footer-route-stop-etcs">
              <span class="footer-route-dot"></span>
              <div><strong>ETCS</strong><small>Digital future</small></div>
            </div>
          </div>
        </section>

        <nav class="footer-v3-nav" aria-label="เมนูท้ายเว็บไซต์">
          <section class="footer-link-group">
            <h2>ระบบอาณัติสัญญาณ</h2>
            <a href="atb.html">ATB</a>
            <a href="ertms.html">ERTMS / ETCS</a>
          </section>

          <section class="footer-link-group">
            <h2>การเปลี่ยนผ่าน</h2>
            <a href="status.html">สถานะปัจจุบัน</a>
            <a href="problems.html">ปัญหาและความท้าทาย</a>
            <a href="impact.html">ผลกระทบ</a>
          </section>

          <section class="footer-link-group">
            <h2>สำรวจเพิ่มเติม</h2>
            <a href="comparison.html">เปรียบเทียบประเทศเพื่อนบ้าน</a>
            <a href="other.html">ข้อมูลอื่น ๆ</a>
            <a href="index.html">หน้าแรก</a>
          </section>
        </nav>
      </div>

      <div class="footer-v3-bottom">
        <div class="footer-v3-bottom-inner">
          <div class="footer-v3-meta">
            <strong>Railway Technical School</strong>
            <span>Academic Railway Research Website · 2026</span>
            <span>Designed &amp; developed by Thakrn Jaitham</span>
          </div>

          <button class="footer-to-top" type="button" aria-label="กลับขึ้นด้านบนของหน้า">
            <span>กลับด้านบน</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 15L12 9L18 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>`;
}

const footerTopButton = document.querySelector('.footer-to-top');
if (footerTopButton) {
  footerTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Homepage history section: academic-style first-line indentation for every paragraph.
if (document.body.dataset.page === 'index.html') {
  const historyFixStylesheet = document.createElement('link');
  historyFixStylesheet.rel = 'stylesheet';
  historyFixStylesheet.href = 'history-fix.css';
  document.head.appendChild(historyFixStylesheet);

  document.querySelectorAll('#ns-history p').forEach((paragraph) => {
    paragraph.style.textIndent = '5em';
  });

  // Use the supplied historical photographs in each timeline image slot.
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

// Editorial v2: subtle nav state and history timeline progress.
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
