(() => {
  const setHTML = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };
  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };
  const setAttr = (selector, name, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(name, value);
  };
  const setMeta = (title, description) => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  };
  const setSection = (id, html) => {
    const section = document.getElementById(id);
    if (section) section.innerHTML = html;
  };

  function translateHome() {
    setMeta(
      'Home | Netherlands Train System',
      'The transition of Dutch mainline railway signalling from ATB to ERTMS/ETCS.'
    );
    setText('.skip-link', 'Skip to content');
    setHTML('#hero-title', 'The transition of Dutch mainline railway signalling<br><span class="hero-switch">from <b>ATB</b> to <b>ERTMS/ETCS</b></span>');
    setHTML('.hero-editorial .hero-copy', 'From a national train-protection system used for decades to a common European digital standard that is reshaping infrastructure, rolling stock and railway operations.');
    setAttr('.hero-meta', 'aria-label', 'Key topics');
    setText('.scroll-down span', 'Scroll to explore');
    setAttr('.scroll-down', 'aria-label', 'Scroll down to the main content');

    setText('#ns-history .section-head-editorial .kicker', 'Nederlandse Spoorwegen • NS');
    setText('#ns-history .section-head-editorial h2', 'History of railways in the Netherlands');
    setHTML('#ns-history .section-head-editorial .lead', 'To understand why the Netherlands is moving from ATB to ERTMS/ETCS, it helps to look back at how the Dutch railway developed—from the country’s first railway to the modern division of responsibilities between NS and ProRail.');

    const history = [
      {
        title: 'From horse power and steam to iron rails and speed',
        paragraphs: [
          'Before the early 1800s, most people travelled on foot, by horse-drawn carriage or by horse-towed boat. That began to change after the development of the steam engine. James Watt improved the steam engine in 1765, and in 1804 Richard Trevithick demonstrated that steam power could haul heavy loads on rails. The invention would become one of the major turning points in the history of transport.',
          'Britain opened the Stockton and Darlington Railway in 1825, but the Netherlands initially remained cautious. Politicians, boat operators and farmers worried that the new “iron monster” could threaten jobs, frighten livestock, or even move too fast for the human body. Those concerns could not stop railway development, and rail transport continued to expand.'
        ]
      },
      {
        title: 'The first railway in the Netherlands',
        paragraphs: [
          'As Germany and Belgium began expanding their railway networks, the Netherlands did not want to fall behind. King William I concluded that the country also needed modern rail transport, and government support made it possible for private companies to begin railway development.',
          'In 1837 the Hollandsche IJzeren Spoorweg Maatschappij (HIJSM) was founded. It built the line between Amsterdam and Haarlem, which officially opened in 1839. The first trains were hauled by two locomotives named De Arend and De Snelheid. A replica of De Arend is now displayed at the Railway Museum in Utrecht.'
        ]
      },
      {
        title: 'A railway network connecting the country',
        paragraphs: [
          'Railway construction was initially slow. The Dutch state therefore decided to build a more extensive national network, much of which was operated by the Maatschappij tot Exploitatie van Staatsspoorwegen (SS).',
          'By around 1900, most of the core railway network that is recognisable today had been built. Stations were established across the country, giving far more people access to fast and practical travel between Dutch cities and regions.'
        ]
      },
      {
        title: 'War, cooperation and reconstruction',
        paragraphs: [
          'During the First World War, the importance of coordinated railway management became increasingly clear. In 1917, SS and HSM began cooperating under the name Nederlandse Spoorwegen (NS), even though they still remained separate legal companies.',
          'In 1937 the two companies formally merged into NS. Soon afterwards, the Second World War caused severe damage to the railway network: bridges were destroyed and large amounts of rolling stock were lost.',
          'After liberation, a major reconstruction programme began with support from the Marshall Plan. The Netherlands became an early leader in railway electrification, and in 1958 the final regular steam locomotive service came to an end.'
        ]
      },
      {
        title: 'The rise of the car and a new railway strategy',
        paragraphs: [
          'From the 1960s onward, private car ownership grew rapidly and rail passenger numbers declined. NS responded with major reforms, including Spoorslag ’70, which reorganised the timetable and increased service frequency. At the same time, rail freight faced growing competition from road haulage.',
          'During the 1980s and 1990s, major infrastructure projects such as HSL-Zuid and the Betuweroute took shape. European railway policy increasingly promoted competition and clearer separation between commercial operations and infrastructure management. NS was corporatised in the 1990s, while infrastructure responsibilities were eventually brought together under ProRail.'
        ]
      },
      {
        title: 'Corporatisation and a sharper focus on core activities',
        paragraphs: [
          'After the 1995 restructuring, NS was involved in a wide range of activities, including freight, railway construction and telecommunications. Competing successfully in every market proved difficult, and non-core activities were gradually sold or discontinued.',
          'Proceeds from the sale of telecommunications interests also contributed to the creation of the NS One-Off Contribution Fund (FENS).'
        ]
      },
      {
        title: 'Modern NS and a stronger focus on passengers',
        paragraphs: [
          'From 2000 onward, NS increasingly concentrated on passenger transport, rolling-stock maintenance and station development. New trains, timetable improvements and passenger facilities were introduced to improve service quality and reliability.',
          'The OV-chipkaart, developed together with other public-transport operators, made ticketing easier. Automatic gates, journey planners and later mobile apps improved access to reliable travel information, although disruptions and operational reliability remained important challenges.',
          'Door-to-door travel also became more important. OV-fiets expanded, bicycle parking improved, and cooperation with partners such as Greenwheels and Q-Park grew. Major stations were redeveloped into modern hubs that combine travel, work and urban life.'
        ]
      },
      {
        title: 'Railways today and the next step into the future',
        paragraphs: [
          'NS continues to focus on reliability, sustainability and convenient travel. Rail remains one of the most climate-friendly forms of mass transport, and international connections to Paris, Brussels, London and Frankfurt have become increasingly important.',
          'People interested in Dutch railway history can explore resources at the Railway Museum, NVBS, the Netherlands Institute for Sound and Vision and the Utrecht Archives. Railways are not only a practical means of transport; they are also a living record of social, technological and economic change.'
        ]
      }
    ];

    document.querySelectorAll('#ns-history .history-copy').forEach((copy, index) => {
      const item = history[index];
      if (!item) return;
      copy.innerHTML = `<h3>${item.title}</h3>${item.paragraphs.map(p => `<p>${p}</p>`).join('')}`;
    });

    const topicHead = document.querySelector('.topic-section .section-head-editorial');
    if (topicHead) {
      const kicker = topicHead.querySelector('.kicker');
      const h2 = topicHead.querySelector('h2');
      const lead = topicHead.querySelector('.lead');
      if (kicker) kicker.textContent = 'Research Structure';
      if (h2) h2.textContent = 'Explore the ATB → ETCS transition';
      if (lead) lead.textContent = 'The website moves from the legacy system to the new European standard, then examines deployment status, migration challenges, comparison with Belgium and Germany, and the direct effects on long-distance rail services.';
    }

    const topics = [
      ['ATB', 'What ATB is • history • how it works'],
      ['ERTMS / ETCS', 'European standard • history • ETCS Level 2'],
      ['Transition status', 'Dutch rollout plan and the latest progress'],
      ['Problems and challenges', 'Rolling stock • testing • migration • people'],
      ['Netherlands × Belgium × Germany', 'Comparing ETCS strategies and readiness'],
      ['Impact on long-distance rail', 'Safety • capacity • interoperability • operations']
    ];
    document.querySelectorAll('.topic-list .topic-row').forEach((row, index) => {
      const data = topics[index];
      if (!data) return;
      const h3 = row.querySelector('h3');
      const p = row.querySelector('p');
      if (h3) h3.textContent = data[0];
      if (p) p.textContent = data[1];
    });

    setText('.thesis-panel .thesis-top span:first-child', 'CORE QUESTION');
    setHTML('.thesis-panel h2', 'Why replace a system<br>that still works?');
    setHTML('.thesis-panel p', 'ATB remains the main safety system on many Dutch routes, but it is a national technology with important limitations and it is not a common European standard. ERTMS/ETCS offers more detailed speed and braking supervision, supports cross-border interoperability and provides a foundation for future digital railway operations.');
    setHTML('.thesis-panel .btn', 'Explore ERTMS/ETCS <span aria-hidden="true">→</span>');
  }

  function translateATB() {
    setMeta('ATB | Netherlands Train System', 'What ATB is, its history and how the Dutch train-protection system works.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 01</div><h1>ATB <span style="color:#003082">the legacy system that established a safety foundation</span></h1><p class="hero-copy">ATB — Automatische TreinBeïnvloeding — is the Dutch automatic train-protection system developed to provide an additional safety layer alongside lineside signalling.</p></div><div class="page-badge glass-card reveal"><div class="big">ATB-EG</div><p>First Generation • continuous coded track-circuit train protection</p></div>`);

    setSection('what', `<div class="kicker">1.1</div><h2>What is ATB?</h2><p><strong>ATB (Automatische TreinBeïnvloeding)</strong> can be understood as “automatic train influence/control”. It is the Netherlands’ national Automatic Train Protection system. The most widespread version on the main network is <strong>ATB-EG</strong>, or Eerste Generatie (First Generation).</p><p>ATB does not replace lineside signals. Instead, it supports them by transmitting information related to signal aspects and permitted speed to the train. If the driver does not respond appropriately to a warning, the system can intervene and apply the brakes.</p><div class="info-grid"><div class="info-card glass-card"><div class="icon">S</div><h3>Signal-linked</h3><p>Permitted-speed information is linked to signalling conditions and transmitted through the track circuit to the train.</p></div><div class="info-card glass-card"><div class="icon">B</div><h3>Brake intervention</h3><p>If the train exceeds the supervised speed, ATB warns the driver and can trigger braking if the driver does not respond.</p></div></div>`);

    setSection('history', `<div class="kicker">1.2</div><h2>History of ATB</h2><p>ATB concepts were developed from the 1950s, but the Harmelen rail disaster on 8 January 1962 became a major catalyst for widespread deployment. After the accident, the Dutch government and railway sector accelerated the installation of ATB-EG across the main network.</p><div class="timeline"><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card glass-card"><div class="timeline-year">1950s</div><h3>Development begins</h3><p>NS tested ways to bring signalling information into the cab to reduce the risk of missed signals.</p></div></div><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card glass-card"><div class="timeline-year">1962</div><h3>Harmelen accelerates the programme</h3><p>The major accident increased the urgency of introducing automatic train protection across the network.</p></div></div><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card glass-card"><div class="timeline-year">late 1960s–1990s</div><h3>ATB-EG spreads across the main network</h3><p>ATB-EG was installed progressively and became the main train-protection standard on much of the Dutch railway network.</p></div></div><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card glass-card"><div class="timeline-year">1990s →</div><h3>ATB-NG and the move toward a European system</h3><p>ATB-NG introduced more detailed braking-curve supervision on selected routes, but nationwide expansion of a newer national system was eventually superseded by the ERTMS/ETCS strategy.</p></div></div></div>`);

    setSection('working', `<div class="kicker">1.3</div><h2>How ATB-EG works</h2><p>ATB-EG uses <strong>coded track circuits</strong> to transmit encoded electrical signals through the rails. Equipment on the train detects these codes and interprets them as permitted speed levels, which are then compared with the train’s actual speed.</p><div class="signal-diagram glass-card"><div class="diagram-flow"><div class="diagram-node"><strong>Signal / Interlocking</strong><small>Determines route status</small></div><div class="diagram-node"><strong>Track circuit</strong><small>Encodes data through the rails</small></div><div class="diagram-node"><strong>ATB receiver</strong><small>Onboard equipment receives the code</small></div><div class="diagram-node"><strong>Speed supervision</strong><small>Compares actual and permitted speed</small></div><div class="diagram-node"><strong>Warning / Brake</strong><small>Warns or applies the brakes</small></div></div></div><div class="callout"><strong>Important limitation of ATB-EG:</strong> the first-generation system does not supervise detailed braking curves in the way ETCS does, and it has limitations at lower speeds. These limitations led to supplementary systems such as ATB-Vv at higher-risk locations and are among the reasons for the transition to ERTMS.</div>`);

    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#what">1.1 What is ATB?</a><a href="#history">1.2 ATB history</a><a href="#working">1.3 How it works</a><a href="#sources">References</a>`);
  }

  function translateERTMS() {
    setMeta('ERTMS / ETCS | Netherlands Train System', 'What ERTMS and ETCS are, their development history, and how ETCS Level 2 works up to the current 2026 context.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 02 • Updated 2026</div><h1>ERTMS <span style="color:#ae1c28">/</span> ETCS <span style="color:#003082">Europe’s digital railway standard</span></h1><p class="hero-copy">ERTMS was created to reduce the complexity caused by different national train-protection systems across Europe. ETCS is its core train-control component, supervising speed, distance and braking to keep trains within safe operating limits.</p></div><figure class="ertms-media-placeholder ertms-hero-media reveal" data-slot="ertms-hero.webp"><div class="ertms-media-icon" aria-hidden="true">01</div><figcaption><strong>Hero Image</strong><span>HSL-Zuid</span><small>Wikimedia Commons</small></figcaption><span class="ertms-media-chip">ETCS LEVEL 2</span></figure>`);

    setSection('what', `<div class="kicker">2.1</div><h2>What are ERTMS and ETCS?</h2><p><strong>ERTMS (European Rail Traffic Management System)</strong> is the European framework for railway control, command and communication. Its major components include <strong>ETCS</strong> for train protection and control, <strong>RMR</strong> for railway radio communication, and <strong>ATO</strong> for defined levels of automatic train operation.</p><p><strong>ETCS (European Train Control System)</strong> is the safety-critical train-control component. It checks whether a train is travelling too fast or approaching the end of its authorised movement, calculates appropriate braking supervision and can apply the brakes if the driver does not reduce speed as required.</p><div class="ertms-media-pair" aria-label="ERTMS components"><figure class="ertms-media-placeholder ertms-media-card" data-slot="ertms-dmi.webp"><div class="ertms-media-icon" aria-hidden="true">02</div><figcaption><strong>DMI</strong><span>Driver display</span><small>Wikimedia Commons</small></figcaption></figure><figure class="ertms-media-placeholder ertms-media-card" data-slot="ertms-balise.webp"><div class="ertms-media-icon" aria-hidden="true">03</div><figcaption><strong>Eurobalise</strong><span>Track-mounted beacon</span><small>Wikimedia Commons</small></figcaption></figure></div><div class="info-grid"><div class="info-card glass-card"><div class="icon">DMI</div><h3>Driver Machine Interface</h3><p>The standard cab display showing target speed, distance and ETCS status to the driver.</p></div><div class="info-card glass-card"><div class="icon">MA</div><h3>Movement Authority</h3><p>The limit and conditions defining how far and under what speed restrictions the train may move.</p></div><div class="info-card glass-card"><div class="icon">RBC</div><h3>Radio Block Centre</h3><p>The centre that receives infrastructure information and sends movement authorities to trains in ETCS Level 2.</p></div><div class="info-card glass-card"><div class="icon">B</div><h3>Eurobalise</h3><p>A track-mounted device that provides a position reference and transmits specific information to onboard ETCS equipment.</p></div></div>`);

    setSection('history', `<div class="kicker">2.2</div><h2>History of ERTMS/ETCS from the past to today</h2><p class="ertms-history-intro">Before ERTMS, European countries used many different national train-protection systems. International trains often needed several onboard systems at once. As cross-border rail traffic grew, Europe began developing a common standard that would allow trains and infrastructure from different countries to work together.</p><div class="ertms-history-timeline" aria-label="ERTMS and ETCS history timeline">
      <div class="ertms-milestone"><span class="ertms-year">1980s</span><div class="ertms-milestone-copy"><strong>Europe begins looking for a common standard</strong><span>European railways started discussing shared train-control concepts, while European research programmes explored how to overcome the incompatibility of national train-protection systems.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">1990</span><div class="ertms-milestone-copy"><strong>ERTMS Users’ Group is established</strong><span>Infrastructure managers from several countries worked together on the first ERTMS concepts and interoperability demonstrations.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">1996</span><div class="ertms-milestone-copy"><strong>Interoperability enters European law</strong><span>Directive 96/48/EC on the high-speed rail system established a legal framework for interoperable control-command and signalling.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">1998–2000</span><div class="ertms-milestone-copy"><strong>Industry helps define the standard and the first specification emerges</strong><span>UNISIG brought major signalling manufacturers together to develop detailed technical specifications. By 2000, a first ERTMS specification set provided the foundation for later versions.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2002</span><div class="ertms-milestone-copy"><strong>ERTMS becomes part of the high-speed rail TSI</strong><span>The European Commission incorporated ERTMS requirements into the Technical Specification for Interoperability for control-command and signalling on the European high-speed network.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2005–2006</span><div class="ertms-milestone-copy"><strong>From high-speed rail to the conventional network</strong><span>A European Memorandum of Understanding pushed deployment forward, and a CCS TSI for conventional rail followed in 2006, extending ERTMS beyond high-speed lines.</span></div><span class="ertms-scope eu">Europe</span></div>
      <figure class="ertms-media-placeholder ertms-history-media" data-slot="ertms-history.webp"><div class="ertms-media-icon" aria-hidden="true">04</div><figcaption><strong>Betuweroute</strong><span>Early Dutch ERTMS experience</span><small>Wikimedia Commons</small></figcaption></figure>
      <div class="ertms-milestone"><span class="ertms-year">2007–2012</span><div class="ertms-milestone-copy"><strong>The Netherlands gains operational ERTMS experience</strong><span>ERTMS entered service on major Dutch routes including the Betuweroute in 2007, HSL-Zuid in 2009 and Hanzelijn in 2012, giving the country practical experience before the nationwide migration programme.</span></div><span class="ertms-scope nl">Netherlands</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2012</span><div class="ertms-milestone-copy"><strong>High-speed and conventional requirements are brought together</strong><span>European control-command and signalling requirements were consolidated into a more unified framework covering both high-speed and conventional rail.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2014 / 2019</span><div class="ertms-milestone-copy"><strong>The Netherlands turns ERTMS into a national migration programme</strong><span>In 2014 the government selected ERTMS as the preferred long-term direction. On 17 May 2019 the Programmabeslissing ERTMS authorised the national implementation phase.</span></div><span class="ertms-scope nl">Netherlands</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2015–2017</span><div class="ertms-milestone-copy"><strong>Baseline 3 matures and European deployment planning becomes clearer</strong><span>Baseline 3 expanded functionality and addressed earlier limitations. Baseline 3 Release 2 appeared in 2016, while the revised European Deployment Plan of 2017 set clearer deployment priorities on the core network.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2019</span><div class="ertms-milestone-copy"><strong>ERA takes a stronger system-level role</strong><span>Under the Fourth Railway Package, the European Union Agency for Railways gained a stronger role in maintaining ERTMS compatibility and authorisation processes.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone"><span class="ertms-year">2023</span><div class="ertms-milestone-copy"><strong>Baseline 4 prepares ERTMS for the next digital railway generation</strong><span>The 2023 CCS TSI introduced Baseline 4 and supports developments such as ATO, FRMCS and future ETCS Level 2 evolution.</span></div><span class="ertms-scope eu">Europe</span></div>
      <div class="ertms-milestone current"><span class="ertms-year">2026</span><div class="ertms-milestone-copy"><strong>Deployment is expanding, but Europe still needs to accelerate</strong><span>The Third ERTMS Work Plan published in February 2026 reported that by the end of 2024 ETCS covered about 12,400 km, roughly 10% of the TEN-T network, while around 8,730 EU railway vehicles—about 19% of the fleet—had ETCS onboard. Progress continues, but deployment remains behind European targets.</span></div><span class="ertms-scope eu">Current</span></div>
      </div><div class="history-summary"><strong>In simple terms:</strong> ERTMS began as a solution to the problem of international trains carrying many national protection systems. It evolved into a common European standard, expanded from high-speed rail to the wider network and is now becoming a platform for more digital, connected and increasingly automated railway operation.</div>`);

    setSection('working', `<div class="kicker">2.3</div><h2>How ETCS Level 2 works</h2><p>In ETCS Level 2, the train and trackside system exchange information continuously over a radio network. Eurobalises and onboard odometry help establish the train’s position, while the ground system sends a <strong>Movement Authority</strong> defining how far the train may proceed.</p><p>The onboard computer combines route data, permitted speed and remaining distance to calculate braking curves. If the train is travelling too fast or approaching the end of its authority, the driver is warned and the system can automatically apply the brakes when necessary.</p><div class="ertms-working-layout"><div class="signal-diagram glass-card"><div class="diagram-flow"><div class="diagram-node"><strong>Interlocking</strong><small>Checks route and point status</small></div><div class="diagram-node"><strong>RBC / CSS</strong><small>Processes movement authority</small></div><div class="diagram-node"><strong>Radio link</strong><small>Exchanges data with the train</small></div><div class="diagram-node"><strong>EVC + DMI</strong><small>Calculates and displays supervision data</small></div><div class="diagram-node"><strong>Brake curve</strong><small>Supervises speed to a safe stopping point</small></div></div></div><figure class="ertms-media-placeholder ertms-level2-media" data-slot="ertms-level2.webp"><div class="ertms-media-icon" aria-hidden="true">05</div><figcaption><strong>ETCS Level 2</strong><span>System diagram</span><small>Wikimedia Commons</small></figcaption></figure></div><div class="callout"><strong>A major difference from ATB:</strong> ETCS does not only supervise a small number of speed levels. It also knows the train’s movement authority and continuously calculates when braking must begin so that the train can stop before the End of Authority.</div>`);

    setSection('netherlands', `<div class="kicker">Netherlands Design</div><h2>The approach chosen by the Netherlands</h2><p>The current Dutch migration programme is centred on <strong>ETCS Level 2</strong>. Routes are intended to become ERTMS-only once infrastructure, trains, staff and operating procedures have been tested and are ready. In the long term, this means ATB can be removed from routes that complete the migration.</p><p>During the transition, however, ERTMS-equipped trains still need to operate over ATB territory. <strong>STM-ATB (Specific Transmission Module)</strong> therefore acts as an interface that allows the onboard ERTMS equipment to receive and interpret ATB information until the network migration progresses further.</p><figure class="ertms-media-placeholder ertms-netherlands-media" data-slot="ertms-netherlands.webp"><div class="ertms-media-icon" aria-hidden="true">06</div><figcaption><strong>Hanzelijn</strong><span>Dutch ERTMS experience</span><small>Wikimedia Commons</small></figcaption></figure><div class="callout"><strong>For detailed Dutch deployment progress:</strong> see the <a href="status.html" style="color:#003082;font-weight:800">transition status page</a>, which follows the programme from early ERTMS routes through Tranche 1 and the latest 2026 developments.</div>`);

    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#what">2.1 What are ERTMS/ETCS?</a><a href="#history">2.2 History and timeline</a><a href="#working">2.3 How Level 2 works</a><a href="#netherlands">Dutch approach</a><a href="#sources">References</a>`);
  }

  function translateStatus() {
    setMeta('Transition Status | Netherlands Train System', 'The Dutch transition from ATB to ERTMS/ETCS, from early deployment to the latest 2026 status.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 03.1 • Updated 29 Aug 2026</div><h1>Transition status from <span style="color:#003082">ATB</span> to <span style="color:#003082">ERTMS/ETCS</span></h1><p class="hero-copy">The Netherlands is not replacing ATB with ERTMS across the whole country at once. ERTMS was first introduced on selected routes, later developed into a national programme, and is now being rolled out in controlled stages so that each area can be tested, problems can be solved, and lessons can be carried forward.</p></div><div class="page-badge glass-card reveal"><div class="big">419 km</div><p>Tranche 1 infrastructure scope: Northern Lines, Zeeuwse lijn and Kijfhoek–Belgian border</p></div>`);

    setSection('overview', `<div class="kicker">3.1</div><h2>2026 status at a glance</h2><p>Before the nationwide ATB replacement programme began, ERTMS was already in use on several important Dutch routes: the Betuweroute, HSL-Zuid, Hanzelijn and Amsterdam–Utrecht. Experience from these routes provides an important foundation for the current generation of the programme.</p><p>The national programme does not simply replace trackside equipment. Trains, control systems, infrastructure, software, operating rules and staff all need to work together safely under ERTMS Level 2. The current programme is therefore divided into controlled stages, or <strong>Tranches</strong>. Tranche 1 is intended to prove that the complete system can work together before deployment expands to more complex areas.</p><div class="stats"><div class="stat"><span class="stat-value">419</span><span class="stat-label">km of infrastructure in Tranche 1</span></div><div class="stat"><span class="stat-value">3</span><span class="stat-label">main Tranche 1 areas</span></div><div class="stat"><span class="stat-value">4</span><span class="stat-label">major routes with earlier ERTMS experience</span></div><div class="stat"><span class="stat-value">L2</span><span class="stat-label">main standard for the new deployment</span></div></div><div class="callout"><strong>Important status point:</strong> as of late August 2026, no final ERTMS commissioning date or ATB switch-off date has been officially fixed for each Tranche 1 area. Dates can still change as development and testing progress.</div>`);

    setSection('timeline', `<div class="kicker">Timeline</div><h2>From early ERTMS routes to a national migration programme</h2><div class="status-list">
      <div class="status-row"><strong>2007</strong><span><strong>Betuweroute</strong> opens with ERTMS, becoming one of the first Dutch routes to use the system in regular operation, especially for freight between the Port of Rotterdam and the German border.</span><span class="pill done">In service</span></div>
      <div class="status-row"><strong>2009</strong><span><strong>HSL-Zuid</strong> begins using ERTMS for high-speed services, giving the Netherlands experience in a very different operating environment from freight rail.</span><span class="pill done">In service</span></div>
      <div class="status-row"><strong>2012</strong><span><strong>Hanzelijn</strong> opens with ERTMS, extending practical use of the system into conventional passenger services.</span><span class="pill done">In service</span></div>
      <div class="status-row"><strong>Before 2017</strong><span><strong>Amsterdam–Utrecht</strong> is equipped with an earlier ETCS Level 2 implementation, meaning several major Dutch corridors already have operational ERTMS experience by 2017.</span><span class="pill done">Earlier ERTMS</span></div>
      <div class="status-row"><strong>2014</strong><span>The government and parliament approve the <strong>Voorkeursbeslissing ERTMS</strong>, selecting ERTMS as the national long-term direction and moving into detailed programme development.</span><span class="pill plan">National policy</span></div>
      <div class="status-row"><strong>2019</strong><span>The <strong>Programmabeslissing ERTMS</strong> of 17 May 2019 authorises the implementation phase, with the long-term objective of replacing legacy train-protection systems with ERTMS.</span><span class="pill plan">Implementation phase</span></div>
      <div class="status-row"><strong>2021</strong><span>The <strong>Northern Lines</strong> are added as a lower-complexity learning area, allowing the programme to test and solve problems before moving into denser corridors.</span><span class="pill work">Pilot area added</span></div>
      <div class="status-row"><strong>2023–2024</strong><span>Amsterdam–Utrecht and Hanzelijn are used for operational learning (<strong>ervaringsrijden</strong>), with older ERTMS installations brought closer to the programme’s future operating standard.</span><span class="pill work">Operational learning</span></div>
      <div class="status-row"><strong>Late 2024</strong><span>After reassessing cost, risk and schedule, the programme is reorganised into smaller, more controllable stages called <strong>Tranches</strong>.</span><span class="pill work">Plan recalibrated</span></div>
      <div class="status-row"><strong>2025</strong><span>Tranche 1 becomes clearer: Northern Lines, Zeeuwse lijn and Kijfhoek–Belgian border. STM-ATB supports ERTMS-equipped trains that still need to operate on ATB routes during the migration.</span><span class="pill work">Tranche 1</span></div>
      <div class="status-row"><strong>2026</strong><span>Physical construction and installation begin on <strong>Leeuwarden–Harlingen Haven</strong>, the first main Tranche 1 testing area, while design work progresses in Zeeland and preparation continues toward Kijfhoek–Belgian border.</span><span class="pill work">Construction/testing preparation</span></div>
    </div>`);

    setSection('decision', `<div class="kicker">National programme</div><h2>What changed in 2014 and 2019?</h2><p>ERTMS had already been used on selected Dutch routes, but 2014 marked the point when migration became an explicit national policy direction. In 2019, the government authorised the programme to move into implementation, with the long-term goal of replacing legacy national train-protection systems across the network.</p><p>The 2019 plan originally set objectives toward 2030, including equipping or upgrading around <strong>1,300 trains and locomotives</strong>, training at least <strong>15,000 users</strong> and converting an initial set of routes. The programme was later recalibrated into a Tranche-based approach, so those 2019 figures should be understood as part of the earlier plan rather than as the current commissioning schedule.</p>`);

    setSection('tranche1', `<div class="kicker">Tranche 1</div><h2>Current deployment sequence</h2><div class="signal-diagram glass-card"><div class="diagram-flow"><div class="diagram-node"><strong>1. Harlingen Haven–Leeuwarden</strong><small>Start with a less complex route to prove that the complete system works together.</small></div><div class="diagram-node"><strong>2. Zeeuwse lijn</strong><small>Add complexity by testing with multiple operators and a wider range of degraded scenarios.</small></div><div class="diagram-node"><strong>3. Kijfhoek–Belgian border</strong><small>Test the most complex environment: freight, cross-border operation and transitions between systems.</small></div><div class="diagram-node"><strong>4. Tranche 2+</strong><small>Use lessons from Tranche 1 to plan the next deployment areas.</small></div></div></div><div class="status-list" style="margin-top:24px"><div class="status-row"><strong>Northern Lines</strong><span>Harlingen Haven–Leeuwarden is the first route for detailed testing. If the system performs as intended, lessons from this corridor will be applied elsewhere on the Northern Lines.</span><span class="pill work">Field construction</span></div><div class="status-row"><strong>Zeeuwse lijn</strong><span>Vlissingen–aansluiting Lewedorp is planned as an initial test section before expansion to other parts of the Zeeuwse lijn.</span><span class="pill work">Design/testing preparation</span></div><div class="status-row"><strong>Kijfhoek–Belgian border</strong><span>The most complex Tranche 1 area, involving freight, international operators, cross-border running and transitions between train-protection systems.</span><span class="pill plan">Preparation</span></div></div>`);

    setSection('latest', `<div class="kicker">Latest • 2026</div><h2>Latest progress in 2026</h2><p>In 2026 the Leeuwarden–Harlingen Haven corridor moved into physical installation. The first Eurobalises were installed and cabling work took place around Franeker in April. During the 3–7 August possession, contractor Strukton installed <strong>82 additional balise locations</strong> to prepare the route for ERTMS.</p><p>Installing balises and cables does not mean the route immediately becomes operational under ERTMS. The system must still pass laboratory tests, simulations, integration tests and trials on the real railway. Only after the complete system has been demonstrated to be safe and ready can ERTMS commissioning and ATB removal be considered.</p><div class="callout"><strong>What to remember:</strong> at the end of August 2026, Leeuwarden–Harlingen Haven is still in the preparation and testing phase. It is not yet operating as a fully ERTMS-only railway.</div>`);

    setSection('systems', `<div class="kicker">Beyond the track</div><h2>The migration changes the whole railway system, not just the track</h2><p>Moving from ATB to ERTMS involves much more than installing balises or trackside equipment. Control systems, rolling stock, staff, digital systems and communications all need to be ready to work together.</p><div class="status-list"><div class="status-row"><strong>Central Safety System (CSS)</strong><span>A central safety system that processes information and controls key infrastructure functions—effectively one of the “brains” of the ERTMS architecture.</span><span class="pill work">Development/integration</span></div><div class="status-row"><strong>Rolling stock</strong><span>Trains need onboard ERTMS equipment or upgrades. During the migration, STM-ATB allows ERTMS-equipped vehicles to keep operating over ATB territory.</span><span class="pill work">Fleet conversion</span></div><div class="status-row"><strong>People and operating rules</strong><span>Drivers, traffic controllers, technicians and other staff need training, while operational rules and procedures must be adapted to the new system.</span><span class="pill work">Continuous training</span></div><div class="status-row"><strong>System integration and cybersecurity</strong><span>Onboard equipment, infrastructure, IT and communications must be tested together, with cybersecurity measures addressing the risks of a more digital railway.</span><span class="pill work">End-to-end testing</span></div></div>`);

    setSection('challenges', `<div class="kicker">Current reality</div><h2>Why the schedule changes and why deployment is staged</h2><p>ERTMS is a tightly interconnected programme. A delay in one element—such as the central system, onboard software, STM development, safety authorisation or staff readiness—can postpone commissioning elsewhere. The Netherlands therefore divides the migration into smaller stages so that problems can be solved and the system can be proven before the next step.</p><p>Progress reporting in 2025 showed that several milestones had moved beyond earlier schedules because critical elements such as the Central Safety System and the STM for ATB-NG vehicles required more time than expected. Older pre-recalibration dates should therefore not be interpreted as the current commissioning timetable.</p>`);

    setSection('future', `<div class="kicker">After 2026</div><h2>What happens after 2026?</h2><p>From early 2025, Programma ERTMS began preparing <strong>Tranche 2</strong> with railway-sector organisations and operators. In 2026, the government also published initial analysis for deployment after 2030, considering which areas should migrate first and how future stages should be organised.</p><p>The long-term objective remains to replace legacy national train-protection systems with the common European standard across more of the network. The pace will depend on Tranche 1 results, funding, technology and rolling-stock readiness, staff training, and European TEN-T requirements.</p>`);

    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#overview">2026 overview</a><a href="#timeline">Transition timeline</a><a href="#decision">2014 / 2019 decisions</a><a href="#tranche1">Tranche 1 plan</a><a href="#latest">2026 progress</a><a href="#systems">What must change together</a><a href="#challenges">Why schedules move</a><a href="#future">After 2026</a><a href="#sources">References</a>`);
  }

  function translateProblems() {
    setMeta('Problems and Challenges | Netherlands Train System', 'Challenges in the Dutch transition from ATB to ERTMS/ETCS.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 03.2</div><h1>Problems and challenges <span style="color:#ae1c28">during the migration</span></h1><p class="hero-copy">Moving to ERTMS is not simply an equipment replacement. It is a migration of the railway’s entire ecosystem—rolling stock, infrastructure, software, operating processes and people—to a new digital system.</p></div><div class="page-badge glass-card reveal"><div class="big">System-of-systems</div><p>Many risks arise from interfaces between systems rather than from a single component.</p></div>`);
    setSection('dual', `<div class="kicker">Challenge 01</div><h2>Operating ATB and ETCS at the same time</h2><p>During the migration, trains converted to ERTMS still need to run over ATB routes. STM-ATB therefore translates ATB information for the onboard ERTMS system. Hardware and software compatibility must be demonstrated before infrastructure migration can safely proceed.</p>`);
    setSection('integration', `<div class="kicker">Challenge 02</div><h2>Integrating trains, infrastructure and control centres</h2><div class="info-grid"><div class="info-card glass-card"><div class="icon">01</div><h3>Multiple suppliers</h3><p>Rolling-stock equipment, trackside equipment, interlockings and radio/CSS systems can come from different suppliers but must function as one system.</p></div><div class="info-card glass-card"><div class="icon">02</div><h3>Multiple software versions</h3><p>An update in one subsystem can affect compatibility elsewhere, requiring strict configuration management and regression testing.</p></div><div class="info-card glass-card"><div class="icon">03</div><h3>Multiple operators</h3><p>The Dutch network serves NS, regional passenger operators and freight companies, making testing and approvals more complex.</p></div><div class="info-card glass-card"><div class="icon">04</div><h3>Cross-border operation</h3><p>International trains must move safely between systems, particularly at interfaces with Belgium and Germany.</p></div></div>`);
    setSection('service', `<div class="kicker">Challenge 03</div><h2>Changing a railway that must keep running every day</h2><p>ERTMS installation takes place on one of Europe’s busiest railway networks. Track possessions, interlocking changes, balise installation and testing therefore need careful planning. ProRail notes that infrastructure conversion can cause disruption even when the programme works to minimise passenger impact.</p><div class="callout"><strong>Practical challenge:</strong> laboratory tests cannot reproduce every real-world situation. During testing of the tri-country train near Aachen, an incorrectly configured balise caused an automatic stop, requiring software correction and renewed testing.</div>`);
    setSection('people', `<div class="kicker">Challenge 04</div><h2>People and new operating procedures</h2><p>Drivers, traffic controllers, maintainers, testers and operations staff must learn new interfaces and procedures. Migration therefore requires training, competence certification and updated operating manuals alongside the technical programme.</p>`);
    setSection('cost', `<div class="kicker">Challenge 05</div><h2>Cost, time and scope management</h2><p>ERTMS is a long-term programme whose fleet conversion, central systems, infrastructure work and testing all depend on one another. A delay in one area can shift the wider schedule. This is one reason the Netherlands moved to a Tranche-based rollout, keeping each stage more controllable and allowing lessons to feed into the next.</p>`);
    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#dual">ATB + ETCS</a><a href="#integration">System integration</a><a href="#service">Service impact</a><a href="#people">People</a><a href="#cost">Cost and time</a><a href="#sources">References</a>`);
  }

  function translateComparison() {
    setMeta('Comparison with Neighbouring Countries | Netherlands Train System', 'A comparison of ETCS deployment in the Netherlands, Belgium and Germany.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 04.1</div><h1>Netherlands <span style="color:#ae1c28">×</span> Belgium <span style="color:#ae1c28">×</span> Germany</h1><p class="hero-copy">The three countries are tightly connected by rail, yet the pace and strategy of ETCS deployment differ significantly.</p></div><div class="page-badge glass-card reveal"><div class="big">3 countries</div><p>One European standard, three different migration paths.</p></div>`);
    setSection('cards', `<div class="kicker">Comparison</div><h2>Country overview</h2><div class="country-grid"><div class="country-card glass-card"><div class="flag nl"></div><h3>Netherlands</h3><div class="metric">Tranche-based</div><p>Starts with controlled learning and testing areas before wider rollout, with ETCS Level 2 at the centre of the programme and rolling-stock conversion preceding infrastructure change.</p></div><div class="country-card glass-card"><div class="flag be"></div><h3>Belgium</h3><div class="metric">79%*</div><p>At the end of 2024, Infrabel reported that 79% of main track was equipped with ETCS. The Masterplan targeted ETCS availability across the network by the end of 2025.</p></div><div class="country-card glass-card"><div class="flag de"></div><h3>Germany</h3><div class="metric">Corridor + nodes</div><p>Digital Rail Germany advances through major corridor and node projects, combining ETCS Level 2 with the modernisation of interlockings and wider digital railway architecture.</p></div></div><p style="font-size:.82rem;color:#536980">* The 79% figure is the value Infrabel published for 31 December 2024. It should not be interpreted as a 2026 coverage figure.</p>`);
    setSection('table', `<div class="kicker">Strategy</div><h2>Strategic comparison</h2><div class="compare-table-wrap"><table><thead><tr><th>Issue</th><th>Netherlands</th><th>Belgium</th><th>Germany</th></tr></thead><tbody><tr><td>Main legacy systems</td><td>ATB-EG / ATB-NG</td><td>TBL1+ and other legacy systems</td><td>PZB / LZB and other legacy systems</td></tr><tr><td>ETCS approach</td><td>Tranche rollout; ETCS L2 in the main programme scope</td><td>Mix of L1 FS, L1 LS and L2 FS under the Masterplan</td><td>Corridor/node projects; L2 plus digital interlocking</td></tr><tr><td>Migration pattern</td><td>Convert trains first, then infrastructure; use STM-ATB</td><td>Rapid network coverage using several ETCS levels</td><td>Combine ETCS with digital interlocking and corridor modernisation</td></tr><tr><td>Strength</td><td>Controlled learning through staged Tranches</td><td>High coverage and a clear national deadline structure</td><td>Integration with a large-scale digital railway architecture</td></tr><tr><td>Challenge</td><td>Coordinating rolling stock, infrastructure and central systems while limiting service disruption</td><td>Completing a large-volume rollout across multiple ETCS levels</td><td>Very large network and several technology layers changing at once</td></tr></tbody></table></div>`);
    setSection('border', `<div class="kicker">Cross-border</div><h2>Why this comparison matters to the Netherlands</h2><p>International railway routes do not stop at national borders. Trains from Amsterdam or Rotterdam to Brussels, Antwerp, Cologne or Frankfurt cross infrastructure managed by different countries. In the long term, ETCS should allow more of those trains to rely on one common train-control standard rather than carrying many national protection systems.</p><p>During the migration, however, system transitions and cross-border compatibility still need careful management. Germany’s Aachen–Düren project, for example, plans ETCS Level 2 and digital interlocking on an important border corridor, with commissioning targeted for 2029.</p>`);
    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#cards">Three-country overview</a><a href="#table">Comparison table</a><a href="#border">Cross-border issues</a><a href="#sources">References</a>`);
  }

  function translateImpact() {
    setMeta('Impact on Long-Distance Rail | Netherlands Train System', 'The impact of ERTMS/ETCS on long-distance rail services in the Netherlands.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 04.2</div><h1>Direct impact on <span style="color:#003082">long-distance rail services</span></h1><p class="hero-copy">ERTMS changes how trains are driven, timetables are managed, international services are supported and system reliability is maintained. During the migration, it also creates constraints around rolling-stock availability and testing possessions.</p></div><div class="page-badge glass-card reveal"><div class="big">Intercity + International</div><p>The effects are most visible on trains that travel long distances and cross multiple signalling systems.</p></div>`);
    setSection('effects', `<div class="kicker">Direct impact</div><h2>Six major effects</h2><div class="impact-grid"><div class="impact-card glass-card"><div class="num">01</div><h3>Safety</h3><p>ETCS continuously supervises speed and braking curves, reducing reliance on lineside signals alone and allowing automatic braking when a train approaches an unsafe limit.</p></div><div class="impact-card glass-card"><div class="num">02</div><h3>Cross-border operation</h3><p>A common standard can reduce the long-term need for international trains to carry several national protection systems, improving interoperability between the Netherlands, Belgium and Germany.</p></div><div class="impact-card glass-card"><div class="num">03</div><h3>Network capacity</h3><p>Digital position and movement supervision provide a foundation for more efficient headways and network use, although real capacity gains also depend on layout, timetable and other systems.</p></div><div class="impact-card glass-card"><div class="num">04</div><h3>Cab and operating practice</h3><p>Drivers rely more heavily on the DMI and must learn ETCS modes, transitions and procedures, making training and human factors especially important.</p></div><div class="impact-card glass-card"><div class="num">05</div><h3>Rolling-stock readiness</h3><p>Trains need onboard ETCS compatible with the route. During migration they may also need STM support for ATB, creating constraints for fleet planning and maintenance.</p></div><div class="impact-card glass-card"><div class="num">06</div><h3>Temporary passenger disruption</h3><p>Installation and testing can require possessions, timetable changes or temporary route restrictions. Long-term benefits therefore come with short- to medium-term migration costs.</p></div></div>`);
    setSection('longdistance', `<div class="kicker">Long-distance services</div><h2>Why long-distance trains are affected so directly</h2><p>Long-distance trains pass through more control areas and more types of infrastructure than local services. International trains also cross national borders and encounter several legacy systems. ETCS therefore offers some of its largest long-term interoperability benefits to this group.</p><p>Passengers do not directly “see” ETCS in the same way they see a station or a train interior. Its benefits are reflected instead in the potential for better safety, reliability, cross-border continuity and more efficient use of busy timetables.</p>`);
    setSection('balance', `<div class="kicker">Balanced view</div><h2>Long-term benefits vs migration burden</h2><div class="compare-table-wrap"><table><thead><tr><th>During migration</th><th>When the system is mature</th></tr></thead><tbody><tr><td>Trains need additional equipment and may support both ATB and ETCS</td><td>Less dependence on multiple national train-protection systems</td></tr><tr><td>Engineering possessions and test windows are required</td><td>A digital network ready for future capacity and automation improvements</td></tr><tr><td>Staff must learn new procedures</td><td>Standardised cab information and more detailed supervision</td></tr><tr><td>Integration and software-version risks</td><td>A stronger common technology base with other European railways</td></tr></tbody></table></div>`);
    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#effects">Six effects</a><a href="#longdistance">Long-distance services</a><a href="#balance">Migration vs long term</a><a href="#sources">References</a>`);
  }

  function translateOther() {
    setMeta('More | Netherlands Train System', 'Glossary and reference library for the Netherlands Train System website.');
    setText('.skip-link', 'Skip to content');
    setHTML('.page-hero .page-hero-inner', `<div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Reference Library</div><h1>More <span style="color:#003082">glossary and reference library</span></h1><p class="hero-copy">Key terminology and all major sources used across the website, grouped by chapter so that each claim can be traced back to the relevant material.</p></div><div class="page-badge glass-card reveal"><div class="big">6 Chapters</div><p>Home • ATB • ERTMS/ETCS • Status • Challenges • Comparison • Impact</p></div>`);

    const glossary = [
      ['ATB', 'Automatische TreinBeïnvloeding — the Netherlands’ national train-protection system.'],
      ['ATB-EG', 'Eerste Generatie — the first-generation ATB system, widely used on the main network with coded track circuits.'],
      ['ATB-Vv', 'An ATB enhancement that improves protection near stop signals, particularly at lower speeds.'],
      ['ERTMS', 'European Rail Traffic Management System — the European framework for railway control, command and communication.'],
      ['ETCS', 'European Train Control System — the train-control and protection component within ERTMS.'],
      ['RMR', 'Railway Mobile Radio — railway radio communications, including GSM-R and the future FRMCS.'],
      ['ATO', 'Automatic Train Operation — automated driving functions that can work alongside ETCS safety supervision.'],
      ['RBC', 'Radio Block Centre — the centre that sends Movement Authorities in ETCS Level 2.'],
      ['DMI', 'Driver Machine Interface — the standard driver display for ETCS information.'],
      ['STM-ATB', 'Specific Transmission Module — an interface allowing onboard ERTMS equipment to receive ATB information during migration.'],
      ['Eurobalise', 'A track-mounted beacon used for position reference and point-specific data transmission.'],
      ['Movement Authority', 'The limit and conditions under which a train is permitted to move.']
    ];
    const dl = document.querySelector('#glossary .glossary');
    if (dl) dl.innerHTML = glossary.map(([term, desc]) => `<div class="term glass-card"><dt>${term}</dt><dd>${desc}</dd></div>`).join('');
    setText('#glossary h2', 'Key terminology');

    setText('#method h2', 'How sources are used on this website');
    setHTML('#method p', 'Sources are organised by chapter so readers can see which documents support each topic. Historical and technical sections prioritise official and infrastructure documentation, while status information relies on programme documents and progress reports with clear publication dates.');
    setHTML('#method .callout', '<strong>Academic note:</strong> infrastructure targets, schedules and programme scope can change. Always check the latest source before using a date, milestone or figure in a final report.');

    setText('#sources h2', 'Reference library for the whole website');
    setText('#sources .reference-intro', 'Each group below identifies the chapter in which the source is used and links back to the relevant section.');

    const groups = [
      ['Home', 'History of Dutch railways and the role of NS', 'Used for the railway-history section'],
      ['Chapter 01 • 1.1–1.3', 'ATB: definition, history and operating principles', 'Used in ATB sections 1.1–1.3'],
      ['Chapter 02 • 2.1–2.3', 'ERTMS/ETCS: definition, history and operating principles', 'Used in ERTMS/ETCS sections 2.1–2.3'],
      ['Chapter 03.1', 'Status of the ATB → ERTMS/ETCS transition', 'Used for the timeline, Tranche 1 and 2026 status'],
      ['Chapter 03.2', 'Problems and challenges during migration', 'Used for dual operation, integration, service impact and cost'],
      ['Chapter 04.1', 'Comparison: Netherlands, Belgium and Germany', 'Used for country overview, strategy and cross-border issues'],
      ['Chapter 04.2', 'Direct impact on long-distance rail', 'Used for the six effects, long-distance services and transition balance']
    ];
    document.querySelectorAll('#sources .reference-group').forEach((group, index) => {
      const data = groups[index];
      if (!data) return;
      const chapter = group.querySelector('.reference-chapter');
      const h3 = group.querySelector('h3');
      const used = group.querySelector('.reference-used-in');
      if (chapter) chapter.textContent = data[0];
      if (h3) h3.textContent = data[1];
      if (used) used.textContent = data[2];
    });

    const noteMap = [
      'History of NS, organisational development and the Dutch railway sector.',
      'Responsibilities of NS and other organisations on the Dutch rail network.',
      'Background, development and limitations of ATB.',
      'ATB-EG, ATB-NG, ATB-Vv and network train-protection requirements.',
      'Primary source for the ERTMS historical timeline and European deployment development.',
      'Definitions of ERTMS, ETCS, RMR and ATO, plus ETCS levels and baselines.',
      '2023 CCS TSI, ATO, FRMCS and future ERTMS evolution.',
      'Latest European deployment progress and the Third ERTMS Work Plan.',
      'Dutch ERTMS approach, Level 2 strategy and programme rollout.',
      'STM-ATB and operation of ERTMS-equipped trains on ATB routes.',
      'ProRail’s role and ERTMS infrastructure programme.',
      'National policy decision establishing ERTMS as the preferred direction.',
      '2019 programme decision authorising implementation.',
      'Current Tranche 1 scope and rollout sequence.',
      'Explanation of the Tranche 1 learning approach.',
      'Programme recalibration and updated milestones.',
      '2026 programme progress and major issues.',
      'Field installation work on Leeuwarden–Harlingen Haven in 2026.',
      'Current ProRail ERTMS infrastructure projects.',
      'Dual operation between ATB and ETCS.',
      'Integration and testing lessons from the Aachen tri-country train.',
      'Migration requirements and infrastructure-work impact on operations.',
      'Belgian ETCS Masterplan and deployment targets.',
      'Belgian ETCS coverage data at the end of 2024.',
      'German ETCS Level 2 corridor implementation example.',
      'Cross-border ETCS and digital interlocking project near Aachen.',
      'Safety, capacity and interoperability context for long-term impacts.',
      'High-speed and international-services context.',
      'ERTMS-only infrastructure and rolling-stock migration requirements.'
    ];
    document.querySelectorAll('#sources .reference-source-note').forEach((note, index) => {
      if (noteMap[index]) note.textContent = noteMap[index];
    });

    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#glossary">Glossary</a><a href="#method">How sources are used</a><a href="#sources">Reference Library</a><a href="#ref-home">Home / NS history</a><a href="#ref-atb">1.1–1.3 ATB</a><a href="#ref-ertms">2.1–2.3 ERTMS/ETCS</a><a href="#ref-status">3.1 Status</a><a href="#ref-problems">3.2 Challenges</a><a href="#ref-comparison">4.1 Comparison</a><a href="#ref-impact">4.2 Impact</a>`);
  }

  const translators = {
    'index.html': translateHome,
    'atb.html': translateATB,
    'ertms.html': translateERTMS,
    'status.html': translateStatus,
    'problems.html': translateProblems,
    'comparison.html': translateComparison,
    'impact.html': translateImpact,
    'other.html': translateOther
  };

  window.applyEnglishContent = (page) => {
    document.documentElement.lang = 'en';
    const translator = translators[page];
    if (translator) translator();
  };
})();
