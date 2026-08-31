(() => {
  if (document.body.dataset.page !== 'summary.html') return;

  if (!document.querySelector('link[href="summary-style.css"]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'summary-style.css';
    document.head.appendChild(stylesheet);
  }

  const setHTML = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };
  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };

  const lang = document.documentElement.lang === 'en' ? 'en' : 'th';

  const images = {
    atb: 'https://commons.wikimedia.org/wiki/Special:FilePath/ATB-Fahrzeugeinrichtung.jpg?width=1400',
    gsmr: 'https://commons.wikimedia.org/wiki/Special:FilePath/GSM-R%20NL.jpg?width=1400',
    harlingen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Harlingen%20station%20haven%20met%20RS2%20naar%20Leeuwarden%20%282023%29.jpg?width=1600',
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/International%20trains%20map%20the%20Netherlands.svg?width=1600',
    virm: 'https://commons.wikimedia.org/wiki/Special:FilePath/Onnen%20NedTrain%20VIRM%20buiten%20onderhoud.jpg?width=1600'
  };

  if (lang === 'th') {
    document.title = 'บทสรุป | Netherlands Train System';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'สรุปแบบอ่านง่ายของการเปลี่ยนระบบป้องกันรถไฟเนเธอร์แลนด์จาก ATB สู่ ERTMS/ETCS ครอบคลุมหลักการทำงาน สถานะปี 2026 ปัญหา การเปรียบเทียบประเทศ และผลต่อรถไฟทางไกล');

    setHTML('.page-hero .page-hero-inner', `
      <div class="reveal">
        <div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 05 • สรุปข้อมูลทั้งหมด</div>
        <h1>บทสรุป <span style="color:#003082">การเปลี่ยนผ่านจาก ATB สู่ ERTMS/ETCS</span></h1>
        <p class="hero-copy">หน้านี้รวบรวมใจความสำคัญของทั้งเว็บไซต์ไว้ในหน้าเดียว ตั้งแต่ ATB คืออะไร ERTMS/ETCS ต่างจากระบบเดิมอย่างไร เนเธอร์แลนด์เปลี่ยนระบบไปถึงไหนแล้วในปี 2026 มีอุปสรรคอะไรบ้าง และผู้โดยสารรถไฟทางไกลจะได้รับผลอย่างไร</p>
      </div>
      <div class="page-badge glass-card reveal">
        <div class="big">ATB → ETCS</div>
        <p>ไม่ใช่แค่เปลี่ยนอุปกรณ์ แต่ต้องทำให้รถไฟ ระบบบนทาง ศูนย์ควบคุม ซอฟต์แวร์ และคนทำงานพร้อมไปด้วยกัน</p>
      </div>`);

    setHTML('#overview', `
      <div class="kicker">5.1 • ภาพรวม</div>
      <h2>ATB และ ERTMS/ETCS ต่างกันอย่างไร</h2>
      <p><strong>ATB</strong> คือระบบป้องกันรถไฟของเนเธอร์แลนด์ที่ใช้งานมาหลายทศวรรษ หน้าที่หลักคือช่วยตรวจความเร็ว เตือนพนักงานขับ และสั่งเบรกเมื่อรถยังวิ่งเร็วเกินค่าที่ระบบอนุญาต ดังนั้น ATB ไม่ใช่ระบบที่ “ใช้ไม่ได้แล้ว” แต่เป็นระบบเดิมที่สร้างขึ้นในยุคที่แต่ละประเทศยังใช้มาตรฐานของตนเอง</p>
      <p><strong>ERTMS</strong> คือกรอบมาตรฐานด้านการควบคุมและการสื่อสารของรถไฟยุโรป ส่วน <strong>ETCS</strong> คือส่วนที่ดูแลการป้องกันและควบคุมการเคลื่อนที่ของรถโดยตรง พูดง่าย ๆ คือ ETCS รู้ว่ารถได้รับอนุญาตให้วิ่งไปได้ถึงไหน ควรวิ่งเร็วเท่าใด และควรเริ่มเบรกเมื่อใด หากรถเข้าใกล้ขีดจำกัดที่ไม่ปลอดภัย ระบบสามารถสั่งเบรกได้</p>

      <div class="summary-visual-pair" aria-label="ภาพเปรียบเทียบระบบเดิมและระบบดิจิทัล">
        <figure class="summary-visual-card">
          <img src="${images.atb}" alt="อุปกรณ์ ATB ภายในรถไฟ" loading="lazy" decoding="async">
          <figcaption><strong>ATB บนขบวนรถ</strong><span>ตัวอย่างอุปกรณ์ของระบบป้องกันรถไฟแบบเดิมของเนเธอร์แลนด์</span><small>ภาพ: Sebastian Terfloth · Wikimedia Commons · CC BY-SA 3.0</small></figcaption>
        </figure>
        <figure class="summary-visual-card">
          <img src="${images.gsmr}" alt="อุปกรณ์สื่อสาร GSM-R ภายในห้องขับรถไฟเนเธอร์แลนด์" loading="lazy" decoding="async">
          <figcaption><strong>รถไฟยุคดิจิทัลต้องพึ่งการสื่อสารมากขึ้น</strong><span>ERTMS/ETCS ทำงานร่วมกับระบบสื่อสารและข้อมูลดิจิทัล ไม่ได้มีเพียงอุปกรณ์ชิ้นเดียว</span><small>ภาพ: Trainsofholland · Wikimedia Commons · CC BY-SA 4.0</small></figcaption>
        </figure>
      </div>

      <div class="info-grid">
        <div class="info-card glass-card"><div class="icon">ATB</div><h3>ระบบเดิมที่ยังใช้งานอยู่</h3><p>ATB-EG ยังพบได้บนเส้นทางจำนวนมาก ส่วน ATB-NG ใช้บนบางเส้นทางภูมิภาค และ ATB-Vv เป็นส่วนเสริมเพื่อเพิ่มการป้องกันใกล้สัญญาณแดงในบางจุด</p></div>
        <div class="info-card glass-card"><div class="icon">ETCS</div><h3>ระบบป้องกันรถไฟมาตรฐานยุโรป</h3><p>ETCS ตรวจความเร็ว ระยะที่รถได้รับอนุญาตให้วิ่ง และการเบรกอย่างต่อเนื่อง จึงควบคุมได้ละเอียดกว่าระบบเดิม</p></div>
        <div class="info-card glass-card"><div class="icon">L2</div><h3>Level 2 คือแนวทางหลักของเนเธอร์แลนด์</h3><p>ข้อมูลสำคัญถูกส่งระหว่างรถกับระบบควบคุมผ่านการสื่อสารดิจิทัล โดยมีหน้าจอ DMI, Eurobalise และศูนย์ RBC เป็นองค์ประกอบสำคัญ</p></div>
        <div class="info-card glass-card"><div class="icon">EU</div><h3>เป้าหมายคือใช้มาตรฐานร่วมกัน</h3><p>ในระยะยาว รถไฟระหว่างประเทศจะพึ่งระบบเฉพาะของแต่ละประเทศน้อยลง ทำให้การเดินรถข้ามพรมแดนง่ายขึ้น</p></div>
      </div>

      <div class="summary-takeaway"><strong>สรุปสั้น ๆ</strong><p>ATB คือรากฐานความปลอดภัยของรถไฟเนเธอร์แลนด์ในยุคเดิม ส่วน ETCS เป็นระบบที่ควบคุมได้ละเอียดกว่าและออกแบบมาให้ประเทศต่าง ๆ ในยุโรปใช้มาตรฐานเดียวกันมากขึ้น</p></div>

      <span class="summary-section-label">พัฒนาการสำคัญแบบย่อ</span>
      <div class="impact-grid">
        <div class="impact-card glass-card"><div class="num">1950s</div><h3>เริ่มแนวคิด ATB</h3><p>เนเธอร์แลนด์เริ่มศึกษาการนำข้อมูลสัญญาณเข้าสู่ห้องขับ ก่อนอุบัติเหตุ Harmelen ปี 1962 จะเร่งให้การติดตั้งระบบป้องกันรถไฟจริงจังขึ้น</p></div>
        <div class="impact-card glass-card"><div class="num">1990s</div><h3>ยุโรปสร้างมาตรฐานร่วม</h3><p>หลายประเทศร่วมกันพัฒนา ERTMS/ETCS เพื่อลดปัญหาที่รถไฟข้ามประเทศต้องติดระบบป้องกันหลายแบบ</p></div>
        <div class="impact-card glass-card"><div class="num">2007+</div><h3>เนเธอร์แลนด์เริ่มมีประสบการณ์ใช้งานจริง</h3><p>Betuweroute, HSL-Zuid, Hanzelijn และ Amsterdam–Utrecht เป็นเส้นทางสำคัญที่ทำให้ประเทศได้เรียนรู้จาก ERTMS ก่อนขยายในระดับประเทศ</p></div>
        <div class="impact-card glass-card"><div class="num">2014–19</div><h3>กลายเป็นนโยบายระดับชาติ</h3><p>รัฐบาลเลือก ERTMS เป็นทิศทางระยะยาว และในปี 2019 โครงการเข้าสู่ระยะดำเนินงานอย่างเป็นทางการ</p></div>
      </div>`);

    setHTML('#findings', `
      <div class="kicker">หลักการสำคัญ</div>
      <h2>ทำไมต้องเปลี่ยน และ ETCS ทำงานอย่างไร</h2>
      <p>เหตุผลของการเปลี่ยนไม่ได้มีแค่คำว่า “ทันสมัยกว่า” แต่เกี่ยวกับการตรวจความเร็วและการเบรกที่ละเอียดขึ้น การเดินรถข้ามประเทศ และการเตรียมระบบรถไฟให้พร้อมสำหรับการทำงานแบบดิจิทัลมากขึ้น</p>
      <div class="impact-grid">
        <div class="impact-card glass-card"><div class="num">01</div><h3>ตรวจความเร็วได้ละเอียดขึ้น</h3><p>ATB-EG ใช้ระดับความเร็วหลักไม่กี่ระดับ ขณะที่ ETCS สามารถคำนวณขีดจำกัดและจุดเริ่มเบรกให้เหมาะกับสถานการณ์ได้ต่อเนื่องกว่า</p></div>
        <div class="impact-card glass-card"><div class="num">02</div><h3>รู้ว่ารถ “ไปได้ถึงไหน”</h3><p>ETCS ใช้สิ่งที่เรียกว่า Movement Authority หรือขอบเขตที่อนุญาตให้รถเคลื่อนที่ แล้วตรวจว่ารถยังอยู่ในระยะและความเร็วที่ปลอดภัยหรือไม่</p></div>
        <div class="impact-card glass-card"><div class="num">03</div><h3>ข้อมูลสำคัญอยู่ตรงหน้าพนักงานขับ</h3><p>หน้าจอ DMI แสดงความเร็วเป้าหมาย ระยะทาง และสถานะของระบบในรูปแบบมาตรฐาน ทำให้พนักงานขับรับข้อมูลได้ชัดเจนขึ้น</p></div>
        <div class="impact-card glass-card"><div class="num">04</div><h3>รถกับระบบบนทางต้องสื่อสารกัน</h3><p>ใน ETCS Level 2 ศูนย์ RBC ส่งข้อมูลอนุญาตการเคลื่อนที่ไปยังรถ ส่วน Eurobalise ช่วยเป็นจุดอ้างอิงตำแหน่งบนทาง</p></div>
        <div class="impact-card glass-card"><div class="num">05</div><h3>ข้ามพรมแดนง่ายขึ้นในระยะยาว</h3><p>เมื่อหลายประเทศใช้มาตรฐานเดียวกัน รถไฟระหว่างประเทศก็ไม่จำเป็นต้องพึ่งระบบเฉพาะประเทศจำนวนมากเหมือนเดิม</p></div>
        <div class="impact-card glass-card"><div class="num">06</div><h3>ส่วนที่ยากคือทำให้ทุกอย่างพร้อมพร้อมกัน</h3><p>ติดตั้งอุปกรณ์บนทางอย่างเดียวไม่พอ รถไฟ ซอฟต์แวร์ ศูนย์ควบคุม บุคลากร การทดสอบ และการรับรองความปลอดภัยต้องพร้อมก่อนเปิดใช้จริง</p></div>
      </div>`);

    setHTML('#status', `
      <div class="kicker">สถานะปัจจุบัน • 2026</div>
      <h2>เนเธอร์แลนด์ยังอยู่ในช่วงเปลี่ยนผ่าน</h2>
      <p>เนเธอร์แลนด์ไม่ได้เปลี่ยนจาก ATB เป็น ETCS พร้อมกันทั้งประเทศ ปัจจุบันใช้แนวทางแบ่งงานเป็นช่วงย่อยหรือ <strong>Tranche</strong> เพื่อเริ่มจากพื้นที่ที่ควบคุมได้ เรียนรู้จากการใช้งานจริง แล้วค่อยขยายไปยังพื้นที่ที่ซับซ้อนกว่า</p>

      <figure class="summary-visual">
        <img src="${images.harlingen}" alt="สถานี Harlingen Haven ในเนเธอร์แลนด์" loading="lazy" decoding="async">
        <figcaption><strong>Harlingen Haven — หนึ่งในพื้นที่สำคัญของช่วงเริ่มต้น</strong><span>ภาพถ่ายปี 2023 ใช้เพื่อแสดงบริบทของพื้นที่ Northern Lines ไม่ได้หมายความว่าเป็นภาพงานก่อสร้าง ERTMS ในปี 2026</span><small>ภาพ: JoachimKohler-HB · Wikimedia Commons · CC BY-SA 4.0</small></figcaption>
      </figure>

      <div class="stats">
        <div class="stat"><span class="stat-value">419</span><span class="stat-label">กม. โครงสร้างพื้นฐานใน Tranche 1</span></div>
        <div class="stat"><span class="stat-value">3</span><span class="stat-label">พื้นที่หลักของ Tranche 1</span></div>
        <div class="stat"><span class="stat-value">4</span><span class="stat-label">เส้นทางสำคัญที่มีประสบการณ์ ERTMS มาก่อน</span></div>
        <div class="stat"><span class="stat-value">L2</span><span class="stat-label">มาตรฐานหลักของการติดตั้งรุ่นใหม่</span></div>
      </div>
      <p>ในปี 2026 มีการเริ่มงานก่อสร้างและติดตั้งจริงบนช่วง <strong>Leeuwarden–Harlingen Haven</strong> ขณะที่พื้นที่อื่นใน Tranche 1 ยังอยู่ในขั้นออกแบบ เตรียมทดสอบ และทำให้ระบบต่าง ๆ พร้อมใช้งานร่วมกัน ณ ปลายเดือนสิงหาคม 2026 ยังไม่มีวันเปิดใช้ ETCS และวันยุติ ATB ที่แน่นอนสำหรับทุกพื้นที่ใน Tranche 1</p>

      <span class="summary-section-label">อุปสรรคที่ทำให้โครงการใช้เวลา</span>
      <div class="info-grid">
        <div class="info-card glass-card"><div class="icon">TIME</div><h3>บางระบบพัฒนานานกว่าที่คาด</h3><p>ระบบส่วนกลางและอุปกรณ์เชื่อมต่อบางชนิดยังต้องพัฒนาและทดสอบเพิ่ม หากส่วนหนึ่งล่าช้า งานส่วนอื่นอาจต้องรอตามไปด้วย</p></div>
        <div class="info-card glass-card"><div class="icon">↔</div><h3>ATB กับ ETCS ต้องอยู่ร่วมกันอีกระยะหนึ่ง</h3><p>รถที่ติด ETCS แล้วบางคันยังต้องวิ่งบนเส้นทาง ATB จึงต้องใช้ STM-ATB ซึ่งทำหน้าที่คล้าย “ตัวแปล” ให้ระบบใหม่บนรถเข้าใจข้อมูลจากระบบเดิม</p></div>
        <div class="info-card glass-card"><div class="icon">€</div><h3>ความล่าช้ากดดันงบประมาณ</h3><p>ช่วงเปลี่ยนผ่านต้องลงทุนระบบใหม่พร้อมกับดูแล ATB เดิม รายงานที่เผยแพร่ในปี 2026 ระบุช่องว่างงบประมาณที่อาจเกิดขึ้นราว €219 ล้าน และมีความเสี่ยงด้านค่าใช้จ่ายเพิ่มเติมราว €100 ล้าน</p></div>
        <div class="info-card glass-card"><div class="icon">R</div><h3>ต้องใช้งานได้จริงทุกวัน</h3><p>ผ่านการทดสอบทางเทคนิคอย่างเดียวไม่พอ ระบบทั้งหมดต้องทำงานได้อย่างน่าเชื่อถือบนโครงข่ายที่ยังมีรถโดยสารและรถสินค้าใช้งานทุกวัน</p></div>
        <div class="info-card glass-card"><div class="icon">F</div><h3>ผู้ประกอบการรถสินค้าได้รับผลโดยตรง</h3><p>หัวรถจักรต้องติดตั้ง ETCS และอาจหยุดใช้งานระหว่างดัดแปลง ขณะเดียวกันยังต้องวิ่งผ่านพื้นที่ที่ใช้ระบบต่างกัน</p></div>
        <div class="info-card glass-card"><div class="icon">P</div><h3>คนทำงานต้องเรียนรู้วิธีใหม่</h3><p>พนักงานขับ ช่าง ผู้ควบคุมการเดินรถ และผู้วางแผนต้องเข้าใจโหมดของ ETCS ขั้นตอนใหม่ และวิธีรับมือเมื่อระบบทำงานผิดปกติ</p></div>
      </div>
      <div class="summary-intro-note"><div><strong>หมายเหตุเรื่องตัวเลขต้นทุน:</strong> ตัวเลขช่องว่างงบประมาณและตัวเลขความเสี่ยงมีความหมายต่างกัน จึงไม่ควรนำมาบวกกันตรง ๆ</div></div>`);

    setHTML('#comparison', `
      <div class="kicker">เปรียบเทียบยุโรป</div>
      <h2>เนเธอร์แลนด์เทียบกับเบลเยียม เยอรมนี และสวิตเซอร์แลนด์</h2>
      <p>ทั้งสี่ประเทศเดินไปสู่ ETCS เหมือนกัน แต่ไม่ได้ใช้วิธีเดียวกัน เพราะขนาดโครงข่าย ระบบเดิม งบประมาณ ความพร้อมของขบวนรถ และรูปแบบการเดินรถต่างกัน การเปรียบเทียบจึงควรมองที่ “แนวทาง” มากกว่าดูเพียงตัวเลขกิโลเมตร</p>

      <figure class="summary-visual">
        <img src="${images.map}" alt="แผนที่แนวคิดเส้นทางรถไฟระหว่างประเทศที่เชื่อมเนเธอร์แลนด์กับประเทศรอบข้าง" loading="lazy" decoding="async">
        <figcaption><strong>การเดินรถข้ามพรมแดนคือเหตุผลสำคัญของมาตรฐานร่วม</strong><span>แผนที่นี้สะท้อนแนวคิดเครือข่ายรถไฟระหว่างประเทศและใช้เพื่ออธิบายบริบท ไม่ใช่ตารางเดินรถปี 2026</span><small>ภาพ: Ennomien · Wikimedia Commons · CC BY-SA 4.0</small></figcaption>
      </figure>

      <div class="country-grid">
        <div class="country-card glass-card"><div class="flag nl"></div><h3>เนเธอร์แลนด์</h3><div class="metric">Tranche 1 · 419 km</div><p>ทยอยเปลี่ยนเป็นช่วงย่อย เพื่อเรียนรู้และทดสอบก่อนขยายไปยังพื้นที่ที่หนาแน่นและซับซ้อนกว่า</p></div>
        <div class="country-card glass-card"><div class="flag be"></div><h3>เบลเยียม</h3><div class="metric">100% ETCS</div><p>วันที่ 14 ธันวาคม 2025 เบลเยียมประกาศติดตั้ง ETCS ครอบคลุมโครงข่ายหลักตามแผน รวมประมาณ 6,400 track-km</p></div>
        <div class="country-card glass-card"><div class="flag de"></div><h3>เยอรมนี</h3><div class="metric">683 km · สิ้นปี 2025</div><p>กำลังขยาย ETCS บนโครงข่ายขนาดใหญ่มากกว่า 33,000 กม. พร้อมกับปรับปรุงระบบ interlocking และโครงสร้างดิจิทัลอื่นไปด้วย</p></div>
        <div class="country-card glass-card"><div class="flag ch"></div><h3>สวิตเซอร์แลนด์</h3><div class="metric">L1 rollout · 2018</div><p>ใช้ ETCS Level 1 เป็นฐานบนโครงข่ายรางมาตรฐาน และใช้ Level 2 บนเส้นทางที่ต้องการสมรรถนะสูงหรือควบคุมจากห้องขับมากขึ้น</p></div>
      </div>
      <p class="summary-country-note"><strong>อย่าเทียบตัวเลขตรง ๆ:</strong> เบลเยียมมักนับเป็น track-km เยอรมนีใช้ความยาวเส้นทาง เนเธอร์แลนด์รายงานขอบเขต Tranche ส่วนสวิตเซอร์แลนด์มักอธิบายตามระดับ ETCS ที่ใช้งาน ฐานการนับจึงไม่เหมือนกัน</p>`);

    setHTML('#impact', `
      <div class="kicker">ผลต่อรถไฟทางไกล</div>
      <h2>การเปลี่ยนระบบกระทบรถไฟและผู้โดยสารอย่างไร</h2>
      <p>ผู้โดยสารอาจไม่ได้เห็น ETCS เป็นอุปกรณ์ชิ้นหนึ่ง แต่ผลของระบบจะสะท้อนผ่านการควบคุมความเร็ว การเดินรถข้ามพรมแดน ความพร้อมของขบวนรถ และการบริหารโครงข่าย ในช่วงเปลี่ยนผ่านจึงมีทั้งประโยชน์ระยะยาวและภาระระยะสั้น</p>

      <figure class="summary-visual">
        <img src="${images.virm}" alt="รถไฟ VIRM ที่ศูนย์ซ่อมบำรุง Onnen" loading="lazy" decoding="async">
        <figcaption><strong>รถรุ่นเดิมต้องเข้าศูนย์เพื่อดัดแปลงและทดสอบ</strong><span>ภาพศูนย์ซ่อมใช้เพื่ออธิบายบริบทของงานปรับปรุงขบวนรถ ไม่ได้หมายความว่ารถในภาพกำลังติดตั้ง ETCS ในขณะถ่ายภาพ</span><small>ภาพ: Rob Dammers · Wikimedia Commons · CC BY 2.0</small></figcaption>
      </figure>

      <div class="impact-grid">
        <div class="impact-card glass-card"><div class="num">01</div><h3>ตรวจความเร็วและการเบรกละเอียดขึ้น</h3><p>ระบบตรวจความเร็ว ระยะที่อนุญาตให้วิ่ง และการเบรกอย่างต่อเนื่อง พร้อมแทรกแซงอัตโนมัติเมื่อจำเป็น</p></div>
        <div class="impact-card glass-card"><div class="num">02</div><h3>รถระหว่างประเทศใช้มาตรฐานร่วมมากขึ้น</h3><p>ในระยะยาวช่วยลดภาระการติดระบบป้องกันเฉพาะประเทศหลายชุดบนรถคันเดียว</p></div>
        <div class="impact-card glass-card"><div class="num">03</div><h3>เป็นพื้นฐานให้ใช้โครงข่ายได้มีประสิทธิภาพขึ้น</h3><p>ข้อมูลดิจิทัลช่วยให้การจัดระยะห่างและการควบคุมรถแม่นยำขึ้น แต่ความจุจริงยังขึ้นกับโครงสร้างทางและตารางเดินรถด้วย</p></div>
        <div class="impact-card glass-card"><div class="num">04</div><h3>พนักงานขับต้องเรียนรู้วิธีทำงานใหม่</h3><p>หน้าจอ DMI มีบทบาทมากขึ้น และพนักงานขับต้องเข้าใจโหมด การเปลี่ยนระบบ และขั้นตอนเมื่อเกิดความขัดข้อง</p></div>
        <div class="impact-card glass-card"><div class="num">05</div><h3>รถรุ่นเดิมต้องดัดแปลงหลายส่วน</h3><p>ไม่ใช่แค่ติดคอมพิวเตอร์เพิ่ม แต่รวมถึงหน้าจอ วิทยุ เสาอากาศ เซนเซอร์ สายไฟ และการเชื่อมต่อกับระบบเบรกเดิมอย่างปลอดภัย</p></div>
        <div class="impact-card glass-card"><div class="num">06</div><h3>จำนวนรถพร้อมใช้งานอาจลดลงชั่วคราว</h3><p>รถที่เข้าศูนย์เพื่อติดตั้งและทดสอบไม่สามารถออกบริการได้ จึงต้องวางแผนคิวดัดแปลงและรถสำรองอย่างรอบคอบ</p></div>
      </div>
      <div class="summary-takeaway"><strong>ตัวอย่างที่เห็นภาพชัด</strong><p>NS เคยประกาศสัญญาติดตั้ง ERTMS ให้รถ VIRM จำนวน <strong>176 ชุด</strong> แต่ละชุดต้องผ่านการดัดแปลง ทดสอบ และรับรองก่อนกลับมาให้บริการ และในช่วงที่โครงข่ายยังเปลี่ยนไม่ครบ รถที่ติด ETCS แล้วบางส่วนก็ยังต้องรองรับ ATB ต่อไป</p></div>
      <p><strong>ระยะสั้น</strong> ผู้โดยสารอาจพบการปิดทางเพื่อทำงาน การทดสอบระบบ หรือข้อจำกัดด้านจำนวนรถที่พร้อมใช้งาน ส่วน <strong>ระยะยาว</strong> เป้าหมายคือการควบคุมที่ละเอียดขึ้น การเดินรถข้ามประเทศที่ง่ายขึ้น และโครงข่ายที่พร้อมต่อการทำงานแบบดิจิทัลมากขึ้น</p>`);

    setHTML('#conclusion', `
      <div class="kicker">บทสรุปสุดท้าย</div>
      <h2>สิ่งสำคัญที่ควรจำจากเรื่องนี้</h2>
      <p>การเปลี่ยนจาก ATB สู่ ERTMS/ETCS ไม่ใช่โครงการแบบ “ถอดของเก่าแล้วใส่ของใหม่” เพราะระบบรถไฟทำงานเป็นเครือข่ายเดียวกัน รถต้องมีอุปกรณ์ใหม่ ระบบบนทางและศูนย์ควบคุมต้องรองรับ ซอฟต์แวร์ต้องเชื่อมกันได้ บุคลากรต้องผ่านการฝึก และทุกส่วนต้องถูกทดสอบก่อนเปิดใช้จริง</p>
      <p>ATB จึงยังมีบทบาทสำคัญในช่วงเปลี่ยนผ่าน และจะยังคงปกป้องรถไฟบนเส้นทางที่ยังไม่เปลี่ยนระบบ ส่วน ETCS คือทิศทางระยะยาวของเนเธอร์แลนด์และยุโรป ความสำเร็จของโครงการจึงไม่ได้วัดจากจำนวนอุปกรณ์ที่ติดตั้งเพียงอย่างเดียว แต่ต้องดูว่ารถ ทาง ระบบควบคุม และคนสามารถทำงานร่วมกันได้อย่างปลอดภัยและน่าเชื่อถือหรือไม่</p>
      <div class="info-grid">
        <div class="info-card glass-card"><div class="icon">1</div><h3>ATB จะไม่หายไปทันที</h3><p>ระบบเดิมยังจำเป็นจนกว่าแต่ละพื้นที่และขบวนรถจะพร้อมเปลี่ยนจริง</p></div>
        <div class="info-card glass-card"><div class="icon">2</div><h3>ETCS ไม่ได้เป็นแค่ระบบเบรกอัตโนมัติ</h3><p>เป็นส่วนหนึ่งของมาตรฐานดิจิทัลที่เชื่อมรถ ระบบบนทาง การสื่อสาร และการควบคุมเข้าด้วยกัน</p></div>
        <div class="info-card glass-card"><div class="icon">3</div><h3>ปี 2026 ยังเป็นช่วงติดตั้งและเรียนรู้</h3><p>Tranche 1 เริ่มเข้าสู่งานภาคสนามแล้ว แต่วันเปิดใช้ ETCS และวันยุติ ATB ยังไม่แน่นอนสำหรับทุกพื้นที่</p></div>
        <div class="info-card glass-card"><div class="icon">4</div><h3>ช่วงที่ระบบเก่าและใหม่อยู่ร่วมกันคือช่วงยากที่สุด</h3><p>ต้องรักษาการเดินรถทุกวัน ในขณะที่อุปกรณ์ รถไฟ ซอฟต์แวร์ และคนกำลังทยอยเปลี่ยนไปทีละส่วน</p></div>
        <div class="info-card glass-card"><div class="icon">5</div><h3>ปลายทางคือรถไฟยุโรปที่เชื่อมต่อกันง่ายขึ้น</h3><p>มาตรฐานร่วมช่วยลดอุปสรรคทางเทคนิคของรถไฟระหว่างประเทศและเป็นพื้นฐานของระบบรถไฟดิจิทัลในอนาคต</p></div>
      </div>
      <div class="summary-takeaway"><strong>สรุปในประโยคเดียว</strong><p>ATB วางรากฐานความปลอดภัยให้รถไฟเนเธอร์แลนด์มาหลายสิบปี ส่วน ERTMS/ETCS คือการต่อยอดรากฐานนั้นให้ควบคุมได้ละเอียดขึ้น เป็นดิจิทัลมากขึ้น และทำงานร่วมกับระบบรถไฟยุโรปได้ง่ายขึ้น</p></div>
      <div class="source-list"><a class="source-link" href="other.html#sources"><span>เปิดคลังแหล่งอ้างอิงของเว็บไซต์</span><span>→</span></a></div>`);

    setHTML('.aside', `<p class="aside-title">ในหน้านี้</p><a href="#overview">ATB และ ERTMS/ETCS</a><a href="#findings">หลักการสำคัญ</a><a href="#status">สถานะปี 2026 และปัญหา</a><a href="#comparison">เปรียบเทียบ 4 ประเทศ</a><a href="#impact">ผลต่อรถไฟทางไกล</a><a href="#conclusion">บทสรุปสุดท้าย</a><a href="other.html#sources">แหล่งอ้างอิง</a>`);
    return;
  }

  document.title = 'Conclusion | Netherlands Train System';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', 'A reader-friendly complete summary of the Dutch transition from ATB to ERTMS/ETCS, including how the systems work, 2026 status, challenges, international comparison and long-distance rail impacts.');
  setText('.skip-link', 'Skip to content');

  setHTML('.page-hero .page-hero-inner', `
    <div class="reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Chapter 05 • Complete summary</div><h1>Conclusion <span style="color:#003082">the transition from ATB to ERTMS/ETCS</span></h1><p class="hero-copy">This page brings the whole website together in one place: what ATB is, how ERTMS/ETCS differs, where the Dutch migration stands in 2026, the main challenges and what the change means for long-distance trains and passengers.</p></div>
    <div class="page-badge glass-card reveal"><div class="big">ATB → ETCS</div><p>Not just new equipment: trains, infrastructure, control centres, software and people all need to be ready together.</p></div>`);

  setHTML('#overview', `
    <div class="kicker">5.1 • Overview</div><h2>How ATB and ERTMS/ETCS differ</h2>
    <p><strong>ATB</strong> is the Dutch train-protection system that has been used for decades. It supervises permitted speed levels, warns the driver and can apply the brakes when necessary. It is not a system that suddenly stopped working; it is a national system from an earlier generation of railway technology.</p>
    <p><strong>ERTMS</strong> is the European framework for railway control and communication, while <strong>ETCS</strong> is the train-control and protection part. In simple terms, ETCS knows how far a train may move, how fast it may travel and when it should begin braking. It can intervene if the train approaches an unsafe limit.</p>
    <div class="summary-visual-pair"><figure class="summary-visual-card"><img src="${images.atb}" alt="ATB onboard equipment" loading="lazy" decoding="async"><figcaption><strong>ATB onboard equipment</strong><span>An example of the Netherlands' legacy train-protection equipment.</span><small>Image: Sebastian Terfloth · Wikimedia Commons · CC BY-SA 3.0</small></figcaption></figure><figure class="summary-visual-card"><img src="${images.gsmr}" alt="GSM-R equipment in a Dutch train cab" loading="lazy" decoding="async"><figcaption><strong>Digital railways depend on communication</strong><span>ERTMS/ETCS works as part of a wider digital information and communication system.</span><small>Image: Trainsofholland · Wikimedia Commons · CC BY-SA 4.0</small></figcaption></figure></div>
    <div class="info-grid"><div class="info-card glass-card"><div class="icon">ATB</div><h3>The legacy system still in use</h3><p>ATB-EG remains widespread, ATB-NG is used on some regional lines, and ATB-Vv adds extra protection near selected signals.</p></div><div class="info-card glass-card"><div class="icon">ETCS</div><h3>European train protection</h3><p>ETCS continuously supervises speed, movement authority and braking, allowing more detailed control than the older system.</p></div><div class="info-card glass-card"><div class="icon">L2</div><h3>Level 2 is the main Dutch direction</h3><p>Digital communication links train and control system, with the DMI, Eurobalises and RBC among the key elements.</p></div><div class="info-card glass-card"><div class="icon">EU</div><h3>A common European standard</h3><p>In the long term, international trains should need fewer separate national train-protection systems.</p></div></div>
    <div class="summary-takeaway"><strong>In short</strong><p>ATB is a major part of the Dutch railway's existing safety foundation; ETCS provides more detailed supervision and is designed around a common European standard.</p></div>`);

  setHTML('#findings', `
    <div class="kicker">Key principles</div><h2>Why change, and how ETCS works</h2><p>The migration is not simply about newer technology. It is about more detailed safety supervision, easier cross-border operation and preparing the railway for more digital control.</p>
    <div class="impact-grid"><div class="impact-card glass-card"><div class="num">01</div><h3>More detailed speed supervision</h3><p>ATB-EG uses a limited set of speed steps, while ETCS can calculate limits and braking curves more continuously.</p></div><div class="impact-card glass-card"><div class="num">02</div><h3>It knows how far the train may go</h3><p>A Movement Authority defines the distance a train is allowed to move, while ETCS checks that the train stays within safe speed and distance limits.</p></div><div class="impact-card glass-card"><div class="num">03</div><h3>Key information is shown in the cab</h3><p>The DMI shows target speed, distance and system status in a standardised format.</p></div><div class="impact-card glass-card"><div class="num">04</div><h3>Train and infrastructure communicate</h3><p>In Level 2, the RBC sends movement information to the train while Eurobalises provide trackside reference points.</p></div><div class="impact-card glass-card"><div class="num">05</div><h3>Cross-border operation becomes easier over time</h3><p>A common standard reduces dependence on many separate national systems, although old and new systems still coexist during migration.</p></div><div class="impact-card glass-card"><div class="num">06</div><h3>The hard part is making everything ready together</h3><p>Trains, infrastructure, software, control centres, staff, testing and safety authorisation all need to be ready before commissioning.</p></div></div>`);

  setHTML('#status', `
    <div class="kicker">Current position • 2026</div><h2>The Netherlands is still in transition</h2><p>The Netherlands is using a staged <strong>Tranche</strong> approach rather than changing the entire network at once. The idea is to learn in manageable areas before moving into denser and more complex parts of the railway.</p>
    <figure class="summary-visual"><img src="${images.harlingen}" alt="Harlingen Haven station in the Netherlands" loading="lazy" decoding="async"><figcaption><strong>Harlingen Haven — part of the Northern Lines context</strong><span>This 2023 photograph shows the location context; it is not a photograph of 2026 ERTMS construction work.</span><small>Image: JoachimKohler-HB · Wikimedia Commons · CC BY-SA 4.0</small></figcaption></figure>
    <div class="stats"><div class="stat"><span class="stat-value">419</span><span class="stat-label">km of infrastructure in Tranche 1</span></div><div class="stat"><span class="stat-value">3</span><span class="stat-label">main Tranche 1 areas</span></div><div class="stat"><span class="stat-value">4</span><span class="stat-label">important routes with earlier ERTMS experience</span></div><div class="stat"><span class="stat-value">L2</span><span class="stat-label">main standard for new deployment</span></div></div>
    <p>In 2026 physical work began on <strong>Leeuwarden–Harlingen Haven</strong>, while other Tranche 1 areas remain in design, test preparation and system-readiness work. As of late August 2026, fixed ETCS commissioning and final ATB withdrawal dates have not been announced for every Tranche 1 area.</p>
    <span class="summary-section-label">Why the programme takes time</span><div class="info-grid"><div class="info-card glass-card"><div class="icon">TIME</div><h3>Some systems need more development</h3><p>Central systems and some interfaces require additional development and testing, so delays can spread across the wider programme.</p></div><div class="info-card glass-card"><div class="icon">↔</div><h3>ATB and ETCS must coexist</h3><p>Some ETCS-equipped trains still need to run on ATB routes. STM-ATB works like a translator between legacy trackside information and the new onboard system.</p></div><div class="info-card glass-card"><div class="icon">€</div><h3>Delay puts pressure on budgets</h3><p>The railway must invest in ERTMS while continuing to maintain ATB. A report published in 2026 described a potential budget gap of about €219 million and additional cost risk of about €100 million.</p></div><div class="info-card glass-card"><div class="icon">R</div><h3>It must work reliably every day</h3><p>Passing technical tests is not enough: the full system has to operate reliably on a live passenger and freight railway.</p></div><div class="info-card glass-card"><div class="icon">F</div><h3>Freight operators are directly affected</h3><p>Locomotives need ETCS equipment and may be unavailable during retrofit while still crossing areas with different systems.</p></div><div class="info-card glass-card"><div class="icon">P</div><h3>People need new working methods</h3><p>Drivers, technicians, controllers and planners need training in ETCS modes, procedures and degraded-operation scenarios.</p></div></div>
    <div class="summary-intro-note"><div><strong>Cost note:</strong> the budget-gap figure and the risk figure describe different things and should not simply be added together.</div></div>`);

  setHTML('#comparison', `
    <div class="kicker">European comparison</div><h2>Netherlands, Belgium, Germany and Switzerland</h2><p>All four countries are moving toward ETCS, but they are not following the same path. Network size, legacy systems, funding, fleet readiness and operating conditions differ, so strategy is more useful to compare than a single kilometre figure.</p>
    <figure class="summary-visual"><img src="${images.map}" alt="Concept map of international rail links from the Netherlands" loading="lazy" decoding="async"><figcaption><strong>Cross-border operation is a major reason for a common standard</strong><span>This map provides network context and is not presented as the 2026 timetable.</span><small>Image: Ennomien · Wikimedia Commons · CC BY-SA 4.0</small></figcaption></figure>
    <div class="country-grid"><div class="country-card glass-card"><div class="flag nl"></div><h3>Netherlands</h3><div class="metric">Tranche 1 · 419 km</div><p>A staged migration focused on learning and testing before moving into denser and more complex areas.</p></div><div class="country-card glass-card"><div class="flag be"></div><h3>Belgium</h3><div class="metric">100% ETCS</div><p>On 14 December 2025 Belgium completed ETCS installation across the main network under its Masterplan, covering about 6,400 track-km.</p></div><div class="country-card glass-card"><div class="flag de"></div><h3>Germany</h3><div class="metric">683 km · end-2025</div><p>ETCS is being expanded across a network of more than 33,000 km while digital interlockings and other infrastructure are also modernised.</p></div><div class="country-card glass-card"><div class="flag ch"></div><h3>Switzerland</h3><div class="metric">L1 rollout · 2018</div><p>ETCS Level 1 is the standard-network baseline, while Level 2 is used on selected high-performance routes and major base tunnels.</p></div></div>
    <p class="summary-country-note"><strong>Do not compare the figures directly:</strong> Belgium often reports track-km, Germany route length, the Netherlands Tranche scope and Switzerland coverage by ETCS level. The definitions are different.</p>`);

  setHTML('#impact', `
    <div class="kicker">Long-distance rail</div><h2>What the change means for trains and passengers</h2><p>Passengers may not see ETCS as one obvious device, but its effects appear in speed supervision, international operation, fleet availability and how the network can be managed. The migration therefore brings both long-term benefits and short-term disruption.</p>
    <figure class="summary-visual"><img src="${images.virm}" alt="VIRM train at Onnen workshop" loading="lazy" decoding="async"><figcaption><strong>Older fleets need workshop time for retrofit and testing</strong><span>The workshop image illustrates the retrofit context; it is not claimed to show ETCS installation taking place in the photograph.</span><small>Image: Rob Dammers · Wikimedia Commons · CC BY 2.0</small></figcaption></figure>
    <div class="impact-grid"><div class="impact-card glass-card"><div class="num">01</div><h3>More detailed safety supervision</h3><p>Speed, movement authority and braking are monitored continuously, with automatic intervention when necessary.</p></div><div class="impact-card glass-card"><div class="num">02</div><h3>International trains can rely more on one standard</h3><p>Over time this reduces the burden of carrying several separate national train-protection systems.</p></div><div class="impact-card glass-card"><div class="num">03</div><h3>A foundation for more efficient network use</h3><p>Digital information can support more precise headways and control, although real capacity still depends on infrastructure and timetabling.</p></div><div class="impact-card glass-card"><div class="num">04</div><h3>Drivers need new working methods</h3><p>The DMI becomes more important and drivers need to understand ETCS modes, transitions and failure procedures.</p></div><div class="impact-card glass-card"><div class="num">05</div><h3>Older trains need major retrofit work</h3><p>Computers, displays, radio equipment, antennas, sensors, cabling and brake interfaces must all be integrated safely.</p></div><div class="impact-card glass-card"><div class="num">06</div><h3>Fleet availability can fall temporarily</h3><p>Trains in workshops for installation and testing cannot carry passengers, so retrofit schedules and spare rolling stock matter.</p></div></div>
    <div class="summary-takeaway"><strong>A clear example</strong><p>NS announced an ERTMS retrofit contract covering <strong>176 VIRM trainsets</strong>. Each train must be modified, tested and authorised, while some converted trains still need ATB compatibility for routes that have not yet migrated.</p></div>`);

  setHTML('#conclusion', `
    <div class="kicker">Final conclusion</div><h2>The main points to remember</h2><p>The ATB-to-ERTMS/ETCS migration is not a simple remove-and-replace project. Trains need new onboard equipment, infrastructure and control centres need new systems, software must integrate correctly, staff need new training and every part must be tested before safe commissioning.</p><p>ATB therefore remains important during the transition, while ETCS is the long-term direction for the Netherlands and Europe. Success cannot be measured only by how much equipment has been installed, but by whether trains, infrastructure, control systems and people can work together safely and reliably.</p>
    <div class="info-grid"><div class="info-card glass-card"><div class="icon">1</div><h3>ATB will not disappear overnight</h3><p>The legacy system remains necessary until each area and fleet is genuinely ready to migrate.</p></div><div class="info-card glass-card"><div class="icon">2</div><h3>ETCS is more than automatic braking</h3><p>It is part of a digital standard linking trains, infrastructure, communication and control.</p></div><div class="info-card glass-card"><div class="icon">3</div><h3>2026 is still a deployment and learning phase</h3><p>Tranche 1 has entered field work, but commissioning and ATB withdrawal dates are not yet fixed for every area.</p></div><div class="info-card glass-card"><div class="icon">4</div><h3>Coexistence is the hardest phase</h3><p>Old and new systems must work side by side while trains keep running every day.</p></div><div class="info-card glass-card"><div class="icon">5</div><h3>The destination is a more interoperable European railway</h3><p>A common standard reduces technical barriers to international operation and supports a more digital railway.</p></div></div>
    <div class="summary-takeaway"><strong>In one sentence</strong><p>ATB built an important safety foundation for the Dutch railway, while ERTMS/ETCS is intended to make that foundation more precise, more digital and easier to integrate with the wider European rail network.</p></div><div class="source-list"><a class="source-link" href="other.html#sources"><span>Open the website reference library</span><span>→</span></a></div>`);

  setHTML('.aside', `<p class="aside-title">On this page</p><a href="#overview">ATB and ERTMS/ETCS</a><a href="#findings">Key principles</a><a href="#status">2026 status and challenges</a><a href="#comparison">Four-country comparison</a><a href="#impact">Long-distance rail impact</a><a href="#conclusion">Final conclusion</a><a href="other.html#sources">References</a>`);
})();