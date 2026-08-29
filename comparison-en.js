(() => {
  const applyComparisonEnglish2026 = () => {
    if (document.documentElement.lang !== 'en' || document.body.dataset.page !== 'comparison.html') return;

    const setHTML = (selector, html) => {
      const el = document.querySelector(selector);
      if (el) el.innerHTML = html;
    };
    const setSection = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    document.title = 'Netherlands × Belgium × Germany | Netherlands Train System';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Historical-to-2026 comparison of train protection and ERTMS/ETCS migration in the Netherlands, Belgium and Germany.');

    const skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = 'Skip to content';

    setHTML('.page-hero .page-hero-inner', `
      <div class="reveal visible">
        <div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 04.1 • Updated 2026</div>
        <h1>Netherlands <span style="color:#ae1c28">×</span> Belgium <span style="color:#ae1c28">×</span> Germany</h1>
        <p class="hero-copy">All three countries are moving toward the same European standard, but they started from different legacy systems, have networks of very different sizes, and chose different migration strategies. Their ETCS deployment therefore differs markedly in pace and complexity.</p>
      </div>
      <div class="page-badge glass-card reveal visible">
        <div class="big">Past → 2026</div>
        <p>Legacy systems • first ETCS routes • rollout strategy • current status • cross-border lessons</p>
      </div>`);

    setSection('overview', `
      <div class="kicker">2026 snapshot</div>
      <h2>Where the three countries stand today</h2>
      <p>If we ask only whether each country “uses ETCS”, the three appear to be heading in the same direction. The detail is very different. Belgium pursued nationwide infrastructure coverage and completed its main-network rollout, the Netherlands is using a staged Tranche approach before wider expansion, while Germany is undertaking a much larger migration in which ETCS must coexist with PZB, LZB and extensive interlocking renewal.</p>

      <div class="country-grid comparison-country-grid">
        <div class="country-card glass-card comparison-country-card">
          <div class="flag nl"></div>
          <span class="comparison-status-chip">Migration in progress</span>
          <h3>Netherlands</h3>
          <div class="metric">Tranche 1 · 419 km</div>
          <p>Operational experience already exists on the Betuweroute, HSL-Zuid, Hanzelijn and Amsterdam–Utrecht. The new national programme now proceeds in Tranches, with Tranche 1 covering the Northern Lines, Zeeuwse lijn and Kijfhoek–Belgian border.</p>
        </div>

        <div class="country-card glass-card comparison-country-card comparison-country-card-leading">
          <div class="flag be"></div>
          <span class="comparison-status-chip">Main network fully equipped</span>
          <h3>Belgium</h3>
          <div class="metric">100% ETCS</div>
          <p>On 14 December 2025 Belgium completed ETCS deployment across approximately 6,400 track-km of its main railway network under the ETCS Masterplan, becoming the second EU country after Luxembourg to equip its entire main network.</p>
        </div>

        <div class="country-card glass-card comparison-country-card">
          <div class="flag de"></div>
          <span class="comparison-status-chip">Expanding and replanning</span>
          <h3>Germany</h3>
          <div class="metric">683 km · end-2025</div>
          <p>DB InfraGO reported 683 km of ETCS-equipped route at the end of 2025 on a network of more than 33,000 km. At the same time, the wider migration strategy is being revised to better reflect rolling-stock readiness and infrastructure funding.</p>
        </div>
      </div>

      <div class="callout comparison-data-note"><strong>Compare the figures carefully:</strong> Belgium commonly reports ETCS coverage in track-km, while Germany's 683 km figure is route length (Streckenlänge), and the Netherlands does not publish one official nationwide completion percentage. These kilometre figures should therefore not be converted into directly comparable percentages.</div>`);

    setSection('timeline', `
      <div class="kicker">Historical comparison</div>
      <h2>From national train-protection systems to a common European standard</h2>
      <p>Today's differences reflect very different starting points. Each country developed its own train-protection technology long before ERTMS existed. Moving to ETCS therefore means much more than installing new equipment: decades of legacy technology, rolling stock and operating practice have to be migrated safely.</p>

      <div class="comparison-timeline">
        <article class="comparison-era">
          <div class="comparison-era-year">Before 2000</div>
          <div class="comparison-era-body">
            <h3>The era of national train-protection systems</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>ATB becomes the main system</strong><p>After the Harmelen disaster in 1962, the Netherlands accelerated ATB-EG deployment from the late 1960s. It took roughly three decades to equip most of the network and fleet.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>Memor / TBL and TBL1+</strong><p>Belgium relied on several national systems, including Memor-Crocodile and the TBL family, with TBL1+ later providing stronger protection around higher-risk signal locations.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>PZB and LZB</strong><p>Germany relied on PZB for intermittent train protection and LZB for continuous supervision, particularly on high-speed and high-performance routes.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era">
          <div class="comparison-era-year">2005–2012</div>
          <div class="comparison-era-body">
            <h3>ETCS enters practical railway operation</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>2007 / 2009 / 2012</strong><p>The Betuweroute entered service with ERTMS in 2007, followed by HSL-Zuid in 2009 and Hanzelijn in 2012, giving the Netherlands early practical experience with the European system.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>2009 → 2012</strong><p>HSL 3 toward Germany and HSL 4 toward the Netherlands opened in 2009 with ETCS deployment on the new high-speed infrastructure. After the 2010 Buizingen accident, rail safety became a national priority and the ETCS Masterplan began in 2012.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>2005 pilot</strong><p>Deutsche Bahn prepared and tested ETCS Level 2 on the roughly 100 km Jüterbog–Leipzig section of the Berlin–Leipzig route, including scheduled passenger-train testing from 2005.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era">
          <div class="comparison-era-year">2014–2019</div>
          <div class="comparison-era-body">
            <h3>Three different models for scaling up ETCS</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>From individual routes to national policy</strong><p>In 2014 the Dutch government selected ERTMS as the long-term national direction. The 2019 Programmabeslissing then authorised the programme to move into implementation.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>A nationwide Masterplan</strong><p>Belgium adopted a mixture of ETCS Level 1 Full Supervision, Level 1 Limited Supervision and Level 2 Full Supervision so that deployment could be tailored to different parts of the network while still pursuing nationwide coverage.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>Major routes and large projects</strong><p>Germany expanded ETCS through corridors, new lines and renewal projects, while retaining and integrating the extensive PZB/LZB and interlocking estate already in use.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era">
          <div class="comparison-era-year">2022–2024</div>
          <div class="comparison-era-body">
            <h3>The difference in deployment pace becomes clearer</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>The programme is recalibrated</strong><p>Integrating trains, central systems, software, staff and infrastructure proved more complex than initially expected. The programme therefore moved toward smaller and more controllable Tranches.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>49% → 79%</strong><p>Infrabel reported that ETCS coverage increased from 49% of the network in 2022 to 79% of main track at the end of 2024, before a final push toward completion in 2025.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>Digital Rail + ETCS</strong><p>Germany increasingly linked ETCS deployment with interlocking renewal and a broader digital-rail architecture. This can deliver wider long-term benefits, but it also means several technology layers are being changed together.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era comparison-era-current">
          <div class="comparison-era-year">2025–2026</div>
          <div class="comparison-era-body">
            <h3>The three countries are now at very different stages</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>Tranche 1 enters field work</strong><p>Tranche 1 covers 419 km. In 2026 physical installation began on Harlingen Haven–Leeuwarden, while final ERTMS commissioning and ATB switch-off dates for each Tranche 1 area have not yet been fixed.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>100% infrastructure coverage</strong><p>On 14 December 2025 Belgium completed the ETCS Masterplan across roughly 6,400 track-km of the main network. SNCB/NMBS also reported its full train fleet equipped with ETCS during 2025.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>683 km and a revised strategy</strong><p>DB InfraGO reached 683 km of ETCS route by the end of 2025 and commissioned about 100 km of ETCS Level 2 between Freiburg and Basel. The 2024 migration strategy was meanwhile withdrawn in 2025 and is being revised with government and industry.</p></div>
            </div>
          </div>
        </article>
      </div>`);

    setSection('table', `
      <div class="kicker">Strategy</div>
      <h2>Strategic comparison in 2026</h2>
      <div class="compare-table-wrap">
        <table>
          <thead><tr><th>Issue</th><th>Netherlands</th><th>Belgium</th><th>Germany</th></tr></thead>
          <tbody>
            <tr><td>Main legacy systems</td><td>ATB-EG / ATB-NG</td><td>Memor-Crocodile, TBL1 / TBL1+</td><td>PZB / LZB</td></tr>
            <tr><td>Early ETCS</td><td>Betuweroute 2007, HSL-Zuid 2009, Hanzelijn 2012</td><td>HSL 3 and HSL 4 were early international ETCS-equipped high-speed routes</td><td>Approx. 100 km ETCS L2 pilot on Jüterbog–Leipzig from 2005</td></tr>
            <tr><td>Rollout model</td><td>Staged Tranches, learning from lower to higher complexity; ETCS Level 2 is central to the new programme</td><td>Nationwide Masterplan using a mix of L1 FS, L1 LS and L2 FS</td><td>Corridor, node and renewal projects combining ETCS with digital/electronic interlockings</td></tr>
            <tr><td>2026 status</td><td>419 km Tranche 1 in progress; no official nationwide completion percentage</td><td>Main network 100% ETCS-equipped since 14 Dec 2025</td><td>683 km at end-2025; wider rollout and migration planning under revision</td></tr>
            <tr><td>Legacy-system transition</td><td>ATB is removed after ERTMS is proven ready in each migrated area</td><td>National Class-B systems are progressively removed as ETCS becomes the operating standard</td><td>PZB/LZB remain widespread and decommissioning must be coordinated with ETCS and rolling-stock readiness</td></tr>
            <tr><td>Long-term direction</td><td>The Dutch NIP plans nationwide Class-B replacement by ERTMS by 2050, with ERTMS Level 2 across the network</td><td>Infrastructure Masterplan target achieved; the focus shifts to full operational use, upgrades and lifecycle management</td><td>European planning has envisaged ETCS across the German network by 2040, while the latest detailed migration strategy is being revised</td></tr>
            <tr><td>Strength</td><td>Risk reduction through staged learning and end-to-end system testing</td><td>Clear national target, repeatable industrial deployment and completion of the nationwide infrastructure programme</td><td>ETCS is integrated into a broader digital transformation of a very large rail network</td></tr>
            <tr><td>Main challenge</td><td>Dependencies between rolling stock, central systems, infrastructure and staff</td><td>Managing several ETCS configurations and ensuring all operators and vehicles can use the new infrastructure effectively</td><td>Very large network, large vehicle fleet and complex coexistence of PZB, LZB and ETCS during migration</td></tr>
          </tbody>
        </table>
      </div>`);

    setSection('lessons', `
      <div class="kicker">What can be learned?</div>
      <h2>What can the Netherlands learn from Belgium and Germany?</h2>
      <p>The three cases show that there is no single rollout model that fits every network. Belgium demonstrates the benefit of a clear nationwide target, repeatable designs and industrial-scale deployment. Germany illustrates the opposite challenge: when a network is very large and several legacy systems must remain in parallel, ETCS migration can become much more complex.</p>
      <div class="info-grid comparison-lessons-grid">
        <div class="info-card glass-card"><div class="icon">BE</div><h3>Lesson from Belgium</h3><p>Continuity of the Masterplan, clear technical configurations and repeatable delivery helped coverage rise from 49% in 2022 to 100% in 2025.</p></div>
        <div class="info-card glass-card"><div class="icon">DE</div><h3>Lesson from Germany</h3><p>The Freiburg–Basel project shows that PZB, LZB and ETCS can coexist to support gradual migration, but the triple-system design substantially increases engineering, testing and approval complexity.</p></div>
        <div class="info-card glass-card"><div class="icon">NL</div><h3>What fits the Netherlands</h3><p>The Tranche model may build national coverage more slowly than an all-at-once rollout, but it allows train, central-system and operating-process problems to be found in controlled areas before moving into denser and more complex corridors.</p></div>
      </div>
      <div class="callout"><strong>Interpretation note:</strong> these “lessons” are an analysis derived from the documented programmes and results of the three countries. They are not official conclusions issued by the Dutch, Belgian or German governments.</div>`);

    setSection('border', `
      <div class="kicker">Cross-border</div>
      <h2>Why the differences still matter for international trains</h2>
      <p>ETCS was designed to reduce the number of national train-protection systems that international trains need to carry. During the transition, however, “one standard” does not yet mean every train can cross a border without legacy systems. The tri-country service linking Aachen, Maastricht and Liège is a useful example: rolling stock has needed ETCS for Belgium, ATB for the Netherlands and PZB for Germany while infrastructure migration remains asynchronous.</p>
      <p>Belgium now has ETCS across its main network, but the Dutch Kijfhoek–Belgian border section remains part of Tranche 1, while Germany still uses PZB and LZB widely as ETCS expands. In the short term, international operators therefore still have to manage multi-system rolling stock, multiple software configurations and system transitions at borders.</p>
      <div class="comparison-border-flow glass-card">
        <div><span class="flag-mini nl"></span><strong>Netherlands</strong><small>ATB + ERTMS during migration</small></div>
        <span class="border-arrow">→</span>
        <div><span class="flag-mini be"></span><strong>Belgium</strong><small>ETCS across the main network</small></div>
        <span class="border-arrow">↔</span>
        <div><span class="flag-mini de"></span><strong>Germany</strong><small>PZB / LZB + ETCS</small></div>
      </div>`);

    setHTML('.aside', `
      <p class="aside-title">On this page</p>
      <a href="#overview">2026 overview</a>
      <a href="#timeline">Historical timeline</a>
      <a href="#table">Comparison table</a>
      <a href="#lessons">Lessons from three countries</a>
      <a href="#border">Cross-border issues</a>
      <a href="other.html?lang=en#ref-comparison">References</a>`);
  };

  // script.js loads the shared English translation asynchronously. Waiting for
  // window.load ensures this page-specific 2026 comparison replaces the older
  // comparison translation after the shared translator has finished.
  if (document.readyState === 'complete') applyComparisonEnglish2026();
  else window.addEventListener('load', applyComparisonEnglish2026, { once: true });
})();
