(() => {
  if (!document.querySelector('link[href^="image-lightbox.css"]')) {
    const lightboxStyles = document.createElement('link');
    lightboxStyles.rel = 'stylesheet';
    lightboxStyles.href = 'image-lightbox.css?v=20260831-1';
    document.head.appendChild(lightboxStyles);
  }
  if (!document.querySelector('script[src^="image-lightbox.js"]')) {
    const lightboxScript = document.createElement('script');
    lightboxScript.src = 'image-lightbox.js?v=20260831-1';
    lightboxScript.async = true;
    document.head.appendChild(lightboxScript);
  }
})();

(() => {
  const lang = () => document.documentElement.lang === 'en' || document.body.dataset.lang === 'en' ? 'en' : 'th';
  const terms = [
    ['STM-ATB', ['STM-ATB-NG','STM ATB-NG','STM-ATB','STM ATB'], 'โมดูลตัวกลางที่ทำให้รถซึ่งติด ERTMS ยังอ่านข้อมูล ATB เดิมได้ในช่วงเปลี่ยนผ่าน', 'A translation module that lets an ERTMS-equipped train continue to understand legacy ATB information during migration.', 'problems.html#dual'],
    ['ATB-EG', ['ATB-EG'], 'ATB รุ่นแรกที่ใช้แพร่หลายบนโครงข่ายหลัก และตรวจความเร็วเป็นระดับผ่านข้อมูลจากราง', 'The first-generation ATB system widely used on the Dutch main network, supervising fixed speed steps through track information.', 'other.html#ref-atb'],
    ['ATB-NG', ['ATB-NG'], 'ATB รุ่นใหม่กว่าที่ตรวจความเร็วและการเบรกได้ละเอียดกว่า ATB-EG และใช้บนบางเส้นทางภูมิภาค', 'A newer ATB variant with more detailed speed and braking supervision, used on selected regional routes.', 'other.html#ref-atb'],
    ['ATB-Vv', ['ATB-Vv'], 'ส่วนเสริมของ ATB-EG ที่เพิ่มการป้องกันบริเวณใกล้สัญญาณหยุด โดยเฉพาะช่วงความเร็วต่ำ', 'An ATB-EG add-on providing extra protection near stop signals, especially at low speed.', 'other.html#ref-atb'],
    ['ERTMS', ['ERTMS'], 'กรอบมาตรฐานยุโรปสำหรับการควบคุม การป้องกัน และการสื่อสารของระบบรถไฟ', 'The European framework for railway control, protection and communications.', 'https://transport.ec.europa.eu/transport-modes/rail/ertms/faq-ertms_en'],
    ['ETCS', ['ETCS'], 'ระบบควบคุมและป้องกันรถไฟภายใต้ ERTMS ตรวจความเร็ว ระยะที่อนุญาต และการเบรกของรถ', 'The train-control and protection system within ERTMS, supervising speed, movement authority and braking.', 'https://transport.ec.europa.eu/transport-modes/rail/ertms/faq-ertms_en'],
    ['RBC', ['RBC'], 'Radio Block Centre — ศูนย์ที่คำนวณและส่ง Movement Authority ใน ETCS Level 2', 'Radio Block Centre — the control centre that calculates and sends Movement Authority in ETCS Level 2.', 'other.html#glossary'],
    ['DMI', ['DMI'], 'Driver Machine Interface — หน้าจอในห้องขับที่แสดงข้อมูล ETCS เช่น ความเร็วเป้าหมายและระยะทาง', 'Driver Machine Interface — the cab display showing ETCS information such as target speed and distance.', 'other.html#glossary'],
    ['Eurobalise', ['Eurobalises','Eurobalise'], 'บีคอนที่ติดตั้งบนทาง ใช้ส่งข้อมูลเฉพาะจุดและช่วยให้ ETCS อ้างอิงตำแหน่งรถไฟ', 'A track-mounted beacon that transmits spot information and helps ETCS establish train position.', 'other.html#glossary'],
    ['Movement Authority', ['Movement Authority'], 'ขอบเขตที่ระบบอนุญาตให้รถไฟเคลื่อนที่ไปได้ พร้อมเงื่อนไขด้านระยะทางและความเร็ว', 'The limit up to which a train is authorised to move, together with distance and speed conditions.', 'other.html#glossary'],
    ['GSM-R', ['GSM-R'], 'ระบบวิทยุสื่อสารดิจิทัลสำหรับรถไฟ ใช้รับส่งเสียงและข้อมูลระหว่างรถกับระบบภาคพื้น', 'A digital railway radio system used for voice and data communication between trains and ground systems.', 'https://transport.ec.europa.eu/transport-modes/rail/ertms/faq-ertms_en'],
    ['FRMCS', ['FRMCS'], 'ระบบสื่อสารรถไฟยุคใหม่ที่พัฒนาขึ้นเพื่อรับช่วงต่อจาก GSM-R', 'The next-generation railway communications system designed to succeed GSM-R.', 'https://transport.ec.europa.eu/transport-modes/rail/ertms/preparing-future-evolution_en'],
    ['ATO', ['ATO'], 'Automatic Train Operation — ระบบช่วยเดินรถอัตโนมัติที่ทำงานร่วมกับชั้นความปลอดภัยของ ETCS', 'Automatic Train Operation — automatic-driving functionality working with the ETCS safety layer.', 'https://transport.ec.europa.eu/transport-modes/rail/ertms/faq-ertms_en'],
    ['Tranche', ['Tranche','tranche'], 'การแบ่งโครงการออกเป็นช่วงย่อย เพื่อพัฒนา ทดสอบ และเปิดใช้ทีละพื้นที่', 'A project stage that divides deployment into smaller packages for testing and commissioning area by area.', 'status.html#tranche1'],
    ['Interlocking', ['Interlocking','interlocking'], 'ระบบที่ควบคุมเส้นทาง ประแจ และสัญญาณ เพื่อป้องกันการจัดเส้นทางที่ขัดแย้งหรือไม่ปลอดภัย', 'The system controlling routes, points and signals so conflicting or unsafe routes cannot be set.', 'ertms.html#working'],
    ['Retrofit', ['Retrofitting','retrofitting','Retrofit','retrofit'], 'การติดตั้งหรือปรับเพิ่มระบบใหม่ให้กับรถไฟรุ่นเดิมที่ไม่ได้ออกแบบมาสำหรับระบบนั้นตั้งแต่แรก', 'Adding or integrating new equipment into an older train that was not originally designed for that system.', 'impact.html#retrofit'],
    ['OBU', ['OBU'], 'On-Board Unit — ชุดคอมพิวเตอร์และอุปกรณ์ ETCS ที่ติดตั้งอยู่บนขบวนรถ', 'On-Board Unit — the ETCS computer and equipment installed on the train.', 'impact.html#retrofit'],
    ['VIRM', ['VIRM'], 'รถไฟโดยสารสองชั้นของ NS และเป็นหนึ่งในกองรถรุ่นเดิมที่ต้องติดตั้ง ERTMS เพิ่ม', 'An NS double-deck passenger train type and one of the legacy fleets being equipped with ERTMS.', 'impact.html#virm-case'],
    ['ProRail', ['ProRail'], 'ผู้จัดการโครงสร้างพื้นฐานทางรถไฟของเนเธอร์แลนด์ รับผิดชอบทาง สัญญาณ และการบริหารโครงข่าย', 'The Dutch railway infrastructure manager, responsible for track, signalling and network management.', 'https://www.prorail.nl/']
  ];

  const patternMap = new Map();
  const patterns = [];
  terms.forEach((term, index) => term[1].forEach((pattern) => { patternMap.set(pattern, index); patterns.push(pattern); }));
  patterns.sort((a,b) => b.length - a.length);
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx = new RegExp(`(${patterns.map(esc).join('|')})`, 'g');

  const localize = (href) => {
    if (lang() !== 'en' || /^https?:/i.test(href) || !href.includes('.html')) return href;
    const parts = href.split('#');
    return `${parts[0]}?lang=en${parts[1] ? `#${parts[1]}` : ''}`;
  };

  const skip = (node) => Boolean(node.parentElement?.closest('a,button,code,pre,script,style,.glossary,.reference-list,.nav-links,.site-footer,h1,h2,h3,h4,.kicker,.eyebrow'));

  const decorateScope = (scope) => {
    const seen = new Set(Array.from(scope.querySelectorAll('[data-rail-term]')).map((el) => el.dataset.railTerm));
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue?.trim() || skip(node)) continue;
      rx.lastIndex = 0;
      if (rx.test(node.nodeValue)) nodes.push(node);
    }

    nodes.forEach((textNode) => {
      const text = textNode.nodeValue;
      rx.lastIndex = 0;
      let match, last = 0, changed = false;
      const fragment = document.createDocumentFragment();
      while ((match = rx.exec(text))) {
        const index = patternMap.get(match[0]);
        const term = terms[index];
        if (!term || seen.has(term[0])) continue;
        fragment.appendChild(document.createTextNode(text.slice(last, match.index)));
        const link = document.createElement('a');
        link.className = 'rail-term-link';
        link.dataset.railTerm = term[0];
        link.dataset.definition = term[lang() === 'en' ? 3 : 2];
        link.href = localize(term[4]);
        if (/^https?:/i.test(term[4])) { link.target = '_blank'; link.rel = 'noopener'; }
        link.title = term[lang() === 'en' ? 3 : 2];
        link.setAttribute('aria-label', `${match[0]}: ${term[lang() === 'en' ? 3 : 2]}`);
        link.textContent = match[0];
        fragment.appendChild(link);
        last = match.index + match[0].length;
        seen.add(term[0]);
        changed = true;
      }
      if (!changed) return;
      fragment.appendChild(document.createTextNode(text.slice(last)));
      textNode.replaceWith(fragment);
    });
  };

  const decorate = (root = document) => {
    const scopes = [];
    if (root instanceof Element && root.matches('.article-section,.hero-copy,.page-badge')) scopes.push(root);
    root.querySelectorAll?.('.article-section,.hero-copy,.page-badge').forEach((el) => scopes.push(el));
    if (root === document) document.querySelectorAll('.article-section,.hero-copy,.page-badge').forEach((el) => scopes.push(el));
    [...new Set(scopes)].forEach(decorateScope);
  };

  const init = () => {
    decorate(document);
    let frame = 0;
    const observer = new MutationObserver((mutations) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => { if (node instanceof Element) decorate(node); }));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
  else init();
})();
