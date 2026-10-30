// One place for business details. Change here, every page and schema updates.
export const SITE = 'https://www.notecountingmachines.com';
export const SITE_NAME = 'NoteCountingMachines.com';

export const CONTACT = {
  phones: ['+91-8826035757', '+91-8826035858', '+91-8826035959'],
  email: 'notecountingmachines@zohomail.in',
  city: 'New Delhi',
};

export const store = {
  '@type': 'Store',
  '@id': SITE + '/#store',
  name: SITE_NAME,
  legalName: 'Infinite Solutions',
  taxID: '07AFEPB0340P1ZO',
  url: SITE + '/',
  telephone: CONTACT.phones,
  email: CONTACT.email,
  image: SITE + '/img/t800-mix-value-note-counting-machine.webp',
  priceRange: '₹13,750 – ₹24,990',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '18:00',
  }],
  foundingDate: '2001',
  hasMerchantReturnPolicy: { '@id': SITE + '/#returns' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '312, Plot No. 4, Vishwadeep Building, Janakpuri District Centre, Janakpuri',
    addressLocality: 'New Delhi',
    postalCode: '110058',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  areaServed: ['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad'],
  brand: [
    { '@type': 'Brand', name: 'Kores' },
    { '@type': 'Brand', name: 'Pacific International' },
  ],
};

// 7-day returns with all original packing undamaged (see /returns-refunds/).
export const returnPolicy = {
  '@type': 'MerchantReturnPolicy',
  '@id': SITE + '/#returns',
  url: SITE + '/returns-refunds/',
  applicableCountry: 'IN',
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: 7,
  returnMethod: 'https://schema.org/ReturnByMail',
  itemCondition: 'https://schema.org/NewCondition',
};

export const publisher = {
  '@type': 'Organization',
  '@id': SITE + '/#org',
  name: SITE_NAME,
  legalName: 'Infinite Solutions',
  url: SITE + '/',
  logo: { '@type': 'ImageObject', url: SITE + '/icon-512.png', width: 512, height: 512 },
  foundingDate: '2001',
  hasMerchantReturnPolicy: { '@id': SITE + '/#returns' },
};

// Blog categories: the key is stored in each post; the label is shown on the site.
export const CATEGORIES: Record<string, string> = {
  'counterfeit-news': 'Counterfeit news',
  'spot-fakes': 'How to spot fakes',
  'buying-guide': 'Buying guides',
  industry: 'Industry',
  hindi: 'हिंदी',
};
