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
    <footer class="site-footer site-footer-simple">
      <div class="footer-simple-inner">
        <p>&copy; 2026 Railway Technical School.<br>Developed by Thakrn Jaitham.</p>
      </div>
    </footer>`;
}

// Homepage history paragraphs: academic-style first-line indentation.
if (document.body.dataset.page === 'index.html') {
  document.querySelectorAll('#ns-history .history-copy p').forEach((paragraph) => {
    paragraph.style.textIndent = '5em';
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
