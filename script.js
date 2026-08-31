(() => {
  if (!document.querySelector('link[href^="glossary-links.css"]')) {
    const glossaryStyles = document.createElement('link');
    glossaryStyles.rel = 'stylesheet';
    glossaryStyles.href = 'glossary-links.css?v=20260830-1';
    document.head.appendChild(glossaryStyles);
  }
  if (!document.querySelector('script[src^="glossary-links.js"]')) {
    const glossaryScript = document.createElement('script');
    glossaryScript.src = 'glossary-links.js?v=20260830-1';
    glossaryScript.async = true;
    document.head.appendChild(glossaryScript);
  }
})();

document.documentElement.classList.add('js', 'motion-ready');

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
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

localStorage.setItem('nts-language', currentLang);
document.documentElement.lang = currentLang;
document.body.dataset.lang = currentLang;

const chapterNumbers = {
  'atb.html': '01',
  'ertms.html': '02',
  'status.html': '03.1',
  'problems.html': '03.2',
  'comparison.html': '04.1',
  'impact.html': '04.2',
  'summary.html': '05'
};

const chapterUpdateDates = {
  'atb.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' },
  'ertms.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' },
  'status.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' },
  'problems.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' },
  'comparison.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' },
  'impact.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' },
  'summary.html': { th: 'อัปเดตล่าสุด 31 ส.ค. 2026', en: 'Updated 31 Aug 2026' }
};

const applyChapterUpdateLabel = () => {
  const chapter = chapterNumbers[currentPage];
  const update = chapterUpdateDates[currentPage];
  if (!chapter || !update) return;

  const eyebrow = document.querySelector('.page-hero .eyebrow');
  if (!eyebrow) return;

  const lang = document.documentElement.lang === 'en' || document.body.dataset.lang === 'en' ? 'en' : 'th';
  const prefix = lang === 'en' ? 'Chapter' : 'บทที่';
  const expected = `${prefix} ${chapter} • ${update[lang]}`;
  if (eyebrow.textContent.trim() === expected) return;

  let dot = eyebrow.querySelector('.eyebrow-dot');
  if (!dot) {
    dot = document.createElement('span');
    dot.className = 'eyebrow-dot';
  }
  eyebrow.replaceChildren(dot, document.createTextNode(` ${expected}`));
};

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
    transitionDetail: '≈25 กม. / 419 กม. ของ Tranche 1 เข้าสู่งานภาคสนาม',
    signalling: 'ระบบอาณัติสัญญาณ',
    transition: 'การเปลี่ยนผ่าน',
    explore: 'สำรวจเพิ่มเติม',
    currentStatus: 'สถานะปัจจุบัน',
    challenges: 'ปัญหาและความท้าทาย',
    impact: 'ผลกระทบ',
    comparison: 'เปรียบเทียบประเทศ',
    references: 'คำศัพท์และแหล่งอ้างอิง',
    home: 'หน้าแรก',
    backTop: 'กลับด้านบน',
    footerNavLabel: 'เมนูท้ายเว็บไซต์',
    sourceLink: 'แหล่งอ้างอิง',
    sourceAria: 'เปิดแหล่งอ้างอิงของหัวข้อนี้ในหน้าอื่น ๆ',
    academicSite: 'เว็บไซต์งานวิชาการด้านระบบราง · 2026',
    designedBy: 'ออกแบบและพัฒนาโดย Thakarn Jaitham'
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
    comparison: 'Country comparison',
    references: 'Glossary and references',
    home: 'Home',
    backTop: 'Back to top',
    footerNavLabel: 'Footer navigation',
    sourceLink: 'References',
    sourceAria: 'Open the references for this topic in the More page',
    academicSite: 'Academic Railway Research Website · 2026',
    designedBy: 'Designed & developed by Thakarn Jaitham'
  }
}[currentLang];

const pageHref = (page) => currentLang === 'en' ? `${page}?lang=en` : page;
const sectionHref = (page, hash) => `${pageHref(page)}${hash || ''}`;

const navSections = {
  'index.html': [['#ns-history', { th: 'ประวัติ NS และรถไฟเนเธอร์แลนด์', en: 'NS & Dutch railway history' }]],
  'atb.html': [['#what', { th: 'ATB คืออะไร', en: 'What is ATB?' }], ['#history', { th: 'ประวัติ ATB', en: 'History of ATB' }], ['#working', { th: 'หลักการทำงาน', en: 'How ATB works' }], ['other.html#ref-atb', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'ertms.html': [['#what', { th: 'ERTMS/ETCS คืออะไร', en: 'What is ERTMS/ETCS?' }], ['#history', { th: 'ประวัติและลำดับเหตุการณ์', en: 'History and timeline' }], ['#working', { th: 'หลักการทำงาน', en: 'How ERTMS/ETCS works' }], ['#netherlands', { th: 'แนวทางของเนเธอร์แลนด์', en: 'Dutch approach' }], ['other.html#ref-ertms', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'status.html': [['#overview', { th: 'ภาพรวมปี 2026', en: '2026 overview' }], ['#timeline', { th: 'ลำดับการเปลี่ยนระบบ', en: 'Migration timeline' }], ['#decision', { th: 'จุดเปลี่ยนสำคัญ', en: 'Key decisions' }], ['#tranche1', { th: 'แผน Tranche 1', en: 'Tranche 1' }], ['#latest', { th: 'ความคืบหน้าล่าสุด', en: 'Latest progress' }], ['#systems', { th: 'ระบบที่ต้องเปลี่ยนพร้อมกัน', en: 'Systems changing together' }], ['#future', { th: 'หลังปี 2026', en: 'After 2026' }], ['other.html#ref-status', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'problems.html': [['#overview', { th: 'ภาพรวมปัญหา', en: 'Overview' }], ['#delay', { th: 'สาเหตุที่ล่าช้า', en: 'Why it is delayed' }], ['#cost', { th: 'ผลกระทบต่อต้นทุน', en: 'Cost impact' }], ['#dual', { th: 'การใช้ ATB และ ERTMS ร่วมกัน', en: 'ATB and ERTMS together' }], ['#reliability', { th: 'ความน่าเชื่อถือของระบบ', en: 'System reliability' }], ['#freight', { th: 'ผู้ประกอบการขนส่งสินค้า', en: 'Freight operators' }], ['#people-tech', { th: 'บุคลากรและระบบดิจิทัล', en: 'People and digital systems' }], ['other.html#ref-problems', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'comparison.html': [['#overview', { th: 'ภาพรวมปี 2026', en: '2026 overview' }], ['#timeline', { th: 'ลำดับเหตุการณ์ อดีต–ปัจจุบัน', en: 'Historical timeline' }], ['#table', { th: 'ตารางเปรียบเทียบ', en: 'Comparison table' }], ['#lessons', { th: 'บทเรียนจากประเทศเปรียบเทียบ', en: 'Lessons from the comparison' }], ['#border', { th: 'ประเด็นข้ามพรมแดน', en: 'Cross-border issues' }], ['other.html#ref-comparison', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'impact.html': [['#effects', { th: 'ภาพรวมผลกระทบ', en: 'Impact overview' }], ['#retrofit', { th: 'การติดตั้ง ETCS บนรถรุ่นเดิม', en: 'Legacy fleet retrofit' }], ['#virm-case', { th: 'กรณีศึกษา VIRM', en: 'VIRM case study' }], ['#fleet-compare', { th: 'รถรุ่นเดิมกับรถรุ่นใหม่', en: 'Legacy vs newer fleets' }], ['#longdistance', { th: 'รถไฟทางไกล', en: 'Long-distance services' }], ['#balance', { th: 'ช่วงเปลี่ยนผ่านกับระยะยาว', en: 'Transition vs long term' }], ['other.html#ref-impact', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'summary.html': [['#overview', { th: 'ภาพรวม', en: 'Overview' }], ['#findings', { th: 'ข้อค้นพบสำคัญ', en: 'Key findings' }], ['#status', { th: 'สถานะปี 2026', en: '2026 status' }], ['#comparison', { th: 'บทเรียนจากประเทศเปรียบเทียบ', en: 'International lessons' }], ['#impact', { th: 'ผลต่อรถไฟทางไกล', en: 'Long-distance impact' }], ['#conclusion', { th: 'บทสรุปสุดท้าย', en: 'Final conclusion' }], ['other.html#sources', { th: 'แหล่งอ้างอิง', en: 'References' }]],
  'other.html': [['#glossary', { th: 'คำศัพท์สำคัญ', en: 'Glossary' }], ['#method', { th: 'วิธีใช้ข้อมูล', en: 'How sources are used' }], ['#sources', { th: 'คลังแหล่งอ้างอิง', en: 'Reference library' }]]
};

const navSubmenuHref = (page, target) => {
  if (target.startsWith('#')) return sectionHref(page, target);
  const [targetPage, hash = ''] = target.split('#');
  return sectionHref(targetPage, hash ? `#${hash}` : '');
};

const buildNav = () => {
  const host = document.querySelector('[data-site-header]');
  if (!host) return;
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', text.navLabel);
  nav.innerHTML = `<a class="brand" href="${pageHref('index.html')}" aria-label="${text.brandLabel}">Netherlands Train System</a><div class="nav-links"></div><div class="lang-switch"><button type="button" data-lang="th">${text.thai}</button><button type="button" data-lang="en">${text.english}</button></div>`;
  const links = nav.querySelector('.nav-links');
  pages.forEach(([page, label]) => {
    const a = document.createElement('a'); a.href = pageHref(page); a.textContent = label[currentLang];
    if (page === currentPage) a.classList.add('active'); links.appendChild(a);
  });
  nav.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
    const lang = btn.dataset.lang; localStorage.setItem('nts-language', lang);
    const url = new URL(window.location.href); if (lang === 'en') url.searchParams.set('lang','en'); else url.searchParams.delete('lang'); window.location.href = url.toString();
  }));
  host.replaceChildren(nav);
};

const buildFooter = () => {
  const host = document.querySelector('[data-site-footer]');
  if (!host) return;
  const footer = document.createElement('footer'); footer.className = 'site-footer';
  footer.innerHTML = `<div class="footer-inner"><div><strong>Netherlands Train System</strong><p>${text.footerSummary.replace('\n','<br>')}</p></div><nav aria-label="${text.footerNavLabel}"></nav><div><span>${text.academicSite}</span><br><span>${text.designedBy}</span></div></div>`;
  const n = footer.querySelector('nav'); pages.forEach(([page,label]) => { const a=document.createElement('a'); a.href=pageHref(page); a.textContent=label[currentLang]; n.appendChild(a); });
  host.replaceChildren(footer);
};

const initReveal = () => {
  const items = document.querySelectorAll('.reveal');
  if (reduceMotion) { items.forEach(el => el.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: 0.08 });
  items.forEach(el => observer.observe(el));
};

buildNav();
buildFooter();
applyChapterUpdateLabel();
initReveal();
window.addEventListener('load', applyChapterUpdateLabel);
setTimeout(applyChapterUpdateLabel, 0);
