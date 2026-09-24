export const chatbotKnowledge = [
  {
    id: 'no-power',
    keywords: [
      'no power',
      'wont turn on',
      "won't turn on",
      'dead',
      'not turning on',
      'no boot',
      'black screen',
      'power button',
      'ntibwaka',
      'ntacyaka',
      'ntibasha gukora',
      'ecrani yirabura',
      'ntibasha kwaka',
    ],
    title: {
      en: 'Device will not power on',
      rw: 'Igikoresho ntibwaka',
    },
    reply: {
      en: `Let's triage a no-power issue:

1. Confirm the charger LED / voltage (try a known-good PSU or USB-C charger).
2. Disconnect all peripherals and try a hard reset (hold power 15–20s).
3. Listen for fan spin or LED blink codes — note any pattern.
4. Smell for burnt odor or check for liquid residue near ports.

If still dead after steps 1–2, this often needs board-level diagnostics (shorted rail / PMIC). Book a lab intake and we can quote after thermal/multimeter triage.`,
      rw: `Reka dusuzume ikibazo cyo kutaka:

1. Reba ko charger ifite LED / voltage (gerageza indi charger nziza cyangwa USB-C).
2. Kuraho ibindi bikoresho, gerageza hard reset (kanda power amasegonda 15–20).
3. Umva niba fan ikora cyangwa LED iramuka — andika uburyo.
4. Wumva akazungu k’ubushyuhe cyangwa reba niba hari amazi hafi y’imiryango.

Niba biracyari byo nyuma y’intambwe 1–2, bisaba isuzuma rya board (short / PMIC). Saba kwakira ku laboratwari kugira ngo duguhe igiciro.`,
    },
    suggestions: {
      en: ['Book a diagnostic', 'Liquid damage tips', 'Overheating laptop'],
      rw: ['Saba isuzuma', 'Inama ku mazi', 'Laptop irashyuha'],
    },
  },
  {
    id: 'overheating',
    keywords: [
      'overheat',
      'hot',
      'throttle',
      'fan loud',
      'thermal',
      'shutdown heat',
      'irashyuha',
      'ubushyuhe',
      'fan',
      'cyinshi',
    ],
    title: { en: 'Overheating / thermal throttling', rw: 'Ubushyuhe bukabije' },
    reply: {
      en: `Overheating checklist:

1. Elevate the device for airflow; avoid soft surfaces.
2. Clean intake vents with compressed air (power off first).
3. Check Task Manager / Activity Monitor for runaway CPU/GPU processes.
4. If fans scream under light load, thermal paste or heat-pipe contact may have failed.

LogicOne can re-paste, replace fans, and run a 48-hour burn-in. Want a quote for thermal service?`,
      rw: `Isuzuma ry’ubushyuhe:

1. Shyira igikoresho hejuru kugira ngo umwuka uhite; wirinde ahantu byoroshye.
2. Karaba vents hakoreshejwe compressed air (banza uce).
3. Reba Task Manager / Activity Monitor niba CPU/GPU zikora cyane.
4. Niba fan ivuga cyane n’igihe gito, thermal paste cyangwa heat-pipe bishobora kuba byanze.

LogicOne ishyira thermal paste, ivugurura fans, ikora ikizamini cy’amasaha 48. Ushaka igiciro?`,
    },
    suggestions: {
      en: ['Request a quote', 'No power help', 'Training courses'],
      rw: ['Saba igiciro', 'Ntibwaka', 'Amahugurwa'],
    },
  },
  {
    id: 'wifi',
    keywords: [
      'wifi',
      'wi-fi',
      'wireless',
      'internet',
      'network',
      'no connection',
      'disconnected',
      'ntikora',
      'interineti',
      'umuyoboro',
    ],
    title: { en: 'Wi-Fi / networking issues', rw: 'Ikibazo cya Wi-Fi / umuyoboro' },
    reply: {
      en: `Quick Wi-Fi triage:

1. Toggle Airplane mode off/on; forget and rejoin the network.
2. Restart the router and the device.
3. Test another device on the same SSID — is it the laptop or the network?
4. Check Device Manager / Network settings for a missing wireless adapter.

If the adapter vanishes after sleep or shows hardware errors, the Wi-Fi module or antenna cable may need replacement. We handle laptop networking and CCTV/LAN installs too.`,
      rw: `Isuzuma rya Wi-Fi:

1. Fungura/funga Airplane mode; ibagirwe network noneho wongere winjire.
2. Ongera utangire router n’igikoresho.
3. Gerageza indi mudasobwa kuri SSID imwe — ni laptop cyangwa network?
4. Reba Device Manager / Network settings niba wireless adapter ihari.

Niba adapter ibura nyuma yo kuruhuka cyangwa igaragaza amakosa, Wi-Fi module cyangwa antenna bishobora gusabwa. Dukora networking ya laptop na CCTV/LAN.`,
    },
    suggestions: {
      en: ['CCTV blurry', 'Book a repair', 'Contact WhatsApp'],
      rw: ['CCTV ntiyumvikana', 'Saba gusana', 'WhatsApp'],
    },
  },
  {
    id: 'cctv',
    keywords: [
      'cctv',
      'camera',
      'blurry',
      'nvr',
      'dvr',
      'surveillance',
      'night vision',
      'kamera',
      'ntiyumvikana',
      'kijimye',
    ],
    title: { en: 'CCTV image problems', rw: 'Ikibazo cy’ishusho ya CCTV' },
    reply: {
      en: `CCTV troubleshooting:

1. Wipe the dome/lens; condensation or dust causes most “blurry” complaints.
2. Verify IR LEDs light at night and that the camera focus ring is locked.
3. Check PoE injector / NVR port power and cable length (Cat5e/Cat6).
4. Review NVR bitrate and resolution settings.

Still soft or intermittent? Book a site visit — we diagnose cabling, PoE, and NVR configuration across Kigali.`,
      rw: `Isuzuma rya CCTV:

1. Karaba lens; umwuka cyangwa umukungugu bituma “ntiyumvikana”.
2. Reba ko IR LED zaka nijoro n’uko focus iri gufunga.
3. Reba PoE / NVR n’uburebure bwa cable (Cat5e/Cat6).
4. Reba bitrate n’resolution kuri NVR.

Biracyari bibi? Saba gusura ahantu — dusuzuma cables, PoE, na NVR i Kigali.`,
    },
    suggestions: {
      en: ['Book a service', 'Wi-Fi help', 'Request a quote'],
      rw: ['Saba serivisi', 'Ubufasha bwa Wi-Fi', 'Saba igiciro'],
    },
  },
  {
    id: 'printer',
    keywords: [
      'printer',
      'print',
      'jam',
      'ink',
      'toner',
      'paper jam',
      'spooler',
      'printer',
      'impapuro',
      'yafunze',
      'cas',
    ],
    title: { en: 'Printer jams or errors', rw: 'Printer yafunze cyangwa amakosa' },
    reply: {
      en: `Printer triage:

1. Clear any jammed paper carefully from both ends of the path.
2. Reseat cartridges/toner; run the built-in cleaning cycle.
3. Restart the print spooler (Windows) or remove/re-add the printer.
4. Test a USB direct connection if network printing fails.

Hardware feed rollers or formatter boards failing need bench service. We repair office printers and can quote on-site.`,
      rw: `Isuzuma rya printer:

1. Kuraho impapuro zafunze neza ku mpera zombi.
2. Shyira neza cartridges/toner; kora cleaning cycle.
3. Ongera utangire print spooler (Windows) cyangwa ongera ushyire printer.
4. Gerageza USB niba printing kuri network yanze.

Feed rollers cyangwa formatter board bishobora gusaba laboratwari. Dusana printer z’ibiro kandi dushobora gutanga igiciro aho uri.`,
    },
    suggestions: {
      en: ['Book a repair', 'No power help', 'Contact us'],
      rw: ['Saba gusana', 'Ntibwaka', 'Twandikire'],
    },
  },
  {
    id: 'liquid',
    keywords: [
      'liquid',
      'spill',
      'water',
      'coffee',
      'wet',
      'corrosion',
      'amazi',
      'ikawa',
      'byinnye',
      'ububore',
    ],
    title: { en: 'Liquid damage', rw: 'Ibyangiritse n’amazi' },
    reply: {
      en: `Liquid spill — act fast:

1. Power off immediately. Do NOT charge or turn it back on.
2. Disconnect battery if user-accessible; blot (don't shake) excess liquid.
3. Avoid rice — it can worsen corrosion. Bring it for ultrasonic cleaning ASAP.
4. Time matters: corrosion spreads within hours.

Our cleanroom can neutralize residues and micro-solder damaged rails. Book urgent intake today.`,
      rw: `Amazi yamenetse — kora vuba:

1. Cyo ako kanya. NTURYARURECYE cyangwa utange.
2. Kuraho batiri niba bishoboka; kugomora (ntukangunze) amazi asigare.
3. Wirinde umuceri — ushobora kongera ububore. Zana ultrasonic cleaning vuba.
4. Igihe ni ngombwa: ububore bwiyongera mu masaha.

Cleanroom yacu ishobora gukuraho ibisigaye no gusana rails. Saba kwakira byihutirwa uyu munsi.`,
    },
    suggestions: {
      en: ['Book urgent diagnostic', 'No power help', 'Warranty info'],
      rw: ['Saba isuzuma byihutirwa', 'Ntibwaka', 'Ubwishingizi'],
    },
  },
  {
    id: 'training',
    keywords: [
      'course',
      'training',
      'academy',
      'enroll',
      'learn',
      'solder',
      'class',
      'diploma',
      'amahugurwa',
      'ishuri',
      'kwiyandikisha',
      'impamyabumenyi',
    ],
    title: { en: 'Training enrollment', rw: 'Kwiyandikisha ku mahugurwa' },
    reply: {
      en: `LogicOne Hardware Academy (Kigali):

• Micro-Soldering & Logic Board Triage — 8 weeks
• Embedded Systems & PCB Design — 12 weeks
• Laptop & Mobile Diagnostics Foundation — 6 weeks

Next cohort starts soon. Browse Training for syllabi, or Apply Online to reserve a seat. Corporate packages available for IT teams.`,
      rw: `LogicOne Hardware Academy (Kigali):

• Micro-Soldering & Isuzuma rya Logic Board — icyumweru 8
• Embedded Systems & PCB Design — icyumweru 12
• Isuzuma ry’Ibanze rya Laptop & Mobile — icyumweru 6

Itsinda rikurikira ritangira vuba. Reba Amahugurwa cyangwa Saba kwiyandikisha. Hari na paketi z’ibigo.`,
    },
    suggestions: {
      en: ['View training', 'Apply for training', 'Book a repair'],
      rw: ['Reba amahugurwa', 'Saba kwiyandikisha', 'Saba gusana'],
    },
  },
  {
    id: 'quote',
    keywords: [
      'quote',
      'price',
      'cost',
      'how much',
      'estimate',
      'fee',
      'igiciro',
      'amafaranga',
      'angahe',
      'ibarura',
    ],
    title: { en: 'Pricing / quotes', rw: 'Ibiciro / ibarura' },
    reply: {
      en: `Pricing is device- and fault-specific. Typical flow:

1. Book a diagnostic or request a quote with photos/symptoms.
2. We issue a written estimate before any soldering starts — no hidden fees.
3. Diagnostic fees may be credited toward approved repairs.

Use Request Quote or WhatsApp with your device model and issue for a faster estimate.`,
      rw: `Igiciro gishingiye ku gikoresho n’ikibazo. Uburyo busanzwe:

1. Saba isuzuma cyangwa igiciro hamwe n’amafoto/ibimenyetso.
2. Dutanga ibarura ryanditse mbere yo gusana — nta kiguzi kihishwe.
3. Amafaranga y’isuzuma ashobora kujyanirwa ku gusana kwemejwe.

Koresha Saba Igiciro cyangwa WhatsApp hamwe na modeli n’ikibazo.`,
    },
    suggestions: {
      en: ['Request a quote', 'Book a service', 'WhatsApp desk'],
      rw: ['Saba igiciro', 'Saba serivisi', 'WhatsApp'],
    },
  },
  {
    id: 'warranty',
    keywords: [
      'warranty',
      'guarantee',
      '180',
      '6 month',
      'cover',
      'ubwishingizi',
      'garanti',
      'amezi 6',
    ],
    title: { en: 'Warranty', rw: 'Ubwishingizi' },
    reply: {
      en: `Board-level repairs carry a 6-month (180-day) LogicOne hardware guarantee on workmanship and replaced components. If a covered part fails, we correct it free of charge.

Cosmetic damage, new liquid events, or unrelated faults are not covered. Ask at handover for your warranty card.`,
      rw: `Gusana kwa board gufite ubwishingizi bwa amezi 6 (iminsi 180) kuri akazi n’ibice byashyizweho. Niba igice cyakingiye cyangiritse, tubisana ubuntu.

Ibyangiritse by’inyuma, amazi mashya, cyangwa ibindi bibazo ntibikingiwe. Saba ikarita y’ubwishingizi igihe ufata igikoresho.`,
    },
    suggestions: {
      en: ['Book a repair', 'Track a request', 'Contact us'],
      rw: ['Saba gusana', 'Kurikirana ubusabe', 'Twandikire'],
    },
  },
];

export const chatbotQuickReplies = {
  en: [
    "My laptop won't turn on",
    'Device is overheating',
    'CCTV camera is blurry',
    'Printer paper jam',
    'I want training info',
    'How much does repair cost?',
  ],
  rw: [
    'Laptop yanjye ntibwaka',
    'Igikoresho kirashyuha',
    'Kamera ya CCTV ntiyumvikana',
    'Printer yafunze impapuro',
    'Ndashaka amahugurwa',
    'Gusana bitwara angahe?',
  ],
};

export const chatbotGreeting = {
  en: "Hi — I'm LogicOne Assistant. Describe a symptom (no power, overheating, Wi-Fi, CCTV, printer, liquid spill) or ask about training, and I'll give quick triage steps. For complex faults I'll point you to book a lab diagnostic.",
  rw: 'Muraho — ndi LogicOne Assistant. Sobanura ikimenyetso (ntibwaka, ubushyuhe, Wi-Fi, CCTV, printer, amazi) cyangwa ubaze ku mahugurwa, nkagufasha vuba. Ku bibazo bikomeye, ngushishikariza gusaba isuzuma ku laboratwari.',
};

/** Maps suggestion labels (any language) to routes or WhatsApp */
export const SUGGESTION_ACTIONS = {
  'book a diagnostic': { type: 'route', value: '/book-service' },
  'book a service': { type: 'route', value: '/book-service' },
  'book a repair': { type: 'route', value: '/book-service' },
  'book urgent diagnostic': { type: 'route', value: '/book-service' },
  'request a quote': { type: 'route', value: '/request-quote' },
  'view training': { type: 'route', value: '/training' },
  'apply for training': { type: 'route', value: '/apply-training' },
  'training courses': { type: 'route', value: '/training' },
  'track a request': { type: 'route', value: '/track-request' },
  'contact us': { type: 'route', value: '/contact' },
  'contact whatsapp': { type: 'whatsapp' },
  'whatsapp desk': { type: 'whatsapp' },
  whatsapp: { type: 'whatsapp' },
  'warranty info': { type: 'route', value: '/about' },
  'saba isuzuma': { type: 'route', value: '/book-service' },
  'saba isuzuma byihutirwa': { type: 'route', value: '/book-service' },
  'saba gusana': { type: 'route', value: '/book-service' },
  'saba serivisi': { type: 'route', value: '/book-service' },
  'saba igiciro': { type: 'route', value: '/request-quote' },
  'reba amahugurwa': { type: 'route', value: '/training' },
  'saba kwiyandikisha': { type: 'route', value: '/apply-training' },
  amahugurwa: { type: 'route', value: '/training' },
  'kurikirana ubusabe': { type: 'route', value: '/track-request' },
  twandikire: { type: 'route', value: '/contact' },
  ubwishingizi: { type: 'route', value: '/about' },
};
