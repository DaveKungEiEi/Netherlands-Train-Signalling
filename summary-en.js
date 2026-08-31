(() => {
  if (document.body.dataset.page !== 'summary.html') return;

  if (!document.querySelector('link[href="summary-style.css"]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'summary-style.css';
    document.head.appendChild(stylesheet);
  }

  const lang = document.documentElement.lang === 'en' ? 'en' : 'th';

  const updateGermanySummary = () => {
    const section = document.getElementById('comparison');
    if (!section) return;
    const germany = Array.from(section.querySelectorAll('.country-card')).find(card => /เยอรมนี|Germany/.test(card.querySelector('h3')?.textContent || ''));
    if (!germany) return;
    const metric = germany.querySelector('.metric');
    const p = germany.querySelector('p');
    if (metric) metric.textContent = lang === 'en' ? '683 km · end-2025 | ~750 km planned to 2031' : '683 km · สิ้นปี 2025 | แผน ~750 km ถึงปี 2031';
    if (p) p.textContent = lang === 'en'
      ? 'DB InfraGO reported 683 km of ETCS-equipped route at the end of 2025. In July 2026 it published a concrete portfolio for 12 routes totalling about 750 km to move to ETCS Level 2 without signals (L2oS) by the end of 2031, with PZB/LZB withdrawal coordinated with those migrations.'
      : 'DB InfraGO รายงานเส้นทางที่ติดตั้ง ETCS 683 km ณ สิ้นปี 2025 และในเดือนกรกฎาคม 2026 เผยแพร่แผนที่เป็นรูปธรรมสำหรับ 12 เส้นทางรวมราว 750 km เพื่อเปลี่ยนเป็น ETCS Level 2 without signals (L2oS) ภายในสิ้นปี 2031 พร้อมทยอยยุติ PZB/LZB ตามการเปลี่ยนระบบ';
  };

  const run = () => window.setTimeout(updateGermanySummary, 0);
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run, { once: true });
})();
