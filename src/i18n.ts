// Languages with their own pages. To add one (e.g. Gujarati):
// 1. add it here and to UI below, 2. copy src/data/machines.pa.ts to machines.gu.ts and merge it in machines.ts,
// 3. copy src/pages/pa/ to src/pages/gu/. Everything else (dropdown, hreflang, sitemap) picks it up.

export type Lang = 'en' | 'hi' | 'pa';

export const LANGS: Record<Lang, { label: string; htmlLang: string; home: string }> = {
  en: { label: 'English', htmlLang: 'en-IN', home: '/' },
  hi: { label: 'हिंदी', htmlLang: 'hi-IN', home: '/hi/' },
  pa: { label: 'ਪੰਜਾਬੀ', htmlLang: 'pa-IN', home: '/pa/' },
};

export const LANG_LIST = Object.keys(LANGS) as Lang[];

// Same page in every language; pages that exist only in English point the other languages to their home page.
export type Alternates = Partial<Record<Lang, string>>;

// Languages offered through Google Translate in the dropdown ("Other languages"). Codes are Google's.
export const GT_LANGS = 'bn,gu,kn,ml,mr,or,ta,te,ur,as';

export const UI = {
  en: {
    home: 'Home', machines: 'Note counting machines', mrp: 'MRP', incl: 'incl. GST', onRequest: 'Price on request',
    call: "Call for today's price", quote: 'Get quote / free demo', features: 'Key features', specs: 'Specifications',
    brandModel: 'Brand / model', bestFor: 'Best for', buy: 'Buy in Delhi NCR',
    buyText: 'Free demo at your shop or office in Delhi, Gurgaon, Noida, Faridabad and Ghaziabad. GST invoice. Delivery across India (delivery charges extra).',
    near: 'See our address and nearest service →', faq: 'FAQ', more: 'Other machines',
    warrantyOn: '1-year onsite warranty', warrantyMf: 'Manufacturer warranty', gst: 'GST invoice', updates: 'Software updates for new notes',
    nearMe: 'Near me',
  },
  hi: {
    home: 'होम', machines: 'नोट गिनने की मशीनें', mrp: 'MRP', incl: 'GST सहित', onRequest: 'कीमत के लिए कॉल करें',
    call: 'आज की कीमत के लिए कॉल करें', quote: 'कोटेशन / फ्री डेमो', features: 'खास बातें', specs: 'स्पेसिफिकेशन',
    brandModel: 'ब्रांड / मॉडल', bestFor: 'किसके लिए सही', buy: 'दिल्ली NCR में खरीदें',
    buyText: 'दिल्ली, गुड़गांव, नोएडा, फरीदाबाद और गाज़ियाबाद में दुकान या ऑफिस पर फ्री डेमो। GST बिल। पूरे भारत में डिलीवरी (डिलीवरी चार्ज अलग)।',
    near: 'हमारा पता और नज़दीकी सर्विस देखें →', faq: 'सवाल-जवाब', more: 'दूसरी मशीनें',
    warrantyOn: '1 साल ऑनसाइट वारंटी', warrantyMf: 'कंपनी वारंटी', gst: 'GST बिल', updates: 'नए नोटों के लिए सॉफ्टवेयर अपडेट',
    nearMe: 'मेरे पास',
  },
  pa: {
    home: 'ਹੋਮ', machines: 'ਨੋਟ ਗਿਣਨ ਵਾਲੀਆਂ ਮਸ਼ੀਨਾਂ', mrp: 'MRP', incl: 'GST ਸਮੇਤ', onRequest: 'ਕੀਮਤ ਲਈ ਕਾਲ ਕਰੋ',
    call: 'ਅੱਜ ਦੀ ਕੀਮਤ ਲਈ ਕਾਲ ਕਰੋ', quote: 'ਕੋਟੇਸ਼ਨ / ਮੁਫ਼ਤ ਡੈਮੋ', features: 'ਖ਼ਾਸ ਗੱਲਾਂ', specs: 'ਸਪੈਸੀਫ਼ਿਕੇਸ਼ਨ',
    brandModel: 'ਬ੍ਰਾਂਡ / ਮਾਡਲ', bestFor: 'ਕਿਸ ਲਈ ਸਹੀ', buy: 'ਦਿੱਲੀ NCR ਵਿੱਚ ਖਰੀਦੋ',
    buyText: 'ਦਿੱਲੀ, ਗੁੜਗਾਓਂ, ਨੋਇਡਾ, ਫ਼ਰੀਦਾਬਾਦ ਅਤੇ ਗ਼ਾਜ਼ੀਆਬਾਦ ਵਿੱਚ ਦੁਕਾਨ ਜਾਂ ਦਫ਼ਤਰ ਉੱਤੇ ਮੁਫ਼ਤ ਡੈਮੋ। GST ਬਿੱਲ। ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਡਿਲੀਵਰੀ (ਡਿਲੀਵਰੀ ਖ਼ਰਚਾ ਵੱਖਰਾ)।',
    near: 'ਸਾਡਾ ਪਤਾ ਅਤੇ ਨੇੜਲੀ ਸਰਵਿਸ ਵੇਖੋ →', faq: 'ਸਵਾਲ-ਜਵਾਬ', more: 'ਹੋਰ ਮਸ਼ੀਨਾਂ',
    warrantyOn: '1 ਸਾਲ ਆਨਸਾਈਟ ਵਾਰੰਟੀ', warrantyMf: 'ਕੰਪਨੀ ਵਾਰੰਟੀ', gst: 'GST ਬਿੱਲ', updates: 'ਨਵੇਂ ਨੋਟਾਂ ਲਈ ਸਾਫ਼ਟਵੇਅਰ ਅੱਪਡੇਟ',
    nearMe: 'ਮੇਰੇ ਨੇੜੇ',
  },
} satisfies Record<Lang, Record<string, string>>;

// Text for the near-me page in each language.
export const NEAR = {
  en: {
    title: 'Note Counting Machine Near Me – Dealer in Delhi NCR | Demo',
    desc: 'Note counting machine dealer near you in Delhi NCR: Janakpuri, New Delhi. Free demo and service at your shop in Delhi, Gurgaon, Noida, Faridabad, Ghaziabad.',
    h1: 'Note counting machine near me: dealer, demo and service in Delhi NCR',
    answer: 'To buy a note counting, cash counting or mix value counting machine near you, visit our office at Janakpuri District Centre, New Delhi, or book a free demo at your shop or office anywhere in Delhi, Gurgaon, Noida, Faridabad and Ghaziabad.',
    visit: 'Our address', hours: 'Monday–Saturday, 10 am to 6 pm · Sunday closed', map: 'Get directions on Google Maps',
    areasH: 'Where we give demos, delivery and service', city: 'City', where: 'Areas', machinesH: 'Machines in stock', quote: 'Book a free demo',
    areas: [
      ['Delhi', 'West Delhi (Janakpuri, Uttam Nagar, Dwarka, Rajouri Garden, Vikaspuri), Old Delhi (Chandni Chowk, Sadar Bazar, Chawri Bazar), Karol Bagh, Lajpat Nagar, Nehru Place, Pitampura, Rohini, Laxmi Nagar and all of Delhi'],
      ['Gurgaon (Gurugram)', 'All of Gurgaon including Sohna Road, Udyog Vihar, MG Road'],
      ['Noida', 'Noida and Greater Noida'],
      ['Faridabad', 'All of Faridabad and Ballabgarh'],
      ['Ghaziabad', 'Ghaziabad, Indirapuram, Vaishali, Sahibabad'],
      ['Outside NCR', 'Courier delivery across India with phone support'],
    ],
    faq: [
      ['Where can I buy a note counting machine near me in Delhi?', 'We are at Janakpuri District Centre, New Delhi, and give a free demo at your shop or office across Delhi, Gurgaon, Noida, Faridabad and Ghaziabad. Call 88260 35757.'],
      ['Do you come to my shop for a demo?', 'Yes. Free demo at your shop or office anywhere in Delhi NCR, so you can run the machine on your own notes before you buy.'],
      ['Can I visit your office to see the machines?', 'Yes, Monday to Saturday, 10 am to 6 pm. Call before you come so the model you want to see is ready.'],
      ['Who services the machine after I buy it?', 'We service machines bought from us: 1-year onsite warranty on Pacific International machines and manufacturer warranty on Kores, with software updates for new notes.'],
    ],
  },
  hi: {
    title: 'नोट गिनने की मशीन मेरे पास – दिल्ली NCR डीलर | डेमो',
    desc: 'दिल्ली NCR में नोट गिनने की मशीन के डीलर: जनकपुरी, नई दिल्ली। दिल्ली, गुड़गांव, नोएडा, फरीदाबाद, गाज़ियाबाद में दुकान पर फ्री डेमो और सर्विस।',
    h1: 'मेरे पास नोट गिनने की मशीन: दिल्ली NCR में डीलर, डेमो और सर्विस',
    answer: 'नोट गिनने की मशीन, कैश काउंटिंग मशीन और मिक्स वैल्यू मशीन खरीदने के लिए हमारा ऑफिस जनकपुरी डिस्ट्रिक्ट सेंटर, नई दिल्ली में है, और हम दिल्ली, गुड़गांव, नोएडा, फरीदाबाद और गाज़ियाबाद में आपकी दुकान या ऑफिस पर फ्री डेमो देते हैं।',
    visit: 'हमारा पता', hours: 'सोमवार–शनिवार, सुबह 10 से शाम 6 · रविवार बंद', map: 'Google Maps पर रास्ता देखें',
    areasH: 'हम कहां डेमो, डिलीवरी और सर्विस देते हैं', city: 'शहर', where: 'इलाके', machinesH: 'स्टॉक में मशीनें', quote: 'फ्री डेमो बुक करें',
    areas: [
      ['दिल्ली', 'पश्चिमी दिल्ली (जनकपुरी, उत्तम नगर, द्वारका, राजौरी गार्डन, विकासपुरी), पुरानी दिल्ली (चांदनी चौक, सदर बाज़ार, चावड़ी बाज़ार), करोल बाग, लाजपत नगर, नेहरू प्लेस, पीतमपुरा, रोहिणी, लक्ष्मी नगर और पूरी दिल्ली'],
      ['गुड़गांव (गुरुग्राम)', 'पूरा गुड़गांव, सोहना रोड, उद्योग विहार, MG रोड'],
      ['नोएडा', 'नोएडा और ग्रेटर नोएडा'],
      ['फरीदाबाद', 'पूरा फरीदाबाद और बल्लभगढ़'],
      ['गाज़ियाबाद', 'गाज़ियाबाद, इंदिरापुरम, वैशाली, साहिबाबाद'],
      ['NCR से बाहर', 'पूरे भारत में कूरियर से डिलीवरी, फोन पर सपोर्ट'],
    ],
    faq: [
      ['मेरे पास नोट गिनने की मशीन कहां मिलेगी?', 'हम दिल्ली के जनकपुरी डिस्ट्रिक्ट सेंटर में हैं और दिल्ली, गुड़गांव, नोएडा, फरीदाबाद और गाज़ियाबाद में आपकी दुकान या ऑफिस पर फ्री डेमो देते हैं। 88260 35757 पर कॉल करें।'],
      ['क्या आप दुकान पर आकर मशीन का डेमो देते हैं?', 'हां। दिल्ली NCR में आपकी दुकान या ऑफिस पर फ्री डेमो, ताकि खरीदने से पहले आप मशीन को अपने नोटों पर चलाकर देख सकें।'],
      ['क्या मैं ऑफिस आकर मशीन देख सकता हूं?', 'हां, सोमवार से शनिवार सुबह 10 से शाम 6 बजे तक। आने से पहले कॉल कर दें ताकि जो मॉडल आप देखना चाहते हैं वह तैयार रहे।'],
      ['खरीदने के बाद सर्विस कौन करेगा?', 'हमसे खरीदी गई मशीनों की सर्विस हम करते हैं: पैसिफिक इंटरनेशनल मशीनों पर 1 साल ऑनसाइट वारंटी और कोरस पर कंपनी वारंटी, नए नोटों के लिए सॉफ्टवेयर अपडेट के साथ।'],
    ],
  },
  pa: {
    title: 'ਮੇਰੇ ਨੇੜੇ ਨੋਟ ਗਿਣਨ ਵਾਲੀ ਮਸ਼ੀਨ – ਦਿੱਲੀ NCR ਡੀਲਰ | ਡੈਮੋ',
    desc: 'ਦਿੱਲੀ NCR ਵਿੱਚ ਨੋਟ ਗਿਣਨ ਵਾਲੀ ਮਸ਼ੀਨ ਦੇ ਡੀਲਰ: ਜਨਕਪੁਰੀ, ਨਵੀਂ ਦਿੱਲੀ। ਦਿੱਲੀ, ਗੁੜਗਾਓਂ, ਨੋਇਡਾ, ਫ਼ਰੀਦਾਬਾਦ, ਗ਼ਾਜ਼ੀਆਬਾਦ ਵਿੱਚ ਦੁਕਾਨ ਉੱਤੇ ਮੁਫ਼ਤ ਡੈਮੋ ਅਤੇ ਸਰਵਿਸ।',
    h1: 'ਮੇਰੇ ਨੇੜੇ ਨੋਟ ਗਿਣਨ ਵਾਲੀ ਮਸ਼ੀਨ: ਦਿੱਲੀ NCR ਵਿੱਚ ਡੀਲਰ, ਡੈਮੋ ਅਤੇ ਸਰਵਿਸ',
    answer: 'ਨੋਟ ਗਿਣਨ ਵਾਲੀ ਮਸ਼ੀਨ, ਕੈਸ਼ ਕਾਊਂਟਿੰਗ ਮਸ਼ੀਨ ਅਤੇ ਮਿਕਸ ਵੈਲਿਊ ਮਸ਼ੀਨ ਖਰੀਦਣ ਲਈ ਸਾਡਾ ਦਫ਼ਤਰ ਜਨਕਪੁਰੀ ਡਿਸਟ੍ਰਿਕਟ ਸੈਂਟਰ, ਨਵੀਂ ਦਿੱਲੀ ਵਿੱਚ ਹੈ, ਅਤੇ ਅਸੀਂ ਦਿੱਲੀ, ਗੁੜਗਾਓਂ, ਨੋਇਡਾ, ਫ਼ਰੀਦਾਬਾਦ ਅਤੇ ਗ਼ਾਜ਼ੀਆਬਾਦ ਵਿੱਚ ਤੁਹਾਡੀ ਦੁਕਾਨ ਜਾਂ ਦਫ਼ਤਰ ਉੱਤੇ ਮੁਫ਼ਤ ਡੈਮੋ ਦਿੰਦੇ ਹਾਂ।',
    visit: 'ਸਾਡਾ ਪਤਾ', hours: 'ਸੋਮਵਾਰ–ਸ਼ਨੀਵਾਰ, ਸਵੇਰੇ 10 ਤੋਂ ਸ਼ਾਮ 6 · ਐਤਵਾਰ ਬੰਦ', map: 'Google Maps ਉੱਤੇ ਰਸਤਾ ਵੇਖੋ',
    areasH: 'ਅਸੀਂ ਕਿੱਥੇ ਡੈਮੋ, ਡਿਲੀਵਰੀ ਅਤੇ ਸਰਵਿਸ ਦਿੰਦੇ ਹਾਂ', city: 'ਸ਼ਹਿਰ', where: 'ਇਲਾਕੇ', machinesH: 'ਸਟਾਕ ਵਿੱਚ ਮਸ਼ੀਨਾਂ', quote: 'ਮੁਫ਼ਤ ਡੈਮੋ ਬੁੱਕ ਕਰੋ',
    areas: [
      ['ਦਿੱਲੀ', 'ਪੱਛਮੀ ਦਿੱਲੀ (ਜਨਕਪੁਰੀ, ਉੱਤਮ ਨਗਰ, ਦਵਾਰਕਾ, ਰਾਜੌਰੀ ਗਾਰਡਨ, ਵਿਕਾਸਪੁਰੀ, ਤਿਲਕ ਨਗਰ), ਪੁਰਾਣੀ ਦਿੱਲੀ (ਚਾਂਦਨੀ ਚੌਕ, ਸਦਰ ਬਾਜ਼ਾਰ, ਚਾਵੜੀ ਬਾਜ਼ਾਰ), ਕਰੋਲ ਬਾਗ਼, ਲਾਜਪਤ ਨਗਰ, ਨਹਿਰੂ ਪਲੇਸ, ਪੀਤਮਪੁਰਾ, ਰੋਹਿਣੀ, ਲਕਸ਼ਮੀ ਨਗਰ ਅਤੇ ਪੂਰੀ ਦਿੱਲੀ'],
      ['ਗੁੜਗਾਓਂ (ਗੁਰੂਗ੍ਰਾਮ)', 'ਪੂਰਾ ਗੁੜਗਾਓਂ, ਸੋਹਨਾ ਰੋਡ, ਉਦਯੋਗ ਵਿਹਾਰ, MG ਰੋਡ'],
      ['ਨੋਇਡਾ', 'ਨੋਇਡਾ ਅਤੇ ਗ੍ਰੇਟਰ ਨੋਇਡਾ'],
      ['ਫ਼ਰੀਦਾਬਾਦ', 'ਪੂਰਾ ਫ਼ਰੀਦਾਬਾਦ ਅਤੇ ਬੱਲਭਗੜ੍ਹ'],
      ['ਗ਼ਾਜ਼ੀਆਬਾਦ', 'ਗ਼ਾਜ਼ੀਆਬਾਦ, ਇੰਦਰਾਪੁਰਮ, ਵੈਸ਼ਾਲੀ, ਸਾਹਿਬਾਬਾਦ'],
      ['NCR ਤੋਂ ਬਾਹਰ (ਪੰਜਾਬ ਸਮੇਤ)', 'ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਕੂਰੀਅਰ ਰਾਹੀਂ ਡਿਲੀਵਰੀ, ਫ਼ੋਨ ਉੱਤੇ ਸਪੋਰਟ'],
    ],
    faq: [
      ['ਮੇਰੇ ਨੇੜੇ ਨੋਟ ਗਿਣਨ ਵਾਲੀ ਮਸ਼ੀਨ ਕਿੱਥੇ ਮਿਲੇਗੀ?', 'ਅਸੀਂ ਦਿੱਲੀ ਦੇ ਜਨਕਪੁਰੀ ਡਿਸਟ੍ਰਿਕਟ ਸੈਂਟਰ ਵਿੱਚ ਹਾਂ ਅਤੇ ਦਿੱਲੀ, ਗੁੜਗਾਓਂ, ਨੋਇਡਾ, ਫ਼ਰੀਦਾਬਾਦ ਅਤੇ ਗ਼ਾਜ਼ੀਆਬਾਦ ਵਿੱਚ ਤੁਹਾਡੀ ਦੁਕਾਨ ਜਾਂ ਦਫ਼ਤਰ ਉੱਤੇ ਮੁਫ਼ਤ ਡੈਮੋ ਦਿੰਦੇ ਹਾਂ। 88260 35757 ਉੱਤੇ ਕਾਲ ਕਰੋ।'],
      ['ਕੀ ਤੁਸੀਂ ਦੁਕਾਨ ਉੱਤੇ ਆ ਕੇ ਮਸ਼ੀਨ ਦਾ ਡੈਮੋ ਦਿੰਦੇ ਹੋ?', 'ਹਾਂ। ਦਿੱਲੀ NCR ਵਿੱਚ ਤੁਹਾਡੀ ਦੁਕਾਨ ਜਾਂ ਦਫ਼ਤਰ ਉੱਤੇ ਮੁਫ਼ਤ ਡੈਮੋ, ਤਾਂ ਜੋ ਖਰੀਦਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਸੀਂ ਮਸ਼ੀਨ ਨੂੰ ਆਪਣੇ ਨੋਟਾਂ ਉੱਤੇ ਚਲਾ ਕੇ ਵੇਖ ਸਕੋ।'],
      ['ਕੀ ਮੈਂ ਦਫ਼ਤਰ ਆ ਕੇ ਮਸ਼ੀਨ ਵੇਖ ਸਕਦਾ ਹਾਂ?', 'ਹਾਂ, ਸੋਮਵਾਰ ਤੋਂ ਸ਼ਨੀਵਾਰ ਸਵੇਰੇ 10 ਤੋਂ ਸ਼ਾਮ 6 ਵਜੇ ਤੱਕ। ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਕਾਲ ਕਰ ਦਿਓ ਤਾਂ ਜੋ ਜਿਹੜਾ ਮਾਡਲ ਤੁਸੀਂ ਵੇਖਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਹ ਤਿਆਰ ਰਹੇ।'],
      ['ਖਰੀਦਣ ਤੋਂ ਬਾਅਦ ਸਰਵਿਸ ਕੌਣ ਕਰੇਗਾ?', 'ਸਾਡੇ ਤੋਂ ਖਰੀਦੀਆਂ ਮਸ਼ੀਨਾਂ ਦੀ ਸਰਵਿਸ ਅਸੀਂ ਕਰਦੇ ਹਾਂ: ਪੈਸੀਫ਼ਿਕ ਇੰਟਰਨੈਸ਼ਨਲ ਮਸ਼ੀਨਾਂ ਉੱਤੇ 1 ਸਾਲ ਆਨਸਾਈਟ ਵਾਰੰਟੀ ਅਤੇ ਕੋਰਸ ਉੱਤੇ ਕੰਪਨੀ ਵਾਰੰਟੀ, ਨਵੇਂ ਨੋਟਾਂ ਲਈ ਸਾਫ਼ਟਵੇਅਰ ਅੱਪਡੇਟ ਦੇ ਨਾਲ।'],
    ],
  },
} satisfies Record<Lang, Record<string, unknown>>;
