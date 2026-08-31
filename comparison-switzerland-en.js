(() => {
  const applySwissEnglish = () => {
    if (document.documentElement.lang !== 'en' || document.body.dataset.page !== 'comparison.html') return;

    document.title = 'Netherlands × Belgium × Germany × Switzerland | Netherlands Train System';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Historical-to-2026 comparison of train protection and ERTMS/ETCS migration in the Netherlands, Belgium, Germany and Switzerland.');

    const heroTitle = document.querySelector('.page-hero h1');
    if (heroTitle) heroTitle.innerHTML = 'Netherlands <span style="color:#ae1c28">×</span> Belgium <span style="color:#ae1c28">×</span> Germany <span style="color:#ae1c28">×</span> Switzerland';
    const heroCopy = document.querySelector('.page-hero .hero-copy');
    if (heroCopy) heroCopy.textContent = 'All four countries use the European ERTMS/ETCS standard, but they started from different legacy systems and chose different migration paths. Switzerland is especially useful as an early interoperability example: ETCS Level 1 was rolled out across the standard-gauge network as a migration solution, while Level 2 is used where cab signalling brings clear operational benefits.';

    const overview = document.getElementById('overview');
    if (overview) {
      const heading = overview.querySelector('h2');
      if (heading) heading.textContent = 'Where the four countries stand today';
      const intro = overview.querySelector(':scope > p');
      if (intro) intro.innerHTML = 'Simply asking whether a country “has ETCS” hides major differences. Belgium completed ETCS installation across its main network in December 2025. The Netherlands is delivering its national programme in controlled <strong>Tranches</strong>. Germany is still expanding ETCS while renewing a very large network. Switzerland followed another path: SBB says its ETCS Level 1 rollout was completed in 2018, allowing the standard-gauge network to be operated without an additional national train-protection system, while ETCS Level 2 is used on selected routes.';

      const grid = overview.querySelector('.comparison-country-grid');
      if (grid && !grid.querySelector('.comparison-country-card-switzerland')) {
        grid.insertAdjacentHTML('beforeend', `
          <div class="country-card glass-card comparison-country-card comparison-country-card-switzerland">
            <div class="flag ch"></div>
            <span class="comparison-status-chip">Network-wide ETCS migration baseline</span>
            <h3>Switzerland</h3>
            <div class="metric">L1 rollout complete · 2018</div>
            <p>SBB states that ETCS Level 1 rollout was completed in 2018. Conventional routes with lineside signals use Level 1 Limited Supervision, while the Swiss Federal Office of Transport says Level 2 is used on ten routes or sections, including Bern–Olten and the Lötschberg, Gotthard and Ceneri base lines.</p>
          </div>`);
      }

      const photos = overview.querySelector('.comparison-photo-grid');
      if (photos) {
        photos.setAttribute('aria-label', 'Images illustrating ETCS status in the four countries');
        if (!photos.querySelector('[data-slot="comparison-switzerland.webp"]')) {
          photos.insertAdjacentHTML('beforeend', `
            <figure class="comparison-media-placeholder" data-slot="comparison-switzerland.webp">
              <div class="comparison-media-icon" aria-hidden="true">CH</div>
              <figcaption><strong>Switzerland image</strong><span>Mattstetten–Rothrist, an early Swiss ETCS Level 2 route</span><small>File slot: comparison-switzerland.webp · 4:3</small></figcaption>
            </figure>`);
        }
      }

      const dataNote = overview.querySelector('.comparison-data-note');
      if (dataNote) dataNote.innerHTML = '<strong>Compare the figures carefully:</strong> Belgium usually reports ETCS in track-km, Germany reports route length, the Netherlands has no single official nationwide completion percentage, and Switzerland is commonly described by the ETCS level used across the network rather than one directly comparable kilometre figure. These numbers should not be converted into a single country ranking.';

      if (!overview.querySelector('.comparison-swiss-sources')) {
        overview.insertAdjacentHTML('beforeend', `
          <div class="comparison-swiss-sources">
            <strong>Swiss facts checked against:</strong>
            <a href="https://www.bav.admin.ch/en/european-train-control-system-etcs" target="_blank" rel="noopener">Swiss Federal Office of Transport (FOT)</a>
            <a href="https://company.sbb.ch/en/railway-development/services-rus/railway-environment/etcs.html" target="_blank" rel="noopener">SBB — Train protection</a>
            <a href="https://transport.ec.europa.eu/transport-modes/rail/ertms/who-involved-ertms-deployment/countries/switzerland_en" target="_blank" rel="noopener">European Commission</a>
          </div>`);
      }
    }

    const timeline = document.getElementById('timeline');
    if (timeline) {
      const legend = timeline.querySelector('.comparison-legend');
      if (legend && !legend.querySelector('.ch-dot')) legend.insertAdjacentHTML('beforeend', '<span><b class="legend-dot ch-dot"></b>CH · Switzerland</span>');

      const eras = Array.from(timeline.querySelectorAll('.comparison-era'));
      const swissEraCards = [
        '<div class="comparison-era-country"><span class="country-code ch-code">CH</span><strong>SIGNUM and ZUB</strong><p>Before ETCS, Switzerland relied mainly on the national SIGNUM and ZUB train-protection systems. These became the legacy functions that Switzerland later migrated into ETCS Level 1 Limited Supervision.</p></div>',
        '<div class="comparison-era-country"><span class="country-code ch-code">CH</span><strong>2004 / 2007</strong><p>Switzerland began using ETCS on the Mattstetten–Rothrist new line in 2004 and in the Lötschberg Base Tunnel in 2007, making it one of Europe’s early practical ETCS adopters.</p></div>',
        '<div class="comparison-era-country"><span class="country-code ch-code">CH</span><strong>Level 1 rollout completed in 2018</strong><p>Switzerland used ETCS Level 1 Limited Supervision as a nationwide migration solution. SBB says the Level 1 rollout was completed in 2018, enabling the standard-gauge network to be operated without an additional national train-protection system.</p></div>',
        '<div class="comparison-era-country"><span class="country-code ch-code">CH</span><strong>2021 ERTMS strategy</strong><p>The Federal Office of Transport set a needs-based approach for further Level 2 expansion, while keeping the long-term goal of cab signalling across the whole standard-gauge network.</p></div>',
        '<div class="comparison-era-country"><span class="country-code ch-code">CH</span><strong>L1 LS network + 10 Level 2 routes/sections</strong><p>The latest FOT description says conventional lines with lineside signals use Level 1 Limited Supervision and Level 2 is in service on ten routes or sections, including Bern–Olten and the Lötschberg, Gotthard and Ceneri base lines.</p></div>'
      ];
      eras.forEach((era, index) => {
        const eraGrid = era.querySelector('.comparison-era-grid');
        if (eraGrid && swissEraCards[index] && !eraGrid.querySelector('.ch-code')) eraGrid.insertAdjacentHTML('beforeend', swissEraCards[index]);
      });
      if (eras[1]) {
        const year = eras[1].querySelector('.comparison-era-year');
        if (year) year.textContent = '2004–2012';
      }
      if (eras[3]) {
        const year = eras[3].querySelector('.comparison-era-year');
        if (year) year.textContent = '2021–2024';
      }
      if (eras[4]) {
        const h3 = eras[4].querySelector('.comparison-era-body > h3');
        if (h3) h3.textContent = 'The four countries are now at very different stages';
      }
    }

    const tableSection = document.getElementById('table');
    if (tableSection) {
      const h2 = tableSection.querySelector('h2');
      if (h2) h2.textContent = 'How the four strategies compare in 2026';
      const p = tableSection.querySelector(':scope > p');
      if (p) p.textContent = 'The table shows how each country moved from its legacy systems toward ETCS. Switzerland is a useful contrast because it first established a network-wide ETCS Level 1 migration layer and then expanded Level 2 where cab signalling was needed.';
      const headRow = tableSection.querySelector('thead tr');
      if (headRow && headRow.children.length === 4) headRow.insertAdjacentHTML('beforeend', '<th>Switzerland</th>');
      const swissCells = [
        'SIGNUM / ZUB',
        'Mattstetten–Rothrist 2004; Lötschberg Base Tunnel 2007',
        'Network-wide Level 1 Limited Supervision as the migration layer, with Level 2 on routes where cab signalling or higher performance is required',
        'SBB says the Level 1 rollout was completed in 2018; FOT lists Level 2 on ten routes or sections',
        'SIGNUM/ZUB functions were migrated into ETCS L1 LS, reducing the need for national train-protection equipment on vehicles',
        'Long-term conversion of the whole standard-gauge network to cab signalling / ETCS Level 2, alongside the future GSM-R to FRMCS transition',
        'Early interoperability and a clear network-wide migration baseline before further Level 2 expansion',
        'Managing a mixed L1 LS / L2 network today while preparing rolling stock, radio and infrastructure for wider cab signalling'
      ];
      tableSection.querySelectorAll('tbody tr').forEach((row, index) => {
        if (row.children.length === 4 && swissCells[index]) row.insertAdjacentHTML('beforeend', `<td>${swissCells[index]}</td>`);
      });
    }

    const lessons = document.getElementById('lessons');
    if (lessons) {
      const h2 = lessons.querySelector('h2');
      if (h2) h2.textContent = 'What can the Netherlands learn from Belgium, Germany and Switzerland?';
      const p = lessons.querySelector(':scope > p');
      if (p) p.textContent = 'The four-country comparison shows that there is no single migration model for every railway. Belgium demonstrates the value of a clear national delivery plan; Germany shows the complexity of combining ETCS with renewal on a very large network; and Switzerland shows how a network-wide Level 1 migration layer can remove dependence on national onboard systems before wider Level 2 cab signalling is introduced.';
      const grid = lessons.querySelector('.comparison-lessons-grid');
      if (grid && !grid.querySelector('.comparison-lesson-switzerland')) {
        const nlCard = Array.from(grid.children).find(el => el.textContent.includes('Netherlands'));
        const swissCard = document.createElement('div');
        swissCard.className = 'info-card glass-card comparison-lesson-switzerland';
        swissCard.innerHTML = '<div class="icon">CH</div><h3>Lesson from Switzerland</h3><p>Switzerland did not force the same ETCS level onto every route at once. Level 1 Limited Supervision created a common network-wide migration layer, while Level 2 was used where cab signalling was justified. This separated interoperability from the later step toward fuller digital cab signalling.</p>';
        if (nlCard) grid.insertBefore(swissCard, nlCard); else grid.appendChild(swissCard);
      }
      const callout = lessons.querySelector('.callout');
      if (callout) callout.innerHTML = '<strong>Note:</strong> The “lessons” above are an analysis of published information and observed deployment approaches. They are not official recommendations issued by the Dutch, Belgian, German or Swiss governments.';
    }

    const border = document.getElementById('border');
    if (border) {
      const h2 = border.querySelector('h2');
      if (h2) h2.textContent = 'Why differences across the four countries still matter for cross-border trains';
      const paras = border.querySelectorAll(':scope > p');
      if (paras[0]) paras[0].innerHTML = 'ETCS was created to reduce the need for international trains to carry many different national train-protection systems. The Drielandentrein between Aachen–Maastricht–Liège still illustrates the transition problem close to the Netherlands: trains have had to support ETCS in Belgium, ATB in the Netherlands and PZB in Germany while infrastructure changes at different speeds.';
      if (paras[1]) paras[1].innerHTML = 'Switzerland adds another important cross-border perspective. It lies on the Rhine–Alpine corridor between northern Europe and Italy. SBB explicitly uses the Rotterdam–Genoa example when explaining why a common European train-protection system matters. Switzerland has already reduced dependence on SIGNUM/ZUB, but trains on the wider corridor still encounter countries where legacy systems remain during migration.';

      if (!border.querySelector('.comparison-swiss-corridor')) {
        const flow = border.querySelector('.comparison-border-flow');
        const panel = `
          <div class="comparison-swiss-corridor">
            <div class="comparison-swiss-corridor-head"><span class="flag-mini ch"></span><h3>Switzerland and the Rhine–Alpine corridor</h3></div>
            <p>Switzerland is not part of the Drielandentrein route. Its relevance is the north–south Rhine–Alpine corridor: traffic from the Netherlands toward Switzerland and northern Italy benefits when more countries can use ETCS without adding national train-protection equipment.</p>
            <div class="comparison-corridor-route" aria-label="Simplified Rhine-Alpine corridor context">
              <span class="comparison-corridor-stop"><span class="flag-mini nl"></span>Netherlands</span><span class="comparison-corridor-arrow">→</span>
              <span class="comparison-corridor-stop"><span class="flag-mini de"></span>Germany</span><span class="comparison-corridor-arrow">→</span>
              <span class="comparison-corridor-stop"><span class="flag-mini ch"></span>Switzerland</span><span class="comparison-corridor-arrow">→</span>
              <span class="comparison-corridor-stop">Northern Italy</span>
            </div>
          </div>`;
        if (flow) flow.insertAdjacentHTML('afterend', panel); else border.insertAdjacentHTML('beforeend', panel);
      }
    }

    const asideLinks = document.querySelectorAll('.aside a');
    asideLinks.forEach(link => {
      if (link.getAttribute('href') === '#lessons') link.textContent = 'Lessons from the comparison';
    });
  };

  const applyGermany2026 = () => {
    if (document.body.dataset.page !== 'comparison.html') return;
    const lang = document.documentElement.lang === 'en' ? 'en' : 'th';

    const overview = document.getElementById('overview');
    if (overview) {
      const germanyCard = Array.from(overview.querySelectorAll('.country-card')).find(card => card.querySelector('h3')?.textContent.trim() === (lang === 'en' ? 'Germany' : 'เยอรมนี'));
      if (germanyCard) {
        const chip = germanyCard.querySelector('.comparison-status-chip');
        const metric = germanyCard.querySelector('.metric');
        const p = germanyCard.querySelector('p');
        if (chip) chip.textContent = lang === 'en' ? 'Updated L2oS plan to 2031' : 'มีแผน L2oS ใหม่ถึงปี 2031';
        if (metric) metric.textContent = '683 km · end-2025 | 750 km planned to 2031';
        if (p) p.textContent = lang === 'en'
          ? 'DB InfraGO reported 683 km of ETCS-equipped route at the end of 2025. On 2 July 2026 it published an updated planning portfolio for 12 routes totalling about 750 km to move to ETCS Level 2 without signals (L2oS) by the end of 2031, with Class-B PZB/LZB withdrawal linked to those migrations.'
          : 'DB InfraGO รายงานว่า ณ สิ้นปี 2025 มีเส้นทางที่ติดตั้ง ETCS รวม 683 km และเมื่อ 2 กรกฎาคม 2026 ได้เผยแพร่แผนปรับปรุงใหม่สำหรับ 12 เส้นทาง รวมราว 750 km ที่จะเปลี่ยนเป็น ETCS Level 2 without signals (L2oS) ภายในสิ้นปี 2031 พร้อมทยอยยุติ PZB/LZB ตามการเปลี่ยนระบบของแต่ละช่วงทาง';
      }

      if (!overview.querySelector('.comparison-germany-update-sources')) {
        overview.insertAdjacentHTML('beforeend', `
          <div class="comparison-swiss-sources comparison-germany-update-sources">
            <strong>${lang === 'en' ? 'Germany 2026 update checked against:' : 'ข้อมูลอัปเดตเยอรมนี 2026 ตรวจสอบจาก:'}</strong>
            <a href="https://www.dbinfrago.com/web/schienennetz/etcs/etcs-migrationsstrategie-11089586" target="_blank" rel="noopener">DB InfraGO — ETCS-Migrationsstrategie</a>
            <a href="https://www.dbinfrago.com/web/aktuelles/kund-inneninformationen/kund-inneninformationen/2026-KW27-Planungsstand-ETCS-bis-2031-13960544" target="_blank" rel="noopener">DB InfraGO — ETCS measures to 2031</a>
            <a href="https://www.dbinfrago.com/web/aktuelles/kund-inneninformationen/kund-inneninformationen/2026-KW27-Inbtn-ETCS-LvL-2-o-S-2031-13960542" target="_blank" rel="noopener">DB InfraGO — L2oS commissioning and system-version change</a>
          </div>`);
      }
    }

    const timeline = document.getElementById('timeline');
    if (timeline) {
      const currentEra = timeline.querySelector('.comparison-era-current');
      const germany = currentEra ? Array.from(currentEra.querySelectorAll('.comparison-era-country')).find(card => card.querySelector('.de-code')) : null;
      if (germany) {
        const strong = germany.querySelector('strong');
        const p = germany.querySelector('p');
        if (strong) strong.textContent = lang === 'en' ? '683 km in service + new L2oS portfolio to 2031' : '683 km ใช้งานแล้ว + แผน L2oS ใหม่ถึงปี 2031';
        if (p) p.textContent = lang === 'en'
          ? 'At the end of 2025 DB InfraGO reported 683 km of ETCS-equipped route. In July 2026 it replaced the previous open-ended replanning status with a concrete portfolio: 12 routes, about 750 km in total, are planned for ETCS L2oS by December 2031. The change also includes planned PZB/LZB decommissioning and ETCS system-version migration on affected routes.'
          : 'สิ้นปี 2025 DB InfraGO รายงานเส้นทางที่ติดตั้ง ETCS 683 km ต่อมาในเดือนกรกฎาคม 2026 ได้เผยแพร่แผนที่เป็นรูปธรรมมากขึ้น โดยกำหนด 12 เส้นทางรวมราว 750 km สำหรับ ETCS L2oS ภายในเดือนธันวาคม 2031 พร้อมแผนปิด PZB/LZB และการเปลี่ยน ETCS system version บนเส้นทางที่เกี่ยวข้อง';
      }
    }

    const table = document.getElementById('table');
    if (table) {
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const statusRow = rows.find(row => /2026|สถานะปี/.test(row.children[0]?.textContent || ''));
      if (statusRow && statusRow.children.length >= 4) statusRow.children[3].textContent = lang === 'en'
        ? '683 km at end-2025; July 2026 plan covers 12 L2oS routes totalling about 750 km by end-2031'
        : '683 km ณ สิ้นปี 2025; แผนกรกฎาคม 2026 ครอบคลุม 12 เส้นทาง L2oS รวมราว 750 km ภายในสิ้นปี 2031';

      const legacyRow = rows.find(row => /Legacy-system transition|การเลิกใช้ระบบเดิม/.test(row.children[0]?.textContent || ''));
      if (legacyRow && legacyRow.children.length >= 4) legacyRow.children[3].textContent = lang === 'en'
        ? 'PZB/LZB are planned to be decommissioned in step with selected L2oS commissioning; affected trains will need compatible ETCS onboard equipment'
        : 'PZB/LZB จะทยอยปิดตามการเปิดใช้ L2oS ในเส้นทางที่กำหนด ทำให้รถที่เข้าสู่พื้นที่ดังกล่าวต้องมี ETCS onboard ที่เข้ากันได้';

      const longTermRow = rows.find(row => /Long-term direction|ทิศทางระยะยาว/.test(row.children[0]?.textContent || ''));
      if (longTermRow && longTermRow.children.length >= 4) longTermRow.children[3].textContent = lang === 'en'
        ? 'Concrete L2oS portfolio is now published through 2031; the migration strategy from 2032 onward is still being developed'
        : 'มีแผน L2oS ที่เป็นรูปธรรมถึงปี 2031 แล้ว ส่วนยุทธศาสตร์การเปลี่ยนผ่านตั้งแต่ปี 2032 เป็นต้นไปยังอยู่ระหว่างจัดทำ';
    }
  };

  const applyAll = () => {
    applySwissEnglish();
    applyGermany2026();
  };

  if (document.readyState === 'complete') {
    window.setTimeout(applyAll, 0);
  } else {
    window.addEventListener('load', () => window.setTimeout(applyAll, 0), { once: true });
  }
})();
