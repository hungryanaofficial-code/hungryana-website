export const SITE = {
  name: 'Hungryana',
  nameBengali: 'হাংরিয়ানা',
  tagline: 'Eat Hearty, Stay Hungry',
  taglineAlt: 'One Destination, Endless Flavours',
  email: 'hungryana.official@gmail.com',
  phone: '+91 83898 77242',
  address: 'Kirnahar, Birbhum, West Bengal, India',
  locality: 'Kirnahar',
  district: 'Birbhum',
  mapsQuery: 'Kirnahar,Birbhum,West+Bengal',
} as const;

export const OPENING = {
  label: 'Grand Opening',
  date: '11th September',
  location: `${SITE.locality}, ${SITE.district}`,
} as const;

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
    text: 'Hands-on experience across Indian, Chinese, Italian, and tandoor cooking — turning ideas into dishes that arrive hot, fresh, and full of flavour.',
  },
  closing: `Together they built Hungryana in ${SITE.locality} — a neighbourhood kitchen where multiple cuisines live under one roof.`,
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home', icon: 'home' as const },
  { label: 'About', href: '#about', icon: 'about' as const },
  { label: 'Menu', href: '/menu', icon: 'menu' as const },
  { label: 'Contact', href: '#contact', icon: 'contact' as const },
] as const;

export const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '#contact' },
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
  'Tandoor',
  'Beverages & Dessert',
] as const;
