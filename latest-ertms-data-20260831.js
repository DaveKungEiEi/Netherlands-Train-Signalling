(() => {
  const PAGE = document.body?.dataset.page || '';
  const lang = () => (document.documentElement.lang === 'en' || document.body?.dataset.lang === 'en' ? 'en' : 'th');

  const chapterNumbers = {
    'atb.html': '01',
    'ertms.html': '02',
    'status.html': '03.1',
    'problems.html': '03.2',
    'comparison.html': '04.1',
    'impact.html': '04.2',
    'summary.html': '05'
  };

  const setChapterDate = () => {
    const chapter = chapterNumbers[PAGE];
    const eyebrow = document.querySelector('.page-hero .eyebrow');
    if (!chapter || !eyebrow) return;
    const isEn = lang() === 'en';
    const text = `${isEn ? 'Chapter' : 'บทที่'} ${chapter} • ${isEn ? 'Updated 31 Aug 2026' : 'อัปเดตล่าสุด 31 ส.ค. 2026'}`;
    let dot = eyebrow.querySelector('.eyebrow-dot');
    if (!dot) {
      dot = document.createElement('span');
      dot.className = 'eyebrow-dot';
    }
    if (eyebrow.textContent.trim() !== text) eyebrow.replaceChildren(dot, document.createTextNode(` ${text}`));
  };

  const findCountryCard = (section, pattern) => Array.from(section?.querySelectorAll('.country-card') || [])
    .find((card) => pattern.test(card.querySelector('h3')?.textContent || ''));

  const upsertPanel = (parent, id, html, className = 'callout') => {
    if (!parent) return null;
    let panel = parent.querySelector(`#${id}`);
    if (!panel) {
      panel = document.createElement('div');
      panel.id = id;
      panel.className = className;
      parent.appendChild(panel);
    }
    panel.innerHTML = html;
    return panel;
  };

  const updateStatus = () => {
    if (PAGE !== 'status.html') return;
    const isEn = lang() === 'en';
    const latest = document.getElementById('latest') || document.getElementById('tranche1') || document.querySelector('.article');

    document.querySelectorAll('#latest p, #tranche1 p, #future p, #latest .callout, #tranche1 .callout').forEach((el) => {
      const t = el.textContent || '';
      const staleTh = /ยังไม่มี.{0,50}(วัน|กำหนด|commission|เปิดใช้)/i.test(t);
      const staleEn = /(no fixed|no confirmed).{0,60}(date|commission|withdrawal)/i.test(t);
      if (!staleTh && !staleEn) return;
      el.textContent = isEn
        ? 'VGR24 now provides reporting milestones for the first Tranche 1 commercial operations. These are planning milestones based on the current programme assumptions; the uncertainty ranges are still to be added, so they should not be read as final guaranteed commissioning dates.'
        : 'VGR24 ระบุกรอบปีของหมุดหมายการเริ่มเดินรถเชิงพาณิชย์ใน Tranche 1 แล้ว แต่เป็นหมุดหมายตามแผนและสมมติฐานปัจจุบัน โดยช่วงความไม่แน่นอน (bandwidth) ยังจะระบุเพิ่มเติม จึงไม่ควรตีความว่าเป็นวันเปิดใช้ที่ยืนยันตายตัว';
    });

    upsertPanel(latest, 'status-20260831-update', isEn ? `
      <strong>Latest verified update · 31 Aug 2026</strong>
      <p><b>Field installation is visibly under way.</b> During the 3–7 August possession on Leeuwarden–Harlingen Haven, ProRail reported that 82 new Eurobalises were installed, building on the first works in April 2026.</p>
      <p><b>VGR24 reporting milestones:</b> Harlingen Haven–Leeuwarden 2028/2029 · Vlissingen–Lewedorp 2030 · Lewedorp–Roosendaal 2030/2031 · Belgian border–Lage Zwaluwe 2031 · Lage Zwaluwe–Kijfhoek 2031/2032 · Leeuwarden yard/station area 2033.</p>
      <p><b>Important:</b> VGR24 states that bandwidths will be added when available. These years are therefore current reporting milestones, not fixed guaranteed commissioning dates.</p>
      <p><a href="https://www.prorail.nl/nieuws/weer-een-stap-gezet-naar-ertms-rijden" target="_blank" rel="noopener">ProRail — 82 balises installed ↗</a> · <a href="https://www.tweedekamer.nl/downloads/document?id=2026D16939" target="_blank" rel="noopener">VGR24 — official progress report ↗</a></p>` : `
      <strong>อัปเดตล่าสุดที่ตรวจสอบแล้ว · 31 ส.ค. 2026</strong>
      <p><b>การติดตั้งภาคสนามเดินหน้าชัดเจนขึ้น:</b> ช่วงปิดทาง 3–7 สิงหาคม บน Leeuwarden–Harlingen Haven ทาง ProRail รายงานว่าติดตั้ง Eurobalise ใหม่ 82 จุด ต่อเนื่องจากงานชุดแรกเมื่อเดือนเมษายน 2026</p>
      <p><b>หมุดหมายตาม VGR24:</b> Harlingen Haven–Leeuwarden 2028/2029 · Vlissingen–Lewedorp 2030 · Lewedorp–Roosendaal 2030/2031 · ชายแดนเบลเยียม–Lage Zwaluwe 2031 · Lage Zwaluwe–Kijfhoek 2031/2032 · เขตสถานี/ย่าน Leeuwarden 2033</p>
      <p><b>ข้อควรระวัง:</b> VGR24 ระบุว่าจะเติมช่วงความไม่แน่นอนเมื่อข้อมูลพร้อม ดังนั้นปีเหล่านี้เป็นหมุดหมายการรายงานตามแผนปัจจุบัน ไม่ใช่วัน commissioning ที่รับรองตายตัว</p>
      <p><a href="https://www.prorail.nl/nieuws/weer-een-stap-gezet-naar-ertms-rijden" target="_blank" rel="noopener">ProRail — ติดตั้ง 82 balises ↗</a> · <a href="https://www.tweedekamer.nl/downloads/document?id=2026D16939" target="_blank" rel="noopener">VGR24 — รายงานทางการ ↗</a></p>`);
  };

  const updateComparison = () => {
    if (PAGE !== 'comparison.html') return;
    const isEn = lang() === 'en';
    const overview = document.getElementById('overview');
    if (!overview) return;

    const belgium = findCountryCard(overview, /เบลเยียม|Belgium/i);
    if (belgium) {
      const metric = belgium.querySelector('.metric');
      const p = belgium.querySelector('p');
      if (metric) metric.textContent = '100% ETCS · 6,399 track-km';
      if (p) p.textContent = isEn
        ? 'Belgium completed the ETCS Masterplan on 14 December 2025, reaching 100% ETCS coverage of the main network. The Masterplan scope totals 6,399 track-km; track-km counts each individual track and is not directly comparable with German route-km.'
        : 'เบลเยียมบรรลุ ETCS Masterplan เมื่อ 14 ธันวาคม 2025 ทำให้โครงข่ายหลักครอบคลุม ETCS 100% โดยขอบเขต Masterplan รวม 6,399 track-km ซึ่งนับความยาวรางแต่ละทางแยกกัน จึงไม่ควรเทียบตรง ๆ กับ route-km ของเยอรมนี';
    }

    const germany = findCountryCard(overview, /เยอรมนี|Germany/i);
    if (germany) {
      const chip = germany.querySelector('.comparison-status-chip');
      const metric = germany.querySelector('.metric');
      const p = germany.querySelector('p');
      if (chip) chip.textContent = isEn ? 'Concrete L2oS plan through 2031' : 'มีแผน L2oS ที่เป็นรูปธรรมถึงปี 2031';
      if (metric) metric.textContent = isEn ? '683 km · end-2025 | ~750 km planned to 2031' : '683 km · สิ้นปี 2025 | แผน ~750 km ถึงปี 2031';
      if (p) p.textContent = isEn
        ? 'DB InfraGO reported 683 route-km equipped with ETCS at the end of 2025. On 2 July 2026 it published an updated portfolio covering 12 routes, about 750 km in total, for ETCS Level 2 without signals (L2oS) by the end of 2031. PZB/LZB withdrawal is planned in step with selected migrations.'
        : 'DB InfraGO รายงานว่า ณ สิ้นปี 2025 มีเส้นทางติดตั้ง ETCS 683 route-km และเมื่อ 2 กรกฎาคม 2026 ได้เผยแพร่แผนใหม่สำหรับ 12 เส้นทาง รวมราว 750 km เพื่อเปลี่ยนเป็น ETCS Level 2 without signals (L2oS) ภายในสิ้นปี 2031 พร้อมทยอยปิด PZB/LZB ตามการเปลี่ยนระบบของเส้นทางที่กำหนด';
    }

    const table = document.getElementById('table');
    if (table) {
      const headers = Array.from(table.querySelectorAll('thead th'));
      const beIndex = headers.findIndex((th) => /เบลเยียม|Belgium/i.test(th.textContent));
      const deIndex = headers.findIndex((th) => /เยอรมนี|Germany/i.test(th.textContent));
      Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
        const label = row.children[0]?.textContent || '';
        if (/2026|สถานะปี|Current status/i.test(label)) {
          if (beIndex > 0 && row.children[beIndex]) row.children[beIndex].textContent = isEn
            ? '100% ETCS since 14 Dec 2025; Masterplan scope 6,399 track-km'
            : 'ETCS 100% ตั้งแต่ 14 ธ.ค. 2025; ขอบเขต Masterplan 6,399 track-km';
          if (deIndex > 0 && row.children[deIndex]) row.children[deIndex].textContent = isEn
            ? '683 route-km at end-2025; July 2026 plan covers 12 L2oS routes totalling about 750 km by end-2031'
            : '683 route-km ณ สิ้นปี 2025; แผน ก.ค. 2026 ครอบคลุม 12 เส้นทาง L2oS รวมราว 750 km ภายในสิ้นปี 2031';
        }
        if (/Legacy-system transition|การเลิกใช้ระบบเดิม/i.test(label) && deIndex > 0 && row.children[deIndex]) {
          row.children[deIndex].textContent = isEn
            ? 'PZB/LZB are planned to be decommissioned with selected L2oS commissioning; compatible ETCS onboard equipment will be required'
            : 'PZB/LZB จะทยอยปิดตามการเปิดใช้ L2oS ในเส้นทางที่กำหนด และรถต้องมี ETCS onboard ที่เข้ากันได้';
        }
      });
    }

    const currentEra = document.querySelector('#timeline .comparison-era-current');
    const germanyEra = currentEra ? Array.from(currentEra.querySelectorAll('.comparison-era-country')).find((card) => card.querySelector('.de-code') || /เยอรมนี|Germany/i.test(card.textContent)) : null;
    if (germanyEra) {
      const strong = germanyEra.querySelector('strong');
      const p = germanyEra.querySelector('p');
      if (strong) strong.textContent = isEn ? '683 km in service + L2oS portfolio to 2031' : '683 km ใช้งานแล้ว + แผน L2oS ถึงปี 2031';
      if (p) p.textContent = isEn
        ? 'The July 2026 portfolio covers 12 routes totalling about 750 km for L2oS by December 2031, with planned Class-B PZB/LZB decommissioning on affected sections.'
        : 'แผนเดือนกรกฎาคม 2026 ครอบคลุม 12 เส้นทางรวมราว 750 km สำหรับ L2oS ภายในเดือนธันวาคม 2031 พร้อมแผนทยอยปิดระบบเดิม PZB/LZB บนช่วงทางที่เกี่ยวข้อง';
    }

    upsertPanel(overview, 'comparison-20260831-sources', isEn ? `
      <strong>Latest official checks · 31 Aug 2026</strong>
      <a href="https://www.era.europa.eu/content/ertms-deployment-europe-infrabels-success-story" target="_blank" rel="noopener">ERA — Belgium reaches 100% ETCS</a>
      <a href="https://infrabel.be/sites/default/files/generated/files/report/INFRABEL_Annual%20Report%202024_EN.pdf" target="_blank" rel="noopener">Infrabel — Masterplan total 6,399 track-km</a>
      <a href="https://www.dbinfrago.com/web/schienennetz/etcs/etcs-migrationsstrategie-11089586" target="_blank" rel="noopener">DB InfraGO — ETCS migration strategy</a>
      <a href="https://www.dbinfrago.com/web/aktuelles/kund-inneninformationen/kund-inneninformationen/2026-KW27-Inbtn-ETCS-LvL-2-o-S-2031-13960542" target="_blank" rel="noopener">DB InfraGO — L2oS commissioning / PZB withdrawal</a>
      <a href="https://www.bav.admin.ch/en/european-train-control-system-etcs" target="_blank" rel="noopener">Swiss FOT — ETCS status</a>` : `
      <strong>แหล่งทางการที่ตรวจสอบล่าสุด · 31 ส.ค. 2026</strong>
      <a href="https://www.era.europa.eu/content/ertms-deployment-europe-infrabels-success-story" target="_blank" rel="noopener">ERA — เบลเยียม ETCS 100%</a>
      <a href="https://infrabel.be/sites/default/files/generated/files/report/INFRABEL_Annual%20Report%202024_EN.pdf" target="_blank" rel="noopener">Infrabel — ขอบเขต Masterplan 6,399 track-km</a>
      <a href="https://www.dbinfrago.com/web/schienennetz/etcs/etcs-migrationsstrategie-11089586" target="_blank" rel="noopener">DB InfraGO — ETCS migration strategy</a>
      <a href="https://www.dbinfrago.com/web/aktuelles/kund-inneninformationen/kund-inneninformationen/2026-KW27-Inbtn-ETCS-LvL-2-o-S-2031-13960542" target="_blank" rel="noopener">DB InfraGO — L2oS / การปิด PZB</a>
      <a href="https://www.bav.admin.ch/en/european-train-control-system-etcs" target="_blank" rel="noopener">Swiss FOT — สถานะ ETCS</a>`, 'comparison-swiss-sources comparison-latest-sources');
  };

  const updateSummary = () => {
    if (PAGE !== 'summary.html') return;
    const isEn = lang() === 'en';
    const comparison = document.getElementById('comparison');
    const status = document.getElementById('status');

    const belgium = findCountryCard(comparison, /เบลเยียม|Belgium/i);
    if (belgium) {
      const metric = belgium.querySelector('.metric');
      const p = belgium.querySelector('p');
      if (metric) metric.textContent = '100% · 6,399 track-km';
      if (p && /6,400|6,399|Masterplan|ETCS/i.test(p.textContent)) p.textContent = isEn
        ? 'Belgium completed 100% ETCS coverage of the main network on 14 December 2025; the ETCS Masterplan scope totals 6,399 track-km.'
        : 'เบลเยียมติดตั้ง ETCS ครบ 100% ของโครงข่ายหลักเมื่อ 14 ธันวาคม 2025 โดยขอบเขต ETCS Masterplan รวม 6,399 track-km';
    }

    const germany = findCountryCard(comparison, /เยอรมนี|Germany/i);
    if (germany) {
      const metric = germany.querySelector('.metric');
      const p = germany.querySelector('p');
      if (metric) metric.textContent = isEn ? '683 km · end-2025 | ~750 km plan to 2031' : '683 km · สิ้นปี 2025 | แผน ~750 km ถึง 2031';
      if (p) p.textContent = isEn
        ? 'Germany had 683 route-km equipped with ETCS at the end of 2025. The July 2026 plan now identifies 12 routes totalling about 750 km for L2oS by the end of 2031, with PZB/LZB withdrawal linked to selected migrations.'
        : 'เยอรมนีมีเส้นทางติดตั้ง ETCS 683 route-km ณ สิ้นปี 2025 และแผนเดือนกรกฎาคม 2026 กำหนด 12 เส้นทางรวมราว 750 km สำหรับ L2oS ภายในสิ้นปี 2031 พร้อมทยอยปิด PZB/LZB ตามการเปลี่ยนระบบ';
    }

    upsertPanel(status, 'summary-nl-20260831-update', isEn ? `
      <strong>Netherlands planning update</strong>
      <p>VGR24 now gives reporting milestones for Tranche 1 commercial operation: Harlingen Haven–Leeuwarden 2028/2029, Vlissingen–Lewedorp 2030, Lewedorp–Roosendaal 2030/2031, Belgian border–Lage Zwaluwe 2031, Lage Zwaluwe–Kijfhoek 2031/2032 and Leeuwarden yard/station area 2033. These remain planning milestones rather than guaranteed fixed commissioning dates.</p>
      <p>ProRail also reported 82 new Eurobalises installed on Leeuwarden–Harlingen Haven during 3–7 August 2026.</p>` : `
      <strong>อัปเดตแผนเนเธอร์แลนด์</strong>
      <p>VGR24 ระบุหมุดหมายการเริ่มเดินรถเชิงพาณิชย์ของ Tranche 1 แล้ว ได้แก่ Harlingen Haven–Leeuwarden 2028/2029, Vlissingen–Lewedorp 2030, Lewedorp–Roosendaal 2030/2031, ชายแดนเบลเยียม–Lage Zwaluwe 2031, Lage Zwaluwe–Kijfhoek 2031/2032 และเขต Leeuwarden 2033 โดยยังเป็นหมุดหมายตามแผน ไม่ใช่วัน commissioning ที่รับรองตายตัว</p>
      <p>ProRail ยังรายงานการติดตั้ง Eurobalise ใหม่ 82 จุดบน Leeuwarden–Harlingen Haven ระหว่าง 3–7 สิงหาคม 2026</p>`);
  };

  const updateSources = () => {
    if (PAGE !== 'other.html') return;
    const isEn = lang() === 'en';
    const sources = document.getElementById('sources');
    if (!sources) return;
    let group = document.getElementById('ref-latest-20260831');
    if (!group) {
      group = document.createElement('section');
      group.id = 'ref-latest-20260831';
      group.className = 'reference-group';
      sources.appendChild(group);
    }
    const cards = [
      ['https://www.tweedekamer.nl/downloads/document?id=2026D16939', 'Netherlands — VGR24 ERTMS', isEn ? 'Official 24th progress report; Tranche 1 commercial-operation reporting milestones.' : 'รายงานความก้าวหน้าครั้งที่ 24 อย่างเป็นทางการ; หมุดหมายการเริ่มเดินรถของ Tranche 1'],
      ['https://www.prorail.nl/nieuws/weer-een-stap-gezet-naar-ertms-rijden', 'ProRail — Leeuwarden–Harlingen Haven', isEn ? '12 Aug 2026 update confirming 82 new Eurobalises installed during 3–7 Aug.' : 'ข่าว 12 ส.ค. 2026 ยืนยันการติดตั้ง Eurobalise ใหม่ 82 จุดระหว่าง 3–7 ส.ค.'],
      ['https://www.era.europa.eu/content/ertms-deployment-europe-infrabels-success-story', 'ERA — Belgium 100% ETCS', isEn ? 'ERA confirmation that Belgium completed ETCS deployment across 100% of the network.' : 'ERA ยืนยันว่าเบลเยียมติดตั้ง ETCS ครบ 100% ของโครงข่าย'],
      ['https://infrabel.be/sites/default/files/generated/files/report/INFRABEL_Annual%20Report%202024_EN.pdf', 'Infrabel — ETCS Masterplan', isEn ? 'Official Masterplan total of 6,399 track-km.' : 'แหล่งทางการสำหรับขอบเขต Masterplan รวม 6,399 track-km'],
      ['https://www.dbinfrago.com/web/schienennetz/etcs/etcs-migrationsstrategie-11089586', 'DB InfraGO — ETCS migration strategy', isEn ? 'Current L2oS planning portfolio through 2031; FAQ updated 19 Aug 2026.' : 'แผน L2oS ปัจจุบันถึงปี 2031; FAQ อัปเดต 19 ส.ค. 2026'],
      ['https://www.dbinfrago.com/web/aktuelles/kund-inneninformationen/kund-inneninformationen/2026-KW27-Inbtn-ETCS-LvL-2-o-S-2031-13960542', 'DB InfraGO — L2oS commissioning', isEn ? 'Official notice on L2oS commissioning and planned PZB withdrawal.' : 'ประกาศทางการเรื่องการเปิดใช้ L2oS และแผนปิด PZB'],
      ['https://www.bav.admin.ch/en/european-train-control-system-etcs', 'Swiss FOT — ETCS', isEn ? 'Official Swiss status: L1 Limited Supervision on lines with trackside signals and L2 on ten sections.' : 'สถานะทางการของสวิตเซอร์แลนด์: L1 Limited Supervision บนเส้นทางที่ใช้สัญญาณข้างทาง และ L2 บน 10 ช่วงทาง']
    ];
    group.innerHTML = `
      <div class="reference-group-head"><div><span class="reference-chapter">${isEn ? '31 AUG 2026' : '31 ส.ค. 2026'}</span><h3>${isEn ? 'Latest ETCS/ERTMS verification' : 'แหล่งตรวจสอบ ETCS/ERTMS ล่าสุด'}</h3></div><p class="reference-used-in">${isEn ? 'Used to update the Netherlands, Belgium, Germany and Switzerland comparison.' : 'ใช้สำหรับอัปเดตข้อมูลเปรียบเทียบเนเธอร์แลนด์ เบลเยียม เยอรมนี และสวิตเซอร์แลนด์'}</p></div>
      <div class="reference-list">${cards.map(([href, name, note]) => `<a class="reference-card" href="${href}" target="_blank" rel="noopener"><span><span class="reference-source-name">${name}</span><span class="reference-source-note">${note}</span></span><span class="reference-open" aria-hidden="true">↗</span></a>`).join('')}</div>`;
  };

  const apply = () => {
    setChapterDate();
    updateStatus();
    updateComparison();
    updateSummary();
    updateSources();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
  window.addEventListener('load', () => {
    apply();
    window.setTimeout(apply, 350);
    window.setTimeout(apply, 1200);
  }, { once: true });
})();
