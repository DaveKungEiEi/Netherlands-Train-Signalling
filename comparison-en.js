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
        <p class="hero-copy">All three countries share the same long-term goal: moving toward Europe's ERTMS/ETCS standard. But they started with different legacy systems, network sizes and migration strategies, so their transition is progressing at very different speeds.</p>
      </div>
      <div class="page-badge glass-card reveal visible">
        <div class="big">Past → 2026</div>
        <p>Legacy systems • first ETCS routes • rollout approach • current status • cross-border operation</p>
      </div>`);

    setSection('overview', `
      <div class="kicker">2026 snapshot</div>
      <h2>Where the three countries stand today</h2>
      <p>If we ask only whether each country “has ETCS”, the three may look similar. In practice, they are at very different stages. Belgium has completed ETCS installation across its main network, the Netherlands is expanding through controlled stages called <strong>Tranches</strong>, while Germany is still deploying ETCS alongside legacy systems and extensive interlocking renewal across a much larger network.</p>

      <div class="country-grid comparison-country-grid">
        <div class="country-card glass-card comparison-country-card">
          <div class="flag nl"></div>
          <span class="comparison-status-chip">Migration in progress</span>
          <h3>Netherlands</h3>
          <div class="metric">Tranche 1 · 419 km</div>
          <p>The Netherlands already has operational ERTMS experience on the Betuweroute, HSL-Zuid, Hanzelijn and Amsterdam–Utrecht. The newer national programme is being delivered in stages, with Tranche 1 covering the Northern Lines, Zeeuwse lijn and Kijfhoek–Belgian border.</p>
        </div>

        <div class="country-card glass-card comparison-country-card comparison-country-card-leading">
          <div class="flag be"></div>
          <span class="comparison-status-chip">Main network fully equipped</span>
          <h3>Belgium</h3>
          <div class="metric">100% ETCS</div>
          <p>On 14 December 2025 Belgium completed ETCS deployment across approximately 6,400 track-km of its main network under the ETCS Masterplan. Track-km counts individual tracks separately, so this figure is not directly comparable with Germany's route-length figure.</p>
        </div>

        <div class="country-card glass-card comparison-country-card">
          <div class="flag de"></div>
          <span class="comparison-status-chip">Expanding and replanning</span>
          <h3>Germany</h3>
          <div class="metric">683 km · end-2025</div>
          <p>DB InfraGO reported 683 km of ETCS-equipped route at the end of 2025 on a network of more than 33,000 km. Germany is also revising its wider migration plan to reflect rolling-stock readiness and available infrastructure funding.</p>
        </div>
      </div>

      <div class="comparison-photo-grid" aria-label="Image slots for ETCS status in the three countries">
        <figure class="comparison-media-placeholder" data-slot="comparison-netherlands.webp">
          <div class="comparison-media-icon" aria-hidden="true">NL</div>
          <figcaption><strong>Netherlands image</strong><span>Suggested: an ERTMS train or route such as Betuweroute, HSL-Zuid or Hanzelijn</span><small>File: comparison-netherlands.webp · 4:3</small></figcaption>
        </figure>
        <figure class="comparison-media-placeholder" data-slot="comparison-belgium.webp">
          <div class="comparison-media-icon" aria-hidden="true">BE</div>
          <figcaption><strong>Belgium image</strong><span>Suggested: ETCS infrastructure or an SNCB/NMBS train operating on an ETCS route</span><small>File: comparison-belgium.webp · 4:3</small></figcaption>
        </figure>
        <figure class="comparison-media-placeholder" data-slot="comparison-germany.webp">
          <div class="comparison-media-icon" aria-hidden="true">DE</div>
          <figcaption><strong>Germany image</strong><span>Suggested: ETCS Level 2, Digital Rail Germany or the Freiburg–Basel corridor</span><small>File: comparison-germany.webp · 4:3</small></figcaption>
        </figure>
      </div>

      <div class="callout comparison-data-note"><strong>Compare the figures carefully:</strong> Belgium usually reports ETCS in track-km, Germany's 683 km figure is route length, and the Netherlands does not publish one official nationwide completion percentage. The kilometre figures should therefore not be converted into directly comparable percentages.</div>`);

    setSection('timeline', `
      <div class="kicker">Historical comparison</div>
      <h2>From national systems to a common European standard</h2>
      <p>Before ERTMS, each country had already spent decades developing its own train-protection systems. Moving to ETCS is therefore not a simple equipment swap: legacy systems, rolling stock, infrastructure, software and operating procedures all have to migrate safely over time.</p>

      <div class="comparison-legend" aria-label="Country abbreviations in the timeline">
        <span><b class="legend-dot nl-dot"></b>NL · Netherlands</span>
        <span><b class="legend-dot be-dot"></b>BE · Belgium</span>
        <span><b class="legend-dot de-dot"></b>DE · Germany</span>
      </div>

      <div class="comparison-timeline">
        <article class="comparison-era">
          <div class="comparison-era-year">Before 2000</div>
          <div class="comparison-era-body">
            <h3>Each country relies on its own train-protection systems</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>ATB becomes the main system</strong><p>After the Harmelen disaster in 1962, the Netherlands accelerated ATB-EG deployment from the late 1960s. It took roughly three decades to cover most of the network.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>Memor-Crocodile and TBL</strong><p>Belgium used several national warning and train-protection systems, including Memor-Crocodile and TBL, before later developing stronger protection systems.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>PZB and LZB</strong><p>Germany relied on PZB for intermittent protection and LZB for continuous supervision, especially on high-speed or high-performance routes.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era">
          <div class="comparison-era-year">2005–2012</div>
          <div class="comparison-era-body">
            <h3>ETCS enters practical railway operation</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>2007 / 2009 / 2012</strong><p>The Betuweroute entered service with ERTMS in 2007, followed by HSL-Zuid in 2009 and Hanzelijn in 2012, giving the Netherlands relatively early operational experience with the European system.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>2009 → 2012</strong><p>HSL 3 toward Germany and HSL 4 toward the Netherlands became early international high-speed routes with ETCS. After the 2010 Buizingen accident, train protection received even greater national attention and the ETCS Masterplan began in 2012.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>2005 testing</strong><p>Deutsche Bahn tested ETCS Level 2 on the roughly 100 km Jüterbog–Leipzig section and used scheduled passenger trains for system testing from 2005.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era">
          <div class="comparison-era-year">2014–2019</div>
          <div class="comparison-era-body">
            <h3>Three different approaches to scaling up ETCS</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>From selected routes to national policy</strong><p>In 2014 the Dutch government selected ERTMS as the long-term national direction. In 2019 the programme was authorised to move into national implementation.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>A nationwide Masterplan</strong><p>Belgium used several ETCS configurations—Level 1 Full Supervision, Level 1 Limited Supervision and Level 2 Full Supervision—to match different route needs while accelerating nationwide coverage.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>Major routes and renewal projects</strong><p>Germany expanded ETCS through corridors, new lines and renewal projects, while integrating it with extensive PZB, LZB and existing interlocking systems.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era">
          <div class="comparison-era-year">2022–2024</div>
          <div class="comparison-era-body">
            <h3>The difference in deployment pace becomes clearer</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>The programme changes its delivery approach</strong><p>Integrating rolling stock, central systems, software, staff and infrastructure proved more complex than expected, so the programme moved toward smaller and more controllable Tranches.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>49% → 79%</strong><p>Infrabel reported ETCS coverage rising from 49% in 2022 to 79% of main track at the end of 2024, before the final push to completion in 2025.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>Digital Rail + ETCS</strong><p>Germany increasingly linked ETCS deployment with interlocking renewal and other digital-rail systems. This broadens the long-term transformation, but also increases delivery complexity.</p></div>
            </div>
          </div>
        </article>

        <article class="comparison-era comparison-era-current">
          <div class="comparison-era-year">2025–2026</div>
          <div class="comparison-era-body">
            <h3>The three countries are now at very different stages</h3>
            <div class="comparison-era-grid">
              <div class="comparison-era-country"><span class="country-code nl-code">NL</span><strong>Tranche 1 enters field work</strong><p>Tranche 1 covers 419 km. In 2026 physical installation began on Harlingen Haven–Leeuwarden, while final ERTMS commissioning and ATB switch-off dates for each Tranche 1 area have not yet been fixed.</p></div>
              <div class="comparison-era-country"><span class="country-code be-code">BE</span><strong>Main network fully equipped</strong><p>On 14 December 2025 Belgium completed the ETCS Masterplan across roughly 6,400 track-km of the main network. NMBS/SNCB also reported its fleet fully equipped with ETCS during 2025.</p></div>
              <div class="comparison-era-country"><span class="country-code de-code">DE</span><strong>683 km and a revised strategy</strong><p>DB InfraGO reached 683 km of ETCS-equipped route by the end of 2025 and commissioned around 100 km of ETCS Level 2 between Freiburg and Basel. The 2024 migration strategy was withdrawn in 2025 so that a revised plan could be developed with government and industry.</p></div>
            </div>
          </div>
        </article>
      </div>

      <figure class="comparison-media-placeholder comparison-media-wide" data-slot="comparison-history.webp">
        <div class="comparison-media-icon" aria-hidden="true">HISTORY</div>
        <figcaption><strong>Historical ETCS image</strong><span>Suggested: an early ETCS route such as Betuweroute, HSL 4 or an ETCS test in Germany</span><small>File: comparison-history.webp · 16:9</small></figcaption>
      </figure>`);

    setSection('table', `
      <div class="kicker">Strategy</div>
      <h2>How the three strategies compare in 2026</h2>
      <p>This table shows where each country started, how it chose to expand ETCS and what challenges remain. The figures and dates should be read in each country's own context rather than as a simple race over which country is “faster”.</p>
      <div class="compare-table-wrap">
        <table>
          <thead><tr><th>Issue</th><th>Netherlands</th><th>Belgium</th><th>Germany</th></tr></thead>
          <tbody>
            <tr><td>Main legacy systems</td><td>ATB-EG / ATB-NG</td><td>Memor-Crocodile, TBL1 / TBL1+</td><td>PZB / LZB</td></tr>
            <tr><td>Early ETCS</td><td>Betuweroute 2007, HSL-Zuid 2009, Hanzelijn 2012</td><td>HSL 3 and HSL 4 were early international routes equipped with ETCS</td><td>ETCS Level 2 testing on roughly 100 km of Jüterbog–Leipzig from 2005</td></tr>
            <tr><td>Rollout approach</td><td>Staged Tranches from lower to higher complexity, with ETCS Level 2 at the centre of the programme</td><td>Nationwide Masterplan using L1 FS, L1 LS or L2 FS according to route needs</td><td>Corridor, node and renewal projects combining ETCS with interlocking modernisation</td></tr>
            <tr><td>2026 status</td><td>419 km Tranche 1 in progress; no official nationwide completion percentage</td><td>Main network 100% ETCS-equipped since 14 December 2025</td><td>683 km at end-2025; the wider long-term rollout plan is being revised</td></tr>
            <tr><td>Legacy-system transition</td><td>ATB is removed only after ERTMS is proven safe and ready in each migrated area</td><td>Reliance on national legacy protection is reduced as ETCS becomes the network standard</td><td>PZB/LZB withdrawal must be coordinated with ETCS deployment and rolling-stock readiness</td></tr>
            <tr><td>Long-term direction</td><td>The National Implementation Plan (NIP) aims to replace national Class-B systems with ERTMS nationwide by 2050</td><td>The infrastructure Masterplan target is complete; focus moves to operation, upgrades and lifecycle management</td><td>European planning has envisaged ETCS across the German network by 2040, while the latest detailed migration plan is being revised</td></tr>
            <tr><td>Strength</td><td>Staged learning and whole-system testing reduce implementation risk</td><td>Clear national targets, repeatable delivery and completion of the infrastructure Masterplan</td><td>ETCS is integrated into a wider digital transformation of a very large railway network</td></tr>
            <tr><td>Main challenge</td><td>Rolling stock, central systems, infrastructure and staff all have to become ready in a coordinated sequence</td><td>Multiple ETCS configurations must be maintained while all rolling stock and operators are prepared for real-world use</td><td>A very large network and fleet must manage PZB, LZB and ETCS in parallel during migration</td></tr>
          </tbody>
        </table>
      </div>`);

    setSection('lessons', `
      <div class="kicker">What can be learned?</div>
      <h2>What can the Netherlands learn from Belgium and Germany?</h2>
      <p>The three cases show that no single migration model fits every railway. Belgium demonstrates the value of a clear national target and repeatable delivery model. Germany shows how much more complex ETCS can become on a very large network when several legacy systems must remain in use at the same time.</p>
      <div class="info-grid comparison-lessons-grid">
        <div class="info-card glass-card"><div class="icon">BE</div><h3>Lesson from Belgium</h3><p>Continuity of the Masterplan and clear technical configurations helped ETCS coverage rise from 49% in 2022 to 100% in 2025.</p></div>
        <div class="info-card glass-card"><div class="icon">DE</div><h3>Lesson from Germany</h3><p>The Freiburg–Basel project shows that PZB, LZB and ETCS can coexist during migration, but doing so makes engineering, testing and approval substantially more complex.</p></div>
        <div class="info-card glass-card"><div class="icon">NL</div><h3>What fits the Netherlands</h3><p>The Tranche approach allows problems involving rolling stock, central systems and operating procedures to be found in controlled areas before deployment moves to denser and more complex corridors.</p></div>
      </div>
      <div class="callout"><strong>Interpretation note:</strong> these lessons are an analysis of the documented programmes and results. They are not official conclusions issued by the Dutch, Belgian or German governments.</div>`);

    setSection('border', `
      <div class="kicker">Cross-border</div>
      <h2>Why the differences still matter for international trains</h2>
      <p>ETCS was developed to reduce the need for international trains to carry several national train-protection systems. During the transition, however, having “one standard” does not yet mean a train can use one system for its entire journey. The Aachen–Maastricht–Liège tri-country service is a useful example: rolling stock has needed ETCS for Belgium, ATB for the Netherlands and PZB for Germany while infrastructure migration remains out of step across the borders.</p>
      <p>Belgium now has ETCS across its main network, while the Netherlands is still expanding ERTMS and Germany continues to use PZB/LZB widely. In the short term, international operators therefore still have to manage multi-system rolling stock, several software configurations and system transitions when crossing borders.</p>
      <div class="comparison-border-flow glass-card">
        <div><span class="flag-mini nl"></span><strong>Netherlands</strong><small>ATB + ERTMS during migration</small></div>
        <span class="border-arrow">→</span>
        <div><span class="flag-mini be"></span><strong>Belgium</strong><small>ETCS across the main network</small></div>
        <span class="border-arrow">↔</span>
        <div><span class="flag-mini de"></span><strong>Germany</strong><small>PZB / LZB + ETCS</small></div>
      </div>

      <figure class="comparison-media-placeholder comparison-media-wide" data-slot="comparison-crossborder.webp">
        <div class="comparison-media-icon" aria-hidden="true">↔</div>
        <figcaption><strong>Cross-border railway image</strong><span>Suggested: the tri-country train, Aachen–Maastricht–Liège or another Netherlands–Belgium–Germany international service</span><small>File: comparison-crossborder.webp · 16:9</small></figcaption>
      </figure>`);

    setSection('sources', `
      <div class="kicker">References</div>
      <h2>References</h2>
      <p>All sources used for this comparison are collected in the “More” page under Chapter 04.1, so the historical timeline, current figures and cross-border examples can be checked from one place.</p>
      <a class="source-link comparison-reference-link" href="other.html?lang=en#ref-comparison"><span>Open the references for this comparison</span><span>↗</span></a>`);

    setHTML('.aside', `
      <p class="aside-title">On this page</p>
      <a href="#overview">2026 overview</a>
      <a href="#timeline">Historical timeline</a>
      <a href="#table">Comparison table</a>
      <a href="#lessons">Lessons from three countries</a>
      <a href="#border">Cross-border issues</a>
      <a href="#sources">References</a>`);
  };

  // script.js loads the shared English translation asynchronously. Waiting for
  // window.load ensures this page-specific comparison replaces the older shared
  // comparison translation after the shared translator has finished.
  if (document.readyState === 'complete') applyComparisonEnglish2026();
  else window.addEventListener('load', applyComparisonEnglish2026, { once: true });
})();