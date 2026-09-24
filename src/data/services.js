export const services = [
  {
    id: 'logic-board',
    icon: 'memory',
    iconColor: 'text-primary',
    title: {
      en: 'Logic Board Micro-Soldering',
      rw: 'Micro-Soldering ya Logic Board',
    },
    description: {
      en: 'MacBooks, high-end laptops, shorted power rails, PMIC reconstruction, trace jumping, and liquid corrosion recovery.',
      rw: 'MacBook, mudasobwa zo hejuru, short kuri power rails, gusana PMIC, trace jumping, n’ivugurura ry’ibyangiritse n’amazi.',
    },
    tag: { en: 'MICRON-LEVEL TRACE REPAIR', rw: 'GUSANA TRACE KU RWEGO RUTO' },
    badge: '24-48H',
    badgeColor: 'text-primary',
  },
  {
    id: 'custom-builds',
    icon: 'developer_board',
    iconColor: 'text-tertiary',
    title: {
      en: 'Custom Workstation & PC Builds',
      rw: 'Kubaka PC & Workstation byihariye',
    },
    description: {
      en: 'Tailored multi-GPU rendering rigs for architects, 4K video editing stations, AI training clusters, and thermal-optimized PCs.',
      rw: 'Imashini za GPU nyinshi ku bashinzwe ubwubatsi, gukora videwo 4K, AI clusters, na PC ziteganyijwe ubushyuhe.',
    },
    tag: { en: 'FULL BURN-IN TESTING', rw: 'IKORWA RYO GUKORESHA CYANE' },
    badge: { en: 'BESPOKE', rw: 'BYIHARIYE' },
    badgeColor: 'text-tertiary',
  },
  {
    id: 'smartphone',
    icon: 'smartphone',
    iconColor: 'text-primary',
    title: {
      en: 'Smartphone Precision Restoration',
      rw: 'Gusana Telefone zisobanuye',
    },
    description: {
      en: 'Factory-grade OLED glass lamination, TrueTone calibration, FaceID dot projector reconstruction, and tier-1 battery cell swaps.',
      rw: 'Gushyira OLED glass nk’iku factory, TrueTone, gusana FaceID, n’ivugurura ry’abatiri zo hejuru.',
    },
    tag: { en: 'OEM SENSOR MATCHING', rw: 'GUKURIKIZA SENSOR ZA OEM' },
    badge: { en: 'SAME-DAY', rw: 'UMUNSI UMWE' },
    badgeColor: 'text-primary',
  },
  {
    id: 'industrial',
    icon: 'precision_manufacturing',
    iconColor: 'text-secondary',
    title: {
      en: 'Industrial & Medical Electronics',
      rw: 'Ibikoresho by’Inganda n’Ubuvuzi',
    },
    description: {
      en: 'Component triage on industrial PLCs, Variable Frequency Drives (VFDs), hospital monitor motherboards, and power inverters.',
      rw: 'Isuzuma kuri PLC z’inganda, VFD, motherboard z’ibipimo by’ibitaro, n’inverters.',
    },
    tag: { en: 'ENTERPRISE SLA DISPATCH', rw: 'SERIVISI Y’IBIGO' },
    badge: { en: 'FIELD / LAB', rw: 'AHANTU / LAB' },
    badgeColor: 'text-on-surface',
  },
  {
    id: 'drone',
    icon: 'flight_takeoff',
    iconColor: 'text-tertiary',
    title: {
      en: 'Drone & Robotics Circuit Repair',
      rw: 'Gusana Drone & Robotike',
    },
    description: {
      en: 'Flight controller board level fixes, Electronic Speed Controller (ESC) MOSFET rebuilds, and sensor gimbal re-soldering.',
      rw: 'Gusana flight controller, ESC MOSFET, n’isenseri za gimbal.',
    },
    tag: { en: 'DJI & AUTONOMOUS UAVS', rw: 'DJI & UAV' },
    badge: { en: 'CALIBRATED', rw: 'BYAGENZURWE' },
    badgeColor: 'text-tertiary',
  },
  {
    id: 'data-recovery',
    icon: 'save',
    iconColor: 'text-primary',
    title: {
      en: 'Data Recovery & NAND Forensics',
      rw: 'Kubona Amakuru & NAND Forensics',
    },
    description: {
      en: 'Hardware-level extraction from unbootable flash memory chips, failed NVMe controllers, mechanically seized HDDs, and SSDs.',
      rw: 'Gukuramo amakuru ku chip zidakora, NVMe, HDD zafunze, na SSD.',
    },
    tag: { en: 'HIGH PRIVACY PROTOCOLS', rw: 'IBANGA RIHAMBAYE' },
    badge: { en: 'CLEANROOM', rw: 'CLEANROOM' },
    badgeColor: 'text-primary',
  },
  {
    id: 'audio',
    icon: 'tune',
    iconColor: 'text-secondary',
    title: {
      en: 'Audio, Studio & Broadcast Gear',
      rw: 'Ibikoresho by’Ijwi, Studio & Broadcast',
    },
    description: {
      en: 'Analog/digital mixing consoles, power amplifiers, studio monitors, DACs, and high-fidelity broadcast distribution gear.',
      rw: 'Mixing consoles, amplifiers, monitors za studio, DAC, n’ibikoresho byo gutanga ijwi.',
    },
    tag: { en: 'AUDIO TEST OSCILLOSCOPE', rw: 'IKORWA RY’IJWI' },
    badge: 'ANALOG/DSP',
    badgeColor: 'text-on-surface',
  },
  {
    id: 'firmware',
    icon: 'terminal',
    iconColor: 'text-tertiary',
    title: {
      en: 'Firmware & BIOS Flash Programming',
      rw: 'Guprograma Firmware & BIOS',
    },
    description: {
      en: 'EEPROM SPI hardware extraction, Clean Intel ME / AMD PSP region synthesis, corrupt BIOS flashing, and security chip remediation.',
      rw: 'Gukuramo EEPROM SPI, Clean Intel ME / AMD PSP, gupanga BIOS yangiritse, n’ibibazo bya security chip.',
    },
    tag: { en: 'HARDWARE PROGRAMMERS', rw: 'PROGRAMMERS' },
    badge: { en: 'EXACT HEX', rw: 'HEX NYAYO' },
    badgeColor: 'text-tertiary',
  },
];

export const quickActionsMeta = [
  {
    id: 'repair',
    to: '/services',
    icon: 'hardware',
    iconWrap: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary',
    titleKey: 'quickActions.repairTitle',
    descKey: 'quickActions.repairDesc',
    ctaKey: 'quickActions.repairCta',
    ctaColor: 'text-primary',
    action: 'link',
  },
  {
    id: 'training',
    to: '/training',
    icon: 'school',
    iconWrap: 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary',
    titleKey: 'quickActions.trainingTitle',
    descKey: 'quickActions.trainingDesc',
    ctaKey: 'quickActions.trainingCta',
    ctaColor: 'text-tertiary',
    action: 'link',
  },
  {
    id: 'market',
    to: '/market',
    icon: 'storefront',
    iconWrap:
      'bg-secondary-container text-on-secondary-container group-hover:bg-secondary group-hover:text-on-secondary',
    titleKey: 'quickActions.marketTitle',
    descKey: 'quickActions.marketDesc',
    ctaKey: 'quickActions.marketCta',
    ctaColor: 'text-secondary',
    action: 'link',
  },
  {
    id: 'ai',
    to: null,
    icon: 'smart_toy',
    iconWrap:
      'bg-surface-container-highest text-tertiary group-hover:bg-tertiary-container group-hover:text-on-tertiary-container',
    titleKey: 'quickActions.aiTitle',
    descKey: 'quickActions.aiDesc',
    ctaKey: 'quickActions.aiCta',
    ctaColor: 'text-tertiary',
    action: 'chat',
  },
];

export const workflowSteps = [
  {
    number: '01',
    numberColor: 'text-primary',
    icon: 'qr_code_scanner',
    title: { en: 'Intake & Clean Triage', rw: 'Kwakira & Isuzuma ry’Ibanze' },
    description: {
      en: 'Check-in at our Kigali lab or secure regional courier drop. We log device serials, capture cosmetic photos, and issue a traceable digital intake ticket.',
      rw: 'Uza ku laboratwari ya Kigali cyangwa ukoresha courier. Twandika serial, dufata amafoto, tugaha ticket ya digital.',
    },
    output: { en: 'OUTPUT: DIGITAL ASSET LOG', rw: 'IGISUBIZO: LOG YA DIGITAL' },
  },
  {
    number: '02',
    numberColor: 'text-tertiary',
    icon: 'biotech',
    title: { en: 'Thermal & Micro-Diagnostics', rw: 'Isuzuma ry’Ubushyuhe & Mikroskopu' },
    description: {
      en: 'Our technicians pinpoint parasitic short circuits and cracked solder joints utilizing infrared FLIR cameras, multimeters, and 4K optical microscopes.',
      rw: 'Abatekinisiye bacu babona short n’amajwi yangiritse bakoresheje FLIR, multimeter, na mikroskopu 4K.',
    },
    output: { en: 'OUTPUT: SCHEMATIC TRACE REPORT', rw: 'IGISUBIZO: RAPORO Y’ISUZUMA' },
  },
  {
    number: '03',
    numberColor: 'text-on-surface',
    icon: 'precision_manufacturing',
    title: { en: 'Component Repair & Stress Test', rw: 'Gusana & Gukoresha cyane' },
    description: {
      en: 'SMD micro-soldering with lead-free alloy under IPC guidelines, ultrasonic circuit cleaning, and an intensive 48-hour thermal/compute load cycle.',
      rw: 'Micro-soldering SMD hakurikijwe IPC, gukaraba ultrasonic, n’ikizamini cy’amasaha 48.',
    },
    output: { en: 'OUTPUT: 48-HR STRESS BENCH CERT', rw: 'IGISUBIZO: CERT YA MASAHА 48' },
  },
  {
    number: '04',
    numberColor: 'text-primary',
    icon: 'verified_user',
    title: { en: 'Handover & 6-Month Warranty', rw: 'Gutanga & Ubwishingizi bwa Amezi 6' },
    description: {
      en: 'Device collected with an itemized technical diagnostic summary and covered by our comprehensive 180-day LogicOne hardware guarantee.',
      rw: 'Ufata igikoresho hamwe n’raporo y’isuzuma n’ubwishingizi bwa iminsi 180 bwa LogicOne.',
    },
    output: { en: 'OUTPUT: WARRANTY CARD & DATA SEAL', rw: 'IGISUBIZO: IKARITA Y’UBWISHINGIZI' },
  },
];

export const trustPoints = [
  {
    icon: 'verified',
    iconWrap: 'bg-primary/10 text-primary',
    title: { en: '100% Genuine OEM Components', rw: 'Ibice 100% byemewe bya OEM' },
    description: {
      en: 'We import direct tier-1 ICs, capacitors, and displays from verified industrial distributors worldwide.',
      rw: 'Duzana IC, capacitors n’ecrani zo hejuru ku bacuruzi bemewe ku isi.',
    },
  },
  {
    icon: 'shield',
    iconWrap: 'bg-tertiary/10 text-tertiary',
    title: { en: 'ESD-Safe Cleanroom Workstations', rw: 'Aho bakorera ESD-Safe Cleanroom' },
    description: {
      en: 'Continuous static dissipation benches protect ultra-sensitive microchips from latent electrostatic discharge damage.',
      rw: 'Ameza yo gukora arinda microchip zinyogera na static electricity.',
    },
  },
  {
    icon: 'workspace_premium',
    iconWrap: 'bg-secondary/10 text-secondary',
    title: { en: 'Certified Master Technicians', rw: 'Abatekinisiye Bemewe' },
    description: {
      en: 'Bench leads hold IPC-7711/7721 rework certifications and Apple/CompTIA accredited qualifications.',
      rw: 'Abayobozi bafite impamyabumenyi za IPC-7711/7721 n’iz’Apple/CompTIA.',
    },
  },
  {
    icon: 'receipt_long',
    iconWrap: 'bg-secondary/10 text-secondary',
    title: { en: 'Fixed Quotes & No Hidden Fees', rw: 'Igiciro kigenwe · Nta kiguzi kihishwe' },
    description: {
      en: 'Transparent written diagnostic reports and fixed labor costs approved by you before a single soldering iron heats up.',
      rw: 'Raporo zisobanutse n’igiciro cy’akazi wemeza mbere yo gutangira gusana.',
    },
  },
  {
    icon: 'store',
    iconWrap: 'bg-primary/10 text-primary',
    title: { en: 'Physical Lab in Central Kigali', rw: 'Laboratwari i Kigali' },
    description: {
      en: 'Walk in directly to our open-concept engineering counter to speak face-to-face with the specialist diagnosing your board.',
      rw: 'Ushobora kuza ako kanya kuvugana n’umuhanga usuzuma board yawe.',
    },
  },
  {
    icon: 'military_tech',
    iconWrap: 'bg-tertiary/10 text-tertiary',
    title: { en: '6-Month Comprehensive Guarantee', rw: 'Ubwishingizi buzuye bwa Amezi 6' },
    description: {
      en: 'Our board-level repairs carry a full 180-day warranty. If our replaced components fail, we correct them free of charge.',
      rw: 'Gusana kwa board gufite ubwishingizi bwa iminsi 180. Niba ibice twashyizeye byangirika, tubisana ubuntu.',
    },
  },
];

export const testimonials = [
  {
    initials: 'JM',
    name: 'Jean-Marc Gasana',
    role: {
      en: 'VP of Infrastructure, Kigali FinTech Hub',
      rw: 'VP w’Infrastructure, Kigali FinTech Hub',
    },
    quote: {
      en: 'Our core transactional banking gateway server suffered a dual VRM power surge. LogicOne micro-soldered replaced PWM controllers in under 18 hours, saving us over 14 Million RWF in hardware replacement and prevented days of costly outage.',
      rw: 'Seriveri yacu y’ubucuruzi bw’amabanki yarangijwe na power surge. LogicOne yasaniye PWM controllers mu masaha atarenga 18, idukiza miliyoni 14+ RWF no kubuza iminsi y’ikibazo.',
    },
  },
  {
    initials: 'AU',
    name: 'Aline Uwase',
    role: {
      en: 'Academy Alumna • Senior Hardware Tech',
      rw: 'Umunyeshuri w’Ishuri • Umuhanga mu bikoresho',
    },
    quote: {
      en: 'The 8-week Micro-Soldering course gave me real clinical bench confidence. Within one month of graduating, I was hired to run the hardware triage section for a regional telecom provider. The oscilloscope training was invaluable.',
      rw: 'Amahugurwa ya Micro-Soldering y’icyumweru 8 yampaye icyizere. Mu kwezi kumwe nyuma yo kurangiza, nahakiriwe gukora isuzuma ry’ibikoresho kuri telecom. Amahugurwa ya oscilloscope yari ngombwa cyane.',
    },
  },
  {
    initials: 'DK',
    name: 'David Karangwa',
    role: {
      en: 'Creative Director, Inzora VFX Studio',
      rw: 'Umuyobozi w’Ubuhanzi, Inzora VFX Studio',
    },
    quote: {
      en: 'We commissioned two 3D animation workstations with custom liquid cooling and dual RTX cards. LogicOne delivered whisper-silent rigs running 24/7 without a flicker of thermal throttling. Exceptional attention to electrical grounding.',
      rw: 'Twasabye workstation ebyiri za 3D hamwe na liquid cooling na RTX cards ebyiri. LogicOne yatange imashini zidakoresha cyane zikora 24/7 nta thermal throttling. Grounding yari nziza cyane.',
    },
  },
];

export const heroMetrics = [
  { value: '99.4%', labelKey: 'hero.metricSuccess', color: 'text-on-surface' },
  { value: '500+', labelKey: 'hero.metricTechs', color: 'text-tertiary' },
  { value: '6-Month', labelKey: 'hero.metricWarranty', color: 'text-primary' },
];
