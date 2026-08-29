(() => {
  const applyImpactEnglish = () => {
    if (document.body.dataset.page !== 'impact.html' || document.body.dataset.lang !== 'en') return;

    const setHTML = (selector, html) => {
      const el = document.querySelector(selector);
      if (el) el.innerHTML = html;
    };

    setHTML('.page-hero .page-hero-inner', `<div class="reveal visible"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 04.2</div><h1>Direct impact on <span style="color:#003082">long-distance rail services</span></h1><p class="hero-copy">ERTMS/ETCS can improve safety and make European railways more interoperable, but the migration also requires many existing trains to be rebuilt, equipped, tested and temporarily taken out of service before they are ready for the new system.</p></div><div class="page-badge glass-card reveal visible"><div class="big">Intercity + International</div><p>The effects are most visible on trains that travel far, work intensively and cross several signalling systems.</p></div>`);

    setHTML('#effects', `<div class="kicker">Direct impact</div><h2>Six major effects</h2><div class="impact-grid">
      <div class="impact-card glass-card"><div class="num">01</div><h3>Safety</h3><p>ETCS continuously supervises speed, movement authority and braking. If a train approaches an unsafe limit, the system can warn the driver and intervene with braking.</p></div>
      <div class="impact-card glass-card"><div class="num">02</div><h3>Cross-border operation</h3><p>In the long term, a common standard can reduce the number of national train-protection systems carried by international trains, making travel between the Netherlands, Belgium and Germany easier as deployment progresses.</p></div>
      <div class="impact-card glass-card"><div class="num">03</div><h3>More efficient use of the network</h3><p>Digital position and movement supervision can support more precise train spacing. ETCS alone does not automatically create extra capacity; real gains also depend on infrastructure, timetables and the wider control system.</p></div>
      <div class="impact-card glass-card"><div class="num">04</div><h3>Cab and working practices change</h3><p>Drivers use the DMI for more safety-critical information and must learn ETCS modes, system transitions and procedures for degraded or abnormal situations.</p></div>
      <div class="impact-card glass-card"><div class="num">05</div><h3>Older trains need substantial modification</h3><p>Vehicles built before the ETCS era may need new computers, displays, radio equipment, antennas, sensors and cabling, all integrated with the train's existing systems.</p></div>
      <div class="impact-card glass-card"><div class="num">06</div><h3>Temporary pressure on fleet availability</h3><p>Vehicles undergoing installation and testing cannot operate normally for part of the retrofit period, so operators need careful workshop, spare-fleet and maintenance planning.</p></div>
    </div>`);

    setHTML('#retrofit', `<div class="kicker">Legacy Fleet Retrofit</div>
      <h2>Why fitting ETCS to an older train is a major engineering project</h2>
      <p class="retrofit-lead"><strong>Legacy fleets</strong> were designed before ETCS became the European standard. They therefore may not have spare space, electrical interfaces, communication links or software architecture prepared for ETCS equipment. Retrofitting is much more than adding a computer box: the new safety system has to work reliably with equipment that was designed years or even decades earlier.</p>

      <div class="retrofit-grid">
        <div class="retrofit-card info-card glass-card"><div class="retrofit-icon">SPACE</div><h3>1. Limited installation space</h3><p>Engineers need room for the ETCS on-board unit (OBU), DMI, radio equipment, antennas and positioning equipment. Older trains often use most available space already, so equipment may need to be moved or parts of the vehicle adapted.</p></div>
        <div class="retrofit-card info-card glass-card"><div class="retrofit-icon">ELEC</div><h3>2. Electrical and data compatibility</h3><p>ETCS must interface with power supplies, braking, speed measurement and existing train-control systems. Older vehicles can use different voltages, wiring arrangements and communication buses, requiring additional gateways or electrical modifications.</p></div>
        <div class="retrofit-card info-card glass-card"><div class="retrofit-icon">€</div><h3>3. Cost goes far beyond the hardware</h3><p>Total cost includes prototype engineering, installation, software, cabling, testing and safety authorisation. European Commission planning documents treat on-board retrofit and upgrades as a significant ERTMS investment category.</p></div>
        <div class="retrofit-card info-card glass-card"><div class="retrofit-icon">TIME</div><h3>4. Vehicles need workshop downtime</h3><p>Installation, wiring checks, software validation and railway testing all take time. A vehicle being converted is unavailable for normal service, so large fleets need a carefully phased workshop programme.</p></div>
        <div class="retrofit-card info-card glass-card"><div class="retrofit-icon">ATB</div><h3>5. Dutch trains still need ATB during migration</h3><p>Because the whole network does not change to ERTMS at once, converted trains still need to run over ATB territory. <strong>STM-ATB</strong> lets the onboard ERTMS equipment interpret ATB information, so the same train can support both systems during the transition.</p></div>
        <div class="retrofit-card info-card glass-card"><div class="retrofit-icon">AUTH</div><h3>6. Safety must be demonstrated after modification</h3><p>Major changes to an already authorised vehicle may involve assessment and authorisation. ERA explains that changes to vehicle types must be considered against applicable rules, verification requirements and the vehicle's intended area of use.</p></div>
      </div>

      <div class="virm-case glass-card">
        <div class="virm-case-head">
          <div><span>REAL DUTCH CASE STUDY</span><h3>VIRM shows why a retrofit is much bigger than installing one box</h3></div>
          <div class="virm-case-metric"><strong>176</strong><small>VIRM trainsets covered by the ETCS contract announced by NS in 2022</small></div>
        </div>
        <div class="virm-facts">
          <div class="virm-fact"><strong>Several new onboard systems</strong>NS described the retrofit as adding ETCS computers, digital communication equipment such as GSM-R and a driver display.</div>
          <div class="virm-fact"><strong>A large amount of new cabling</strong>In March 2026, Programma ERTMS presented the VIRM retrofit under the title “500 kilo nieuwe kabels voor de VIRM”, illustrating the physical scale of the wiring work.</div>
          <div class="virm-fact"><strong>The driving desk changes too</strong>The VIRM programme includes a redesigned driving desk and new ways for drivers to receive and use safety information.</div>
          <div class="virm-fact"><strong>ATB still matters during migration</strong>In 2025, NS successfully tested STM-ATB EG in a VIRM, allowing an ERTMS-equipped train to continue operating on ATB routes.</div>
        </div>
      </div>

      <div class="fleet-compare">
        <div class="legacy"><h3>Existing fleets such as VIRM / SLT / FLIRT</h3><p>These trains require onboard installation or modification and integration with their existing architecture. The engineering and testing therefore differs by vehicle series.</p></div>
        <div class="newer"><h3>Newer fleets such as SNG / ICNG</h3><p>NS stated that these newer trains already have ERTMS onboard, so the work focuses more on updates or upgrades to the required system version rather than a complete first-time retrofit.</p></div>
      </div>

      <div class="evidence-note"><strong>European scale:</strong> the European Coordinator for ERTMS Work Plan 2020 estimated about <strong>€5 billion</strong> for on-board retrofit and upgrades within the wider European deployment cost. This is a 2020 planning estimate—not the current Dutch budget—but it shows the scale of rolling-stock investment.</div>

      <div class="callout"><strong>The passenger impact is indirect:</strong> passengers do not see most ETCS retrofit work, but if many trains enter workshops at the same time, the number of vehicles available for service can temporarily fall. Operators therefore need to coordinate retrofit slots, spare trains and testing with the timetable.</div>

      <div class="source-list">
        <a class="source-link" href="https://www.eke-electronics.com/how-does-etcs-impact-legacy-fleets/" target="_blank" rel="noopener"><span>EKE-Electronics — How Does ETCS Impact Legacy Fleets? (space, electrical compatibility, cost and downtime)</span><span>↗</span></a>
        <a class="source-link" href="https://ertms.nl/nieuws/i/VZeMI/ns-start-met-implementatie-nieuw-beveiligingssysteem-treinen" target="_blank" rel="noopener"><span>Programma ERTMS / NS — VIRM retrofit programme and newer ETCS-equipped fleets</span><span>↗</span></a>
        <a class="source-link" href="https://ertms.nl/p/About%20ERTMS/i/LtPxh/kijk-in-de-praktijk-500-kilo-nieuwe-kabels-voor-de-virm" target="_blank" rel="noopener"><span>Programma ERTMS — VIRM: 500 kilo nieuwe kabels (19 March 2026)</span><span>↗</span></a>
        <a class="source-link" href="https://ertms.nl/kennisbank/i/eUyTD/stm-atb" target="_blank" rel="noopener"><span>Programma ERTMS — STM-ATB and dual ATB + ERTMS operation during migration</span><span>↗</span></a>
        <a class="source-link" href="https://www.era.europa.eu/domains/applicants/applications-vehicle-type-authorisations_en" target="_blank" rel="noopener"><span>European Union Agency for Railways — Vehicle authorisation after vehicle changes</span><span>↗</span></a>
        <a class="source-link" href="https://transport.ec.europa.eu/system/files/2022-09/work_plan_ertms_2020.pdf" target="_blank" rel="noopener"><span>European Commission — ERTMS Work Plan 2020: on-board retrofit and upgrade cost estimate</span><span>↗</span></a>
      </div>`);

    setHTML('#longdistance', `<div class="kicker">Long-distance services</div><h2>Why long-distance trains are affected so directly</h2><p>Long-distance trains cross more control areas and normally operate intensively for long periods. International services also cross borders and encounter several national signalling systems, making onboard compatibility especially important.</p><p>Passengers do not “see” ETCS in the same way they see seats or stations. Its benefits are reflected indirectly through safety, operational reliability, cross-border continuity and the future ability to run a more digitally managed railway.</p>`);

    setHTML('#balance', `<div class="kicker">Balanced view</div><h2>Long-term benefits and the burden of migration</h2><div class="compare-table-wrap"><table><thead><tr><th>During migration</th><th>When the system is mature</th></tr></thead><tbody><tr><td>Existing trains need extra equipment and may support both ATB and ETCS</td><td>Less dependence on several national train-protection systems</td></tr><tr><td>Some trains leave service temporarily for retrofit and testing</td><td>Converted trains can make wider use of the common ETCS standard</td></tr><tr><td>Staff need training for new displays and procedures</td><td>More standardised cab information and more detailed speed supervision</td></tr><tr><td>Legacy hardware and software must be safely integrated with new technology</td><td>A common technical foundation for future digital railway development</td></tr></tbody></table></div>`);

    setHTML('.aside', `<p class="aside-title">On this page</p><a href="#effects">Six effects</a><a href="#retrofit">Legacy fleet ETCS retrofit</a><a href="#longdistance">Long-distance services</a><a href="#balance">Migration vs long term</a><a href="other.html?lang=en#ref-impact">References</a>`);
  };

  if (document.readyState === 'complete') applyImpactEnglish();
  else window.addEventListener('load', applyImpactEnglish, { once: true });
})();