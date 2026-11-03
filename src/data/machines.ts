// Every machine sold on the site, in English and Hindi.
// Product pages (/machines/<slug>/ and /hi/machines/<slug>/) are built from this file.
// Only put specs here that are in the brochure; change the price here and every page updates.

export type Lang = 'en' | 'hi';
type T = { en: string; hi: string };
type QA = { q: T; a: T };

export interface Machine {
  slug: string;
  model: string;
  brand: string;
  image: string;
  price?: number; // MRP incl. 18% GST; leave out for "price on request"
  warrantyOnsite: boolean;
  name: T; // H1 and Product name
  short: T; // one-line card text
  type: T; // machine type label
  title: T; // <title>, keep under ~60 characters
  description: T; // meta description, under ~155 characters
  answer: T; // first paragraph: one quotable sentence that answers "what is it, who is it for, how much"
  features: T[];
  bestFor: T;
  specs: { label: T; value: T }[];
  faq: QA[];
}

const SENSORS_4: T = { en: 'UV, MG, IR, MT', hi: 'UV, MG, IR, MT' };

export const MACHINES: Machine[] = [
  {
    slug: 't800-mix-value-note-counting-machine',
    model: 'T-800',
    brand: 'Pacific International',
    image: '/img/t800-mix-value-note-counting-machine.webp',
    price: 24990,
    warrantyOnsite: true,
    name: { en: 'T-800 Mix Value Note Counting Machine', hi: 'T-800 मिक्स वैल्यू नोट गिनने की मशीन' },
    short: { en: 'Totals mixed ₹10–₹500 notes in one pass, UV/MG/IR/MT.', hi: '₹10 से ₹500 तक के मिले-जुले नोटों का कुल जोड़ एक बार में, UV/MG/IR/MT जांच।' },
    type: { en: 'Mix value counter', hi: 'मिक्स वैल्यू काउंटर' },
    title: { en: 'T-800 Mix Value Note Counting Machine – Price ₹24,990', hi: 'T-800 मिक्स वैल्यू नोट गिनने की मशीन – कीमत ₹24,990' },
    description: {
      en: 'T-800 mix value counting machine: totals mixed notes in one pass, UV/MG/IR/MT fake note detection, 1,200 notes/min. MRP ₹24,990. Free demo in Delhi NCR.',
      hi: 'T-800 मिक्स वैल्यू मशीन: मिले-जुले नोटों का कुल एक बार में, UV/MG/IR/MT से नकली नोट की जांच, 1,200 नोट/मिनट। MRP ₹24,990। दिल्ली NCR में फ्री डेमो।',
    },
    answer: {
      en: 'The T-800 is a mix value note counting machine that counts a mixed stack of ₹10 to ₹500 notes and shows the total rupee value in one pass, checking every note with UV, MG, IR and MT sensors. MRP ₹24,990 including GST.',
      hi: 'T-800 एक मिक्स वैल्यू नोट गिनने की मशीन है जो ₹10 से ₹500 तक के मिले-जुले नोटों की गड्डी एक बार में गिनकर कुल रकम दिखाती है और हर नोट को UV, MG, IR और MT सेंसर से जांचती है। कीमत (MRP) ₹24,990, GST सहित।',
    },
    features: [
      { en: 'Totals mixed denominations and shows the count of each note on a colour TFT display', hi: 'मिले-जुले नोटों का कुल जोड़ और हर नोट की गिनती रंगीन TFT स्क्रीन पर' },
      { en: 'UV, MG, IR and MT fake note detection on every note', hi: 'हर नोट की UV, MG, IR और MT से नकली नोट जांच' },
      { en: '1,200 notes a minute with a 250-note hopper', hi: '1,200 नोट प्रति मिनट, 250 नोट का हॉपर' },
      { en: 'Built for long shifts: runs 8 hours', hi: 'लंबे काम के लिए: 8 घंटे लगातार चलती है' },
    ],
    bestFor: { en: 'Jewellers, supermarkets, wholesalers and petrol pumps that receive mixed notes all day', hi: 'ज्वैलर्स, सुपरमार्केट, होलसेलर और पेट्रोल पंप, जहां दिन भर मिले-जुले नोट आते हैं' },
    specs: [
      { label: { en: 'Type', hi: 'प्रकार' }, value: { en: 'Mix value counter', hi: 'मिक्स वैल्यू काउंटर' } },
      { label: { en: 'Fake note detection', hi: 'नकली नोट जांच' }, value: SENSORS_4 },
      { label: { en: 'Speed', hi: 'गति' }, value: { en: '1,200 notes/min', hi: '1,200 नोट/मिनट' } },
      { label: { en: 'Hopper', hi: 'हॉपर' }, value: { en: '250 notes', hi: '250 नोट' } },
      { label: { en: 'Display', hi: 'डिस्प्ले' }, value: { en: 'Colour TFT', hi: 'रंगीन TFT' } },
      { label: { en: 'Continuous use', hi: 'लगातार उपयोग' }, value: { en: '8 hours', hi: '8 घंटे' } },
      { label: { en: 'Warranty', hi: 'वारंटी' }, value: { en: '1-year onsite', hi: '1 साल ऑनसाइट' } },
    ],
    faq: [
      { q: { en: 'Can the T-800 count mixed ₹500, ₹200 and ₹100 notes together?', hi: 'क्या T-800 ₹500, ₹200 और ₹100 के नोट एक साथ गिन सकती है?' },
        a: { en: 'Yes. Put the mixed stack in the hopper; it shows the total amount and how many notes of each denomination it counted.', hi: 'हां। मिली-जुली गड्डी हॉपर में रखें; मशीन कुल रकम और हर नोट की गिनती अलग-अलग दिखाती है।' } },
      { q: { en: 'Will it work with new note series?', hi: 'क्या यह नए नोटों के साथ काम करेगी?' },
        a: { en: 'Yes. We update the software free when RBI changes a note series.', hi: 'हां। RBI जब नोट की नई सीरीज़ लाता है, तो हम सॉफ्टवेयर मुफ्त अपडेट करते हैं।' } },
    ],
  },
  {
    slug: 't100-semi-value-note-counting-machine',
    model: 'T-100',
    brand: 'Pacific International',
    image: '/img/t100-semi-value-note-counting-machine.webp',
    price: 13990,
    warrantyOnsite: true,
    name: { en: 'T-100 Semi Value Note Counting Machine', hi: 'T-100 सेमी वैल्यू नोट गिनने की मशीन' },
    short: { en: 'Counts one denomination and shows its value, UV/MG/IR/MT.', hi: 'एक तरह के नोट गिनकर उनकी कुल रकम दिखाती है, UV/MG/IR/MT जांच।' },
    type: { en: 'Semi value counter', hi: 'सेमी वैल्यू काउंटर' },
    title: { en: 'T-100 Semi Value Note Counting Machine – Price ₹13,990', hi: 'T-100 सेमी वैल्यू नोट गिनने की मशीन – कीमत ₹13,990' },
    description: {
      en: 'T-100 semi value note counter with UV/MG/IR/MT fake note detection, double/half/chain note detection, 1,200 notes/min. MRP ₹13,990. Demo in Delhi NCR.',
      hi: 'T-100 सेमी वैल्यू नोट काउंटर: UV/MG/IR/MT नकली नोट जांच, डबल/आधा/जुड़ा नोट पकड़ती है, 1,200 नोट/मिनट। MRP ₹13,990। दिल्ली NCR में डेमो।',
    },
    answer: {
      en: 'The T-100 is a semi value note counting machine: it counts a stack of one denomination, shows its rupee value and checks every note with UV, MG, IR and MT sensors. MRP ₹13,990 including GST.',
      hi: 'T-100 एक सेमी वैल्यू नोट गिनने की मशीन है: यह एक ही तरह के नोटों की गड्डी गिनकर उसकी कुल रकम दिखाती है और हर नोट को UV, MG, IR और MT सेंसर से जांचती है। कीमत (MRP) ₹13,990, GST सहित।',
    },
    features: [
      { en: 'Shows the value of a single-denomination stack', hi: 'एक तरह के नोटों की गड्डी की कुल रकम दिखाती है' },
      { en: 'UV, MG, IR and MT fake note detection', hi: 'UV, MG, IR और MT से नकली नोट जांच' },
      { en: 'Detects double, half and chain notes', hi: 'डबल, आधे और जुड़े हुए नोट पकड़ती है' },
      { en: 'LCD that changes colour on an alert; counts INR, USD and EUR', hi: 'अलर्ट पर रंग बदलने वाली LCD; INR, USD और EUR गिनती है' },
    ],
    bestFor: { en: 'Restaurants, retail shops and offices that sort notes by denomination', hi: 'रेस्टोरेंट, रिटेल दुकानें और ऑफिस, जहां नोट पहले से अलग-अलग रखे जाते हैं' },
    specs: [
      { label: { en: 'Type', hi: 'प्रकार' }, value: { en: 'Semi value counter', hi: 'सेमी वैल्यू काउंटर' } },
      { label: { en: 'Fake note detection', hi: 'नकली नोट जांच' }, value: SENSORS_4 },
      { label: { en: 'Speed', hi: 'गति' }, value: { en: '1,200 notes/min', hi: '1,200 नोट/मिनट' } },
      { label: { en: 'Other detection', hi: 'अन्य जांच' }, value: { en: 'Double, half, chain notes', hi: 'डबल, आधे, जुड़े नोट' } },
      { label: { en: 'Display', hi: 'डिस्प्ले' }, value: { en: 'LCD with colour-change alert', hi: 'रंग बदलने वाली अलर्ट LCD' } },
      { label: { en: 'Currencies', hi: 'करेंसी' }, value: { en: 'INR, USD, EUR', hi: 'INR, USD, EUR' } },
      { label: { en: 'Warranty', hi: 'वारंटी' }, value: { en: '1-year onsite', hi: '1 साल ऑनसाइट' } },
    ],
    faq: [
      { q: { en: 'What is the difference between semi value and mix value?', hi: 'सेमी वैल्यू और मिक्स वैल्यू में क्या फर्क है?' },
        a: { en: 'A semi value counter totals one denomination at a time. A mix value counter like the T-800 totals a stack of mixed notes in one pass.', hi: 'सेमी वैल्यू मशीन एक बार में एक ही तरह के नोट का जोड़ बताती है। T-800 जैसी मिक्स वैल्यू मशीन मिले-जुले नोटों का कुल एक बार में बताती है।' } },
      { q: { en: 'Can it count dollars and euros?', hi: 'क्या यह डॉलर और यूरो गिन सकती है?' },
        a: { en: 'Yes, it counts INR, USD and EUR.', hi: 'हां, यह INR, USD और EUR गिनती है।' } },
    ],
  },
  {
    slug: 'kores-easycount-442-note-counting-machine',
    model: 'EasyCount 442',
    brand: 'Kores',
    image: '/img/kores-easycount-442-note-counting-machine.webp',
    price: 13750,
    warrantyOnsite: false,
    name: { en: 'Kores EasyCount 442 Note Counting Machine', hi: 'कोरस ईज़ीकाउंट 442 नोट गिनने की मशीन' },
    short: { en: 'Loose note counter with UV/MG/IR, 900 notes/min.', hi: 'खुले नोट गिनने की मशीन, UV/MG/IR जांच, 900 नोट/मिनट।' },
    type: { en: 'Loose note counter with fake note detector', hi: 'नकली नोट जांच वाली नोट काउंटिंग मशीन' },
    title: { en: 'Kores EasyCount 442 Note Counting Machine – Price ₹13,750', hi: 'कोरस ईज़ीकाउंट 442 नोट गिनने की मशीन – कीमत ₹13,750' },
    description: {
      en: 'Kores EasyCount 442 note counting machine with UV/MG/IR fake note detection, 900 notes/min, batch and preset counting. MRP ₹13,750. Kores dealer, Delhi.',
      hi: 'कोरस ईज़ीकाउंट 442: UV/MG/IR से नकली नोट जांच, 900 नोट/मिनट, बैच और प्रीसेट गिनती। MRP ₹13,750। दिल्ली में कोरस डीलर।',
    },
    answer: {
      en: 'The Kores EasyCount 442 is a loose note counting machine with UV, MG and IR fake note detection that counts 900 notes a minute and runs 5 hours continuously. MRP ₹13,750 including GST.',
      hi: 'कोरस ईज़ीकाउंट 442 खुले नोट गिनने की मशीन है जो UV, MG और IR सेंसर से नकली नोट पकड़ती है, 900 नोट प्रति मिनट गिनती है और 5 घंटे लगातार चलती है। कीमत (MRP) ₹13,750, GST सहित।',
    },
    features: [
      { en: 'UV, MG and IR fake note detection', hi: 'UV, MG और IR से नकली नोट जांच' },
      { en: '900 notes a minute', hi: '900 नोट प्रति मिनट' },
      { en: 'Batch and preset counting for making bundles of 100', hi: '100-100 की गड्डी बनाने के लिए बैच और प्रीसेट गिनती' },
      { en: 'Heavy use: runs 5 hours continuously', hi: 'भारी उपयोग: 5 घंटे लगातार चलती है' },
    ],
    bestFor: { en: 'Shops, offices and petrol pumps that need a reliable counter with fake note detection', hi: 'दुकानें, ऑफिस और पेट्रोल पंप, जिन्हें नकली नोट पकड़ने वाली भरोसेमंद मशीन चाहिए' },
    specs: [
      { label: { en: 'Type', hi: 'प्रकार' }, value: { en: 'Loose note counter', hi: 'खुले नोट काउंटर' } },
      { label: { en: 'Fake note detection', hi: 'नकली नोट जांच' }, value: { en: 'UV, MG, IR', hi: 'UV, MG, IR' } },
      { label: { en: 'Speed', hi: 'गति' }, value: { en: '900 notes/min', hi: '900 नोट/मिनट' } },
      { label: { en: 'Modes', hi: 'मोड' }, value: { en: 'Batch, preset, add', hi: 'बैच, प्रीसेट, ऐड' } },
      { label: { en: 'Continuous use', hi: 'लगातार उपयोग' }, value: { en: '5 hours', hi: '5 घंटे' } },
      { label: { en: 'Warranty', hi: 'वारंटी' }, value: { en: 'Kores manufacturer warranty', hi: 'कोरस कंपनी वारंटी' } },
    ],
    faq: [
      { q: { en: 'Does the EasyCount 442 show the total amount?', hi: 'क्या ईज़ीकाउंट 442 कुल रकम दिखाती है?' },
        a: { en: 'No. It counts notes and checks them for fakes. For the rupee total, choose the T-100 (one denomination) or T-800 (mixed notes).', hi: 'नहीं। यह नोट गिनती है और नकली नोट की जांच करती है। कुल रकम के लिए T-100 (एक तरह के नोट) या T-800 (मिले-जुले नोट) लें।' } },
      { q: { en: 'Are you an authorised Kores dealer?', hi: 'क्या आप कोरस के अधिकृत डीलर हैं?' },
        a: { en: 'Yes. You get a GST invoice and Kores manufacturer warranty.', hi: 'हां। आपको GST बिल और कोरस की कंपनी वारंटी मिलती है।' } },
    ],
  },
  {
    slug: 'kores-kashpro-bundle-note-counting-machine',
    model: 'Kashpro',
    brand: 'Kores',
    image: '/img/kores-kashpro-bundle-note-counting-machine.webp',
    warrantyOnsite: false,
    name: { en: 'Kores Kashpro Bundle Note Counting Machine', hi: 'कोरस कैशप्रो बंडल नोट गिनने की मशीन' },
    short: { en: 'Floor-model vacuum bundle counter for banks.', hi: 'बैंकों के लिए फ्लोर मॉडल वैक्यूम बंडल काउंटर।' },
    type: { en: 'Bundle note counter', hi: 'बंडल नोट काउंटर' },
    title: { en: 'Kores Kashpro Bundle Note Counting Machine – Price', hi: 'कोरस कैशप्रो बंडल नोट गिनने की मशीन – कीमत' },
    description: {
      en: 'Kores Kashpro floor-model bundle note counting machine: vacuum counting of stapled bundles, 100 notes in about 4 seconds. For banks. Price on request.',
      hi: 'कोरस कैशप्रो फ्लोर मॉडल बंडल नोट काउंटर: स्टेपल लगी गड्डी की वैक्यूम गिनती, 100 नोट लगभग 4 सेकंड में। बैंकों के लिए। कीमत के लिए कॉल करें।',
    },
    answer: {
      en: 'The Kores Kashpro is a floor-model bundle note counting machine that counts stapled bundles by vacuum, about 100 notes in 4 seconds, without removing the staple. Used by banks and cash vans; price on request.',
      hi: 'कोरस कैशप्रो फ्लोर मॉडल बंडल नोट गिनने की मशीन है जो स्टेपल लगी गड्डी को बिना खोले वैक्यूम से गिनती है, लगभग 100 नोट 4 सेकंड में। बैंक और कैश वैन में इस्तेमाल होती है; कीमत के लिए कॉल करें।',
    },
    features: [
      { en: 'Counts stapled bundles without opening them', hi: 'स्टेपल लगी गड्डी बिना खोले गिनती है' },
      { en: 'Vacuum counting: about 100 notes in 4 seconds', hi: 'वैक्यूम से गिनती: लगभग 100 नोट 4 सेकंड में' },
      { en: 'Floor model for bank cash counters', hi: 'बैंक कैश काउंटर के लिए फ्लोर मॉडल' },
      { en: 'Counts only; use with a note sorter or fake note counter', hi: 'सिर्फ गिनती करती है; नकली नोट जांच के लिए सॉर्टर या काउंटर साथ रखें' },
    ],
    bestFor: { en: 'Banks, co-operative societies, currency chests and cash vans', hi: 'बैंक, कोऑपरेटिव सोसाइटी, करेंसी चेस्ट और कैश वैन' },
    specs: [
      { label: { en: 'Type', hi: 'प्रकार' }, value: { en: 'Bundle note counter (vacuum)', hi: 'बंडल नोट काउंटर (वैक्यूम)' } },
      { label: { en: 'Speed', hi: 'गति' }, value: { en: '~100 notes in 4 seconds', hi: 'लगभग 100 नोट 4 सेकंड में' } },
      { label: { en: 'Fake note detection', hi: 'नकली नोट जांच' }, value: { en: 'No (counts only)', hi: 'नहीं (सिर्फ गिनती)' } },
      { label: { en: 'Form', hi: 'बनावट' }, value: { en: 'Floor model', hi: 'फ्लोर मॉडल' } },
      { label: { en: 'Warranty', hi: 'वारंटी' }, value: { en: 'Kores manufacturer warranty', hi: 'कोरस कंपनी वारंटी' } },
    ],
    faq: [
      { q: { en: 'What is the price of a bundle note counting machine?', hi: 'बंडल नोट गिनने की मशीन की कीमत क्या है?' },
        a: { en: 'Kashpro is quoted per order. Call 88260 35757 for today\'s price.', hi: 'कैशप्रो की कीमत ऑर्डर के हिसाब से बताई जाती है। आज की कीमत के लिए 88260 35757 पर कॉल करें।' } },
    ],
  },
  {
    slug: 'kores-ih110-note-sorting-machine',
    model: 'iH110',
    brand: 'Kores',
    image: '/img/kores-ih110-note-sorting-machine.webp',
    warrantyOnsite: false,
    name: { en: 'Kores iH110 Note Sorting Machine (Dual CIS)', hi: 'कोरस iH110 नोट सॉर्टिंग मशीन (डुअल CIS)' },
    short: { en: 'Dual CIS sorter with fitness sorting and serial capture.', hi: 'डुअल CIS सॉर्टर, फिटनेस सॉर्टिंग और सीरियल नंबर रिकॉर्ड।' },
    type: { en: 'Note sorting machine (CIS)', hi: 'नोट सॉर्टिंग मशीन (CIS)' },
    title: { en: 'Kores iH110 Note Sorting Machine, Dual CIS – Price', hi: 'कोरस iH110 नोट सॉर्टिंग मशीन, डुअल CIS – कीमत' },
    description: {
      en: 'Kores iH110 note sorting machine with dual CIS, MG, UV and IR detection, fitness sorting and serial number capture, 40 currencies. For bank branches.',
      hi: 'कोरस iH110 नोट सॉर्टिंग मशीन: डुअल CIS, MG, UV, IR जांच, फिटनेस सॉर्टिंग, सीरियल नंबर रिकॉर्ड, 40 करेंसी। बैंक शाखाओं के लिए।',
    },
    answer: {
      en: 'The Kores iH110 is a note sorting machine that scans both sides of every note with dual CIS image sensors plus MG, UV and IR, sorts fit and unfit notes and records serial numbers. Built for bank branches; price on request.',
      hi: 'कोरस iH110 एक नोट सॉर्टिंग मशीन है जो डुअल CIS इमेज सेंसर और MG, UV, IR से हर नोट के दोनों तरफ की जांच करती है, अच्छे और खराब नोट अलग करती है और सीरियल नंबर रिकॉर्ड करती है। बैंक शाखाओं के लिए; कीमत के लिए कॉल करें।',
    },
    features: [
      { en: 'Dual CIS image sensors plus MG, UV and IR', hi: 'डुअल CIS इमेज सेंसर के साथ MG, UV और IR' },
      { en: 'Fitness sorting: separates fit and unfit notes', hi: 'फिटनेस सॉर्टिंग: अच्छे और खराब नोट अलग करती है' },
      { en: 'Serial number capture', hi: 'सीरियल नंबर रिकॉर्ड करती है' },
      { en: 'Handles 40 currencies', hi: '40 करेंसी के साथ काम करती है' },
    ],
    bestFor: { en: 'Bank branches, currency chests and large cash-handling businesses', hi: 'बैंक शाखाएं, करेंसी चेस्ट और बड़े कैश वाले कारोबार' },
    specs: [
      { label: { en: 'Type', hi: 'प्रकार' }, value: { en: 'Note sorter', hi: 'नोट सॉर्टर' } },
      { label: { en: 'Detection', hi: 'जांच' }, value: { en: 'Dual CIS, MG, UV, IR', hi: 'डुअल CIS, MG, UV, IR' } },
      { label: { en: 'Sorting', hi: 'सॉर्टिंग' }, value: { en: 'Fitness, denomination', hi: 'फिटनेस, मूल्य के हिसाब से' } },
      { label: { en: 'Serial number capture', hi: 'सीरियल नंबर रिकॉर्ड' }, value: { en: 'Yes', hi: 'हां' } },
      { label: { en: 'Currencies', hi: 'करेंसी' }, value: { en: '40', hi: '40' } },
      { label: { en: 'Warranty', hi: 'वारंटी' }, value: { en: 'Kores manufacturer warranty', hi: 'कोरस कंपनी वारंटी' } },
    ],
    faq: [
      { q: { en: 'What does CIS mean in a note counting machine?', hi: 'नोट मशीन में CIS का क्या मतलब है?' },
        a: { en: 'CIS (contact image sensor) scans the full image of each note, so the machine checks the design and denomination, not just ink and paper.', hi: 'CIS (कॉन्टैक्ट इमेज सेंसर) हर नोट की पूरी तस्वीर स्कैन करता है, इसलिए मशीन सिर्फ स्याही और कागज़ नहीं, बल्कि नोट का डिज़ाइन और मूल्य भी जांचती है।' } },
    ],
  },
];

export const machinePath = (m: Machine, lang: Lang) => (lang === 'hi' ? `/hi/machines/${m.slug}/` : `/machines/${m.slug}/`);

export const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

export const bySlug = (slug: string) => MACHINES.find((m) => m.slug === slug)!;
