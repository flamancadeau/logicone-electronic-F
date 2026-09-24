export const laptopCategories = [
  { id: 'all', labelKey: 'market.catAll' },
  { id: 'budget', labelKey: 'market.catBudget' },
  { id: 'business', labelKey: 'market.catBusiness' },
  { id: 'gaming', labelKey: 'market.catGaming' },
  { id: 'creative', labelKey: 'market.catCreative' },
  { id: 'refurbished', labelKey: 'market.catRefurbished' },
];

export const laptops = [
  {
    id: 'hp-15s-budget',
    category: 'budget',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'HP',
    title: {
      en: 'HP 15s Everyday Laptop',
      rw: 'HP 15s ya Buri Munsi',
    },
    specs: {
      en: 'Intel i3 · 8GB RAM · 256GB SSD · 15.6" FHD',
      rw: 'Intel i3 · RAM 8GB · SSD 256GB · 15.6" FHD',
    },
    description: {
      en: 'Reliable starter laptop for school, Office apps, and browsing.',
      rw: 'Mudasobwa yizewe yo kwiga, Office, no gushakisha kuri interineti.',
    },
    priceFrw: 420000,
    badge: { en: 'Best value', rw: 'Igiciro cyiza' },
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Silver laptop open on a desk',
      rw: 'Mudasobwa y’ifeza ifunguye ku meza',
    },
  },
  {
    id: 'lenovo-ideapad-slim',
    category: 'budget',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'Lenovo',
    title: {
      en: 'Lenovo IdeaPad Slim 3',
      rw: 'Lenovo IdeaPad Slim 3',
    },
    specs: {
      en: 'Ryzen 5 · 8GB RAM · 512GB SSD · 14" FHD',
      rw: 'Ryzen 5 · RAM 8GB · SSD 512GB · 14" FHD',
    },
    description: {
      en: 'Lightweight productivity machine for students and freelancers.',
      rw: 'Mudasobwa yoroshye ku banyeshuri n’abikorera.',
    },
    priceFrw: 560000,
    badge: { en: 'Popular', rw: 'Ikunda' },
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Modern slim laptop on a wooden table',
      rw: 'Mudasobwa yoroshye ku meza y’ibiti',
    },
  },
  {
    id: 'dell-latitude-business',
    category: 'business',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'Dell',
    title: {
      en: 'Dell Latitude 5540',
      rw: 'Dell Latitude 5540',
    },
    specs: {
      en: 'Intel i5 · 16GB RAM · 512GB SSD · 15.6" FHD',
      rw: 'Intel i5 · RAM 16GB · SSD 512GB · 15.6" FHD',
    },
    description: {
      en: 'Business-class durability with strong battery for office teams.',
      rw: 'Mudasobwa y’akazi ifite bateri nziza ku makiandi.',
    },
    priceFrw: 980000,
    badge: { en: 'Business', rw: 'Akazi' },
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Business laptop closed on a desk',
      rw: 'Mudasobwa y’akazi ifunze ku meza',
    },
  },
  {
    id: 'thinkpad-e14',
    category: 'business',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'Lenovo',
    title: {
      en: 'ThinkPad E14 Gen 5',
      rw: 'ThinkPad E14 Gen 5',
    },
    specs: {
      en: 'Intel i7 · 16GB RAM · 1TB SSD · 14" WUXGA',
      rw: 'Intel i7 · RAM 16GB · SSD 1TB · 14" WUXGA',
    },
    description: {
      en: 'Legendary keyboard and build quality for professionals on the move.',
      rw: 'Keyboard n’ubwubatsi bukomeye ku bakozi babasha.',
    },
    priceFrw: 1250000,
    badge: { en: 'Pro pick', rw: 'Iyatoranyijwe' },
    image:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Dark professional laptop on a desk',
      rw: 'Mudasobwa y’umwuga ku meza',
    },
  },
  {
    id: 'asus-tuf-gaming',
    category: 'gaming',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'ASUS',
    title: {
      en: 'ASUS TUF Gaming A15',
      rw: 'ASUS TUF Gaming A15',
    },
    specs: {
      en: 'Ryzen 7 · 16GB RAM · RTX 4050 · 512GB SSD · 144Hz',
      rw: 'Ryzen 7 · RAM 16GB · RTX 4050 · SSD 512GB · 144Hz',
    },
    description: {
      en: 'High-refresh gaming and content creation without a desktop tower.',
      rw: 'Imikino n’ibikorwa by’ubuhanga nta tower nkuru.',
    },
    priceFrw: 1450000,
    badge: { en: 'Gaming', rw: 'Imikino' },
    image:
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Gaming laptop with RGB keyboard',
      rw: 'Mudasobwa y’imikino ifite RGB',
    },
  },
  {
    id: 'acer-nitro5',
    category: 'gaming',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'Acer',
    title: {
      en: 'Acer Nitro 5',
      rw: 'Acer Nitro 5',
    },
    specs: {
      en: 'Intel i5 · 16GB RAM · RTX 3050 · 512GB SSD · 15.6"',
      rw: 'Intel i5 · RAM 16GB · RTX 3050 · SSD 512GB · 15.6"',
    },
    description: {
      en: 'Balanced gaming laptop for esports and media editing.',
      rw: 'Mudasobwa y’imikino ihuye n’ivugurura ry’amashusho.',
    },
    priceFrw: 1180000,
    badge: { en: 'Esports', rw: 'Esports' },
    image:
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Black gaming laptop open on a desk',
      rw: 'Mudasobwa y’imikino ifunguye ku meza',
    },
  },
  {
    id: 'macbook-air-m1',
    category: 'creative',
    condition: { en: 'Refurbished', rw: 'Yavuguruwe' },
    brand: 'Apple',
    title: {
      en: 'MacBook Air M1 (Refurb)',
      rw: 'MacBook Air M1 (Yavuguruwe)',
    },
    specs: {
      en: 'Apple M1 · 8GB RAM · 256GB SSD · 13.3" Retina',
      rw: 'Apple M1 · RAM 8GB · SSD 256GB · 13.3" Retina',
    },
    description: {
      en: 'Silent, efficient creative machine — LogicOne lab-tested refurbished.',
      rw: 'Mudasobwa ituje kandi ikora neza — yasuzumwe muri laboratwari ya LogicOne.',
    },
    priceFrw: 780000,
    badge: { en: 'Lab tested', rw: 'Yasuzumwe' },
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Space gray MacBook on a desk',
      rw: 'MacBook ku meza',
    },
  },
  {
    id: 'msi-creator',
    category: 'creative',
    condition: { en: 'New', rw: 'Nshya' },
    brand: 'MSI',
    title: {
      en: 'MSI Creator M16',
      rw: 'MSI Creator M16',
    },
    specs: {
      en: 'Intel i7 · 32GB RAM · RTX 4060 · 1TB SSD · 16" QHD+',
      rw: 'Intel i7 · RAM 32GB · RTX 4060 · SSD 1TB · 16" QHD+',
    },
    description: {
      en: 'Color-accurate display for video editors, designers, and architects.',
      rw: 'Ecrani nziza ku banditsi b’amashusho, abashushanya n’abubatsi.',
    },
    priceFrw: 2100000,
    badge: { en: 'Creator', rw: 'Creator' },
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Laptop used for creative work',
      rw: 'Mudasobwa ikoreshwa mu buhanzi',
    },
  },
  {
    id: 'dell-refurbished-i5',
    category: 'refurbished',
    condition: { en: 'Refurbished', rw: 'Yavuguruwe' },
    brand: 'Dell',
    title: {
      en: 'Dell Latitude 5490 (Refurb)',
      rw: 'Dell Latitude 5490 (Yavuguruwe)',
    },
    specs: {
      en: 'Intel i5 · 8GB RAM · 256GB SSD · 14" FHD',
      rw: 'Intel i5 · RAM 8GB · SSD 256GB · 14" FHD',
    },
    description: {
      en: 'Affordable refurbished business laptop with 90-day LogicOne warranty.',
      rw: 'Mudasobwa y’akazi yavuguruwe ifite ubwishingizi bwa LogicOne bw’iminsi 90.',
    },
    priceFrw: 320000,
    badge: { en: 'Warranty', rw: 'Ubwishingizi' },
    image:
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Refurbished laptop beside a notebook',
      rw: 'Mudasobwa yavuguruwe',
    },
  },
  {
    id: 'hp-elitebook-refurb',
    category: 'refurbished',
    condition: { en: 'Refurbished', rw: 'Yavuguruwe' },
    brand: 'HP',
    title: {
      en: 'HP EliteBook 840 G5 (Refurb)',
      rw: 'HP EliteBook 840 G5 (Yavuguruwe)',
    },
    specs: {
      en: 'Intel i7 · 16GB RAM · 512GB SSD · 14" FHD',
      rw: 'Intel i7 · RAM 16GB · SSD 512GB · 14" FHD',
    },
    description: {
      en: 'Premium feel at a mid-range price — cleaned, upgraded, and stress-tested.',
      rw: 'Ubwiza bwo hejuru ku giciro gito — yasanewe, yazamuwe, kandi yasuzumwe.',
    },
    priceFrw: 520000,
    badge: { en: 'Upgraded', rw: 'Yazamuwe' },
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
    imageAlt: {
      en: 'Silver ultrabook open on a table',
      rw: 'Ultrabook ifunguye ku meza',
    },
  },
];

export const bookingLocations = [
  { id: 'gasabo', label: { en: 'Kigali — Gasabo', rw: 'Kigali — Gasabo' } },
  { id: 'kicukiro', label: { en: 'Kigali — Kicukiro', rw: 'Kigali — Kicukiro' } },
  { id: 'nyarugenge', label: { en: 'Kigali — Nyarugenge', rw: 'Kigali — Nyarugenge' } },
  { id: 'musanze', label: { en: 'Musanze', rw: 'Musanze' } },
  { id: 'huye', label: { en: 'Huye', rw: 'Huye' } },
  { id: 'rubavu', label: { en: 'Rubavu', rw: 'Rubavu' } },
  { id: 'rwamagana', label: { en: 'Rwamagana', rw: 'Rwamagana' } },
  { id: 'other', label: { en: 'Other / Outside Kigali', rw: 'Ahandi / Hanze ya Kigali' } },
];
