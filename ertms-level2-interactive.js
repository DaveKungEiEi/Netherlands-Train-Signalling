(() => {
  const root = document.querySelector('[data-etcs-l2-interactive]');
  if (!root || root.dataset.etcsReady === 'true') return;
  root.dataset.etcsReady = 'true';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lang = document.documentElement.lang === 'en' ? 'en' : 'th';

  const copy = {
    th: {
      ui: {
        kicker: 'INTERACTIVE • ETCS LEVEL 2',
        title: 'จากทางรถไฟถึงหน้าจอ DMI — ETCS Level 2 ทำงานอย่างไร',
        intro: 'กดหมายเลข 1–8 เพื่อดูข้อมูลไหลผ่านระบบทีละขั้น หรือกดเล่นอัตโนมัติเพื่อดูวงจรทั้งหมด',
        cycleTitle: 'ทำไมขั้นที่ 8 จึงกลับไปขั้นที่ 4?',
        cycleText: 'เพราะ ETCS Level 2 เป็นการควบคุมแบบต่อเนื่อง รถไฟจะรายงานตำแหน่งและทิศทางกลับไปยัง RBC ซ้ำ ๆ และ RBC สามารถอัปเดต Movement Authority / ข้อมูลเส้นทางให้รถได้ตลอดการเดินรถ ไม่ใช่การส่งคำสั่งเพียงครั้งเดียว',
        sourceLabel: 'ตรวจสอบหลักการจาก:',
        scopeTitle: 'ขอบเขตของภาพนี้',
        scopeText: 'Interactive นี้อธิบายกรณีเดียวกับรูป European Commission ที่คุณส่งมา ซึ่งการตรวจว่าช่วงทางว่างและการตรวจความครบถ้วนของขบวนรถยังทำโดยระบบ trackside นอกขอบเขต ERTMS โดยตรง ปัจจุบัน CCS TSI 2023 รวมฟังก์ชันที่เดิมเรียก ETCS Level 3 เข้ามาอยู่ภายใต้ Level 2 ด้วย จึงมีรูปแบบ Level 2 อื่นที่จัดการตำแหน่ง/ความครบถ้วนของขบวนภายใน ERTMS ได้มากขึ้น'
      },
      play: 'เล่นอัตโนมัติ',
      pause: 'หยุดชั่วคราว',
      progress: (n) => `ขั้นที่ ${n} จาก 8`,
      steps: [
        {
          short: 'ตรวจสอบเส้นทาง',
          label: 'ตรวจทาง',
          title: 'ระบบตรวจจับขบวนรถยืนยันว่าช่วงทางพร้อมใช้งาน',
          copy: 'ก่อนอนุญาตให้รถเคลื่อนที่ ระบบภาคพื้นต้องรู้ว่าส่วนทางด้านหน้าว่างและเส้นทางปลอดภัย ข้อมูลการครอบครองทางจาก track circuit หรือ axle counter จะถูกรายงานเข้าสู่ระบบ interlocking',
          from: 'Track detection', to: 'Interlocking'
        },
        {
          short: 'INTERLOCKING',
          label: 'Interlocking',
          title: 'Interlocking ตรวจเงื่อนไขความปลอดภัยและสถานะเส้นทาง',
          copy: 'Interlocking ตรวจว่าประแจ เส้นทาง และการครอบครองทางอยู่ในสภาพที่อนุญาตให้เดินรถได้ จากนั้นส่งข้อมูลสถานะเส้นทางที่ปลอดภัยให้ Radio Block Centre หรือ RBC ใช้เป็นข้อมูลประกอบการออก Movement Authority',
          from: 'Interlocking', to: 'RBC'
        },
        {
          short: 'POSITION REFERENCE',
          label: 'ตำแหน่ง',
          title: 'Eurobalise ให้จุดอ้างอิงตำแหน่งแก่รถไฟ',
          copy: 'เมื่อรถผ่าน Eurobalise ระบบบนรถได้รับตำแหน่งอ้างอิงที่ทราบแน่นอน แล้ว EVC ใช้ร่วมกับ odometry ของรถเพื่อคำนวณตำแหน่งต่อเนื่อง Eurobalise ใน Level 2 จึงทำหน้าที่คล้าย electronic reference point มากกว่าการส่ง Movement Authority แบบ Level 1',
          from: 'Eurobalise + odometry', to: 'EVC'
        },
        {
          short: 'POSITION REPORT',
          label: 'Position report',
          title: 'รถไฟส่ง Position Report และทิศทางไปยัง RBC',
          copy: 'ETCS onboard ส่งข้อมูลตำแหน่งและทิศทางการเคลื่อนที่ของรถกลับไปยัง RBC ผ่านการสื่อสารทางวิทยุอย่างต่อเนื่อง ทำให้ RBC ทราบว่ารถแต่ละขบวนอยู่ตรงไหนในพื้นที่ที่ตนดูแล',
          from: 'Train / EVC', to: 'RBC'
        },
        {
          short: 'RBC PROCESSING',
          label: 'RBC',
          title: 'RBC รวมข้อมูลตำแหน่งรถกับสถานะเส้นทาง',
          copy: 'RBC เป็นหน่วยความปลอดภัยภาคพื้นที่รับ Position Report จากรถและรับข้อมูล route / occupancy จาก interlocking จากนั้นจึงกำหนดขอบเขตที่รถสามารถเคลื่อนที่ได้อย่างปลอดภัย',
          from: 'Position + route status', to: 'Movement Authority'
        },
        {
          short: 'MOVEMENT AUTHORITY',
          label: 'Movement Authority',
          title: 'RBC ส่ง Movement Authority และข้อมูลทางกลับไปยังรถ',
          copy: 'Movement Authority ระบุว่ารถได้รับอนุญาตให้ไปได้ไกลแค่ไหน พร้อมข้อมูลเส้นทางและข้อจำกัดที่เกี่ยวข้อง ข้อมูลนี้ส่งกลับไปยัง ETCS onboard ผ่าน RMR ซึ่งภาพต้นฉบับปี 2020 ระบุเป็น GSM-R',
          from: 'RBC', to: 'Train / EVC'
        },
        {
          short: 'EVC + DMI',
          label: 'EVC + DMI',
          title: 'EVC คำนวณความเร็วที่อนุญาตและเส้นโค้งการเบรก',
          copy: 'European Vital Computer ประมวล Movement Authority ข้อมูลเส้นทาง ตำแหน่งรถ และสมรรถนะการเบรก จากนั้นคำนวณ permitted speed / braking curve และแสดงข้อมูลสำคัญ เช่น target speed และ distance to target บน DMI ให้พนักงานขับ',
          from: 'EVC', to: 'DMI / Driver'
        },
        {
          short: 'CONTINUOUS SUPERVISION',
          label: 'Supervision',
          title: 'ETCS เฝ้าระวังต่อเนื่อง และแทรกแซงเมื่อเกินขีดจำกัด',
          copy: 'ระหว่างรถเคลื่อนที่ ETCS onboard เปรียบเทียบความเร็วจริงกับขีดจำกัดที่คำนวณตลอดเวลา หากรถเข้าใกล้ End of Authority หรือเร็วเกินเส้นโค้งที่ปลอดภัย ระบบจะเตือนและสามารถสั่งเบรกได้ จากนั้นรถจะส่ง Position Report ใหม่และวงจรเริ่มซ้ำอีกครั้ง',
          from: 'Continuous supervision', to: 'Position report → RBC'
        }
      ]
    },
    en: {
      ui: {
        kicker: 'INTERACTIVE • ETCS LEVEL 2',
        title: 'From trackside to the DMI — how ETCS Level 2 works',
        intro: 'Select steps 1–8 to follow the data flow, or use Auto Play to watch the whole control loop.',
        cycleTitle: 'Why does step 8 loop back to step 4?',
        cycleText: 'ETCS Level 2 is continuously supervised. The train repeatedly sends its position and direction to the RBC, while the RBC can continuously update the Movement Authority and track data as the train moves.',
        sourceLabel: 'Principle checked against:',
        scopeTitle: 'Scope of this diagram',
        scopeText: 'This interactive follows the European Commission diagram you shared, where track vacancy and train-integrity checks are performed by trackside systems outside ERTMS itself. CCS TSI 2023 merged functionality previously described as Level 3 into Level 2, so other Level 2 implementations may manage train location and integrity within ERTMS to a greater extent.'
      },
      play: 'Auto Play',
      pause: 'Pause',
      progress: (n) => `Step ${n} of 8`,
      steps: [
        { short:'TRACK CLEAR', label:'Track clear', title:'Trackside detection confirms that the route ahead is available', copy:'Before movement can be authorised, trackside systems must know whether the section ahead is clear. Occupancy information from track circuits or axle counters is reported to the interlocking.', from:'Track detection', to:'Interlocking' },
        { short:'INTERLOCKING', label:'Interlocking', title:'The interlocking checks route safety and route state', copy:'The interlocking verifies points, route locking and track occupancy. It then passes safe route status to the Radio Block Centre for use when issuing a Movement Authority.', from:'Interlocking', to:'RBC' },
        { short:'POSITION REFERENCE', label:'Position', title:'Eurobalises provide fixed position references to the train', copy:'When the train passes a Eurobalise, onboard ETCS receives a known reference location. The EVC combines that reference with train odometry to maintain a continuous position estimate.', from:'Eurobalise + odometry', to:'EVC' },
        { short:'POSITION REPORT', label:'Position report', title:'The train sends position reports and direction to the RBC', copy:'ETCS onboard reports the train position and direction to the RBC over the radio link, allowing the RBC to know where supervised trains are within its area.', from:'Train / EVC', to:'RBC' },
        { short:'RBC PROCESSING', label:'RBC', title:'The RBC combines train position with route status', copy:'The RBC receives train position reports and interlocking information, then determines how far the train may safely proceed.', from:'Position + route status', to:'Movement Authority' },
        { short:'MOVEMENT AUTHORITY', label:'Movement Authority', title:'The RBC sends the Movement Authority and track data to the train', copy:'The Movement Authority defines how far the train may proceed together with relevant track and speed information. It is sent to ETCS onboard via RMR; the 2020 source diagram labels the radio system as GSM-R.', from:'RBC', to:'Train / EVC' },
        { short:'EVC + DMI', label:'EVC + DMI', title:'The EVC calculates permitted speed and braking supervision', copy:'The European Vital Computer combines the Movement Authority, track data, train position and braking performance to calculate permitted speed and braking curves, then presents target information on the DMI.', from:'EVC', to:'DMI / Driver' },
        { short:'CONTINUOUS SUPERVISION', label:'Supervision', title:'ETCS supervises continuously and intervenes when limits are exceeded', copy:'While the train moves, onboard ETCS continuously compares actual movement with the safe limits. It warns the driver and can command braking when necessary. A new position report is then sent and the loop continues.', from:'Continuous supervision', to:'Position report → RBC' }
      ]
    }
  };

  const t = copy[lang];
  const stepNumber = root.querySelector('[data-etcs-step-number]');
  const stepShort = root.querySelector('[data-etcs-step-short]');
  const stepTitle = root.querySelector('[data-etcs-step-title]');
  const stepCopy = root.querySelector('[data-etcs-step-copy]');
  const flowFrom = root.querySelector('[data-etcs-flow-from]');
  const flowTo = root.querySelector('[data-etcs-flow-to]');
  const progressText = root.querySelector('[data-etcs-progress-text]');
  const playButton = root.querySelector('[data-etcs-play]');
  const playLabel = root.querySelector('[data-etcs-play-label]');
  const playIcon = root.querySelector('.etcs-l2-play-icon');
  const prevButton = root.querySelector('[data-etcs-prev]');
  const nextButton = root.querySelector('[data-etcs-next]');
  const selectors = Array.from(root.querySelectorAll('[data-etcs-step-select]'));
  const paths = Array.from(root.querySelectorAll('[data-etcs-path]'));

  Object.entries(t.ui).forEach(([key, value]) => {
    const node = root.querySelector(`[data-etcs-ui="${key}"]`);
    if (node) node.textContent = value;
  });

  t.steps.forEach((step, index) => {
    root.querySelectorAll(`[data-etcs-step-label="${index + 1}"]`).forEach((node) => {
      node.textContent = step.label;
    });
    root.querySelectorAll(`[data-etcs-step-select="${index + 1}"]`).forEach((node) => {
      node.setAttribute('aria-label', `${lang === 'th' ? 'ขั้นที่' : 'Step'} ${index + 1}: ${step.title}`);
    });
  });

  if (lang === 'en') {
    prevButton.setAttribute('aria-label', 'Previous step');
    nextButton.setAttribute('aria-label', 'Next step');
    root.querySelector('.etcs-l2-controls')?.setAttribute('aria-label', 'ETCS Level 2 animation controls');
    root.querySelector('.etcs-l2-step-strip')?.setAttribute('aria-label', 'Choose a working step');
    const image = root.querySelector('.etcs-l2-visual > img');
    if (image) image.alt = 'European Commission ETCS Level 2 diagram showing Eurocab, GSM-R, Eurobalise, RBC, interlocking and track release reporting';
  }

  let current = 0;
  let timer = null;
  let playing = false;
  let userPaused = false;
  let hasAutoStarted = false;

  function render(index) {
    current = (index + t.steps.length) % t.steps.length;
    const step = t.steps[current];
    const n = current + 1;

    root.dataset.etcsStep = String(n);
    stepNumber.textContent = String(n).padStart(2, '0');
    stepShort.textContent = step.short;
    stepTitle.textContent = step.title;
    stepCopy.textContent = step.copy;
    flowFrom.textContent = step.from;
    flowTo.textContent = step.to;
    progressText.textContent = t.progress(n);

    selectors.forEach((button) => {
      const active = Number(button.dataset.etcsStepSelect) === n;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });

    paths.forEach((path) => {
      path.classList.toggle('is-active', Number(path.dataset.etcsPath) === n);
    });
  }

  function syncPlayButton() {
    playButton.setAttribute('aria-pressed', playing ? 'true' : 'false');
    playLabel.textContent = playing ? t.pause : t.play;
    playIcon.textContent = playing ? 'Ⅱ' : '▶';
  }

  function stopTimer() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
    playing = false;
    syncPlayButton();
  }

  function startTimer() {
    if (reduceMotion || playing) return;
    stopTimer();
    playing = true;
    syncPlayButton();
    timer = window.setInterval(() => render(current + 1), 3600);
  }

  selectors.forEach((button) => {
    button.addEventListener('click', () => {
      userPaused = true;
      stopTimer();
      render(Number(button.dataset.etcsStepSelect) - 1);
    });
  });

  prevButton.addEventListener('click', () => {
    userPaused = true;
    stopTimer();
    render(current - 1);
  });

  nextButton.addEventListener('click', () => {
    userPaused = true;
    stopTimer();
    render(current + 1);
  });

  playButton.addEventListener('click', () => {
    if (playing) {
      userPaused = true;
      stopTimer();
    } else {
      userPaused = false;
      startTimer();
    }
  });

  render(0);
  syncPlayButton();

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio >= .45) {
        if (!hasAutoStarted) {
          hasAutoStarted = true;
          startTimer();
        } else if (!userPaused && !playing) {
          startTimer();
        }
      } else if (playing) {
        stopTimer();
      }
    }, { threshold: [0, .45, .7] });
    observer.observe(root);
  }
})();