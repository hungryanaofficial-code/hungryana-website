export const SITE = {
  name: 'Hungryana',
  nameBengali: 'হাংরিয়ানা',
  tagline: 'Eat Hearty, Stay Hungry',
  taglineAlt: 'One Destination, Endless Flavours',
  email: 'hungryana.official@gmail.com',
  phone: '+91 83898 77242',
  address: 'Paschimpatty, Kirnahar, Birbhum, West Bengal 731302',
  locality: 'Kirnahar',
  district: 'Birbhum',
  mapsQuery: '23.7665952,87.8735082',
  /** Google Business listing (reviews, directions) */
  mapsUrl: 'https://maps.google.com/?cid=1490091192681277951',
  googleRating: '4.7',
  googleReviewCount: 15,
} as const;

export const OPENING = {
  label: 'Grand Opening',
  date: '11th September',
  location: `${SITE.locality}, ${SITE.district}`,
} as const;

export const DURGA_PUJA = {
  eyebrow: 'শারদীয় শুভেচ্ছা',
  headline: 'Subho Sharodiya',
  headlineBn: 'মা দুর্গার আশীর্বাদে',
  subline:
    'Hungryana পরিবারের পক্ষ থেকে কির্ণাহার, বীরভূম ও সমগ্র বাংলার প্রতি আন্তরিক শারদীয় শুভেচ্ছা।',
  visitLine: 'Puja season? Visit Hungryana — celebrate with biryani, basanti pulao, momos & family platters.',
  ctaPrimary: 'Visit Hungryana',
  ctaMenu: 'Puja Menu',
} as const;

export const DURGA_WISHES = [
  {
    id: 'shubhechha',
    label: 'শুভেচ্ছা',
    bn: 'শারদীয় শুভেচ্ছা ও অন্তরের শুভেষা।',
    en: 'Warm Durga Puja greetings from all of us at Hungryana.',
  },
  {
    id: 'ashirbad',
    label: 'আশীর্বাদ',
    bn: 'মা দুর্গার আশীর্বাদে আপনার জীবন সুখ, শান্তি ও সমৃদ্ধিতে ভরে উঠুক।',
    en: 'May Maa Durga bless you with joy, peace, and prosperity.',
  },
  {
    id: 'bhog',
    label: 'পুজো ভোগ',
    bn: 'পুজোর দিনে পরিবারের সঙ্গে Hungryana-তে বসে খাওয়ার স্বাদ উপভোগ করুন।',
    en: 'Share festive meals with family — dine in or order from Hungryana.',
  },
  {
    id: 'kirnahar',
    label: 'কির্ণাহার',
    bn: 'কির্ণাহার, বীরভূম — এক ছাদে বহু রস, পুজোর রাতে আপনার পাশে Hungryana।',
    en: 'Your neighbourhood multi-cuisine kitchen in Kirnahar, Birbhum.',
  },
] as const;

/** Use for `href` on call-to-order buttons and phone links */
export const PHONE_TEL = `tel:${SITE.phone.replace(/\s/g, '')}`;

export const ABOUT_STORY = {
  intro:
    'Hungryana is a joint initiative — born from the friendship of a passionate foodie and an experienced cook who share one belief: great food should feel honest, generous, and worth coming back for.',
  foodie: {
    title: 'The Foodie',
    text: 'Years of tasting flavours across India — from biryanis and Mughlai curries to wok-tossed noodles and wood-fired pizzas.',
  },
  cook: {
    title: 'The Cook',
    text: 'Hands-on experience across Indian, Bengali, Chinese, and Italian cooking — turning ideas into dishes that arrive hot, fresh, and full of flavour.',
  },
  closing: `Together they built Hungryana in ${SITE.locality} — a neighbourhood kitchen where multiple cuisines live under one roof.`,
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/', icon: 'home' as const },
  { label: 'About', href: '/#about', icon: 'about' as const },
  { label: 'Menu', href: '/menu', icon: 'menu' as const },
  { label: 'Contact', href: '/#contact', icon: 'contact' as const },
] as const;

export const QUICK_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const BUSINESS_HOURS = [
  { day: 'Monday – Thursday', hours: '11:00 AM – 11:00 PM' },
  { day: 'Friday – Saturday', hours: '11:00 AM – 12:00 AM' },
  { day: 'Sunday', hours: '10:00 AM – 11:00 PM' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
] as const;

export const CUISINE_CATEGORIES = [
  'Biryani',
  'Pizza & Pasta',
  'Indian Main Course',
  'Chinese & Wok',
  'Momos & Starters',
  'South Indian',
  'Beverages & Dessert',
] as const;
