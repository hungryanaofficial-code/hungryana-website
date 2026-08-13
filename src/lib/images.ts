/** Dish-matched Unsplash photos — each URL verified for the labelled item */
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMAGES = {
  // Hero
  heroPizza: u('photo-1513104890138-7c749659a591', 1920),
  heroKebab: u('photo-1742808838159-1848c1a36209', 1920),

  // By dish
  sizzler: u('photo-1763219802762-1d34ee0907c5'), // grilled chicken + vegetables
  biryani: u('photo-1631515243349-e0cb75fb8d3a'), // Indian chicken biryani bowl
  butterChicken: u('photo-1742599361498-79824d24e355'), // butter chicken with gravy
  cheesePizza: u('photo-1772494047822-d0375853f7fd'), // cheese-pull pizza slice
  hakkaNoodles: u('photo-1772729219168-af0f0e57bb9c'), // chicken chow mein / noodles
  friedRice: u('photo-1512058564366-18510be2db19'), // Indo-Chinese fried noodles/rice style
  lassi: u('photo-1626074353765-769a6840ada2'), // thick mango/yogurt drink
  pasta: u('photo-1621996346565-e3dbc646d9a9'),
  tandoorKebab: u('photo-1603360946369-610cb4a1552c'), // seekh kebab skewers
  momo: u('photo-1496116218417-3981a247bcd4'), // dumplings
  mocktail: u('photo-1544145945-f90425340c7e'),
  dessert: u('photo-1551024506-0bccd828d307'), // ice cream dessert
  about: u('photo-1414235077428-338989a2e8c0', 1200),
  interior: u('photo-1517248135467-4c7edcad34c4'),

  // Legacy aliases (keep categories working)
  pizza: u('photo-1772494047822-d0375853f7fd'),
  mughlai: u('photo-1742599361498-79824d24e355'),
  indian: u('photo-1742599361498-79824d24e355'),
  chinese: u('photo-1772729219168-af0f0e57bb9c'),
  chowmein: u('photo-1512058564366-18510be2db19'),
} as const;

export const SPECIALITIES = [
  {
    title: 'Hungryana Special Chicken Sizzler',
    description: 'Grilled chicken, sautéed veggies, and fries on a smoking plate.',
    image: IMAGES.sizzler,
  },
  {
    title: 'Chicken Biryani',
    description: 'Aromatic basmati with chicken, aloo, and egg — our biryani station favourite.',
    image: IMAGES.biryani,
  },
  {
    title: 'Chicken Butter Masala',
    description: 'Creamy tomato gravy with tender chicken — a timeless Indian classic.',
    image: IMAGES.butterChicken,
  },
  {
    title: 'Cheese Overloaded Pizza',
    description: 'Chicken loaded with extra mozzarella on a hand-tossed crust.',
    image: IMAGES.cheesePizza,
  },
  {
    title: 'Hakka Noodles & Fried Rice',
    description: 'Wok-tossed Indo-Chinese favourites with bold, smoky flavours.',
    image: IMAGES.hakkaNoodles,
  },
  {
    title: 'Hungryana Special Lassi',
    description: 'Signature lassi with coconut, banana, kaju, and kismiss.',
    image: IMAGES.lassi,
  },
] as const;

export const MENU_CATEGORIES = [
  {
    emoji: '🍛',
    title: 'Biryani',
    description: 'Aromatic dum biryani with chicken, aloo, and egg.',
    image: IMAGES.biryani,
    href: '/menu',
  },
  {
    emoji: '🍕',
    title: 'Pizza',
    description: 'Hand-tossed pizzas with extra cheese and toppings.',
    image: IMAGES.cheesePizza,
    href: '/menu',
  },
  {
    emoji: '🍜',
    title: 'Chinese',
    description: 'Hakka noodles, fried rice, and wok-tossed starters.',
    image: IMAGES.hakkaNoodles,
    href: '/menu',
  },
  {
    emoji: '🍲',
    title: 'Indian',
    description: 'Mughlai curries, butter masala, and regional favourites.',
    image: IMAGES.butterChicken,
    href: '/menu',
  },
  {
    emoji: '🍝',
    title: 'Pasta',
    description: 'Red and white sauce pasta, veg and chicken.',
    image: IMAGES.pasta,
    href: '/menu',
  },
  {
    emoji: '🔥',
    title: 'Tandoor',
    description: 'Seekh kebab, tikka, and tandoori chicken.',
    image: IMAGES.tandoorKebab,
    href: '/menu',
  },
  {
    emoji: '🥤',
    title: 'Beverages',
    description: 'Lassi, mocktails, and hot brews.',
    image: IMAGES.lassi,
    href: '/menu',
  },
  {
    emoji: '🍰',
    title: 'Desserts',
    description: 'Fried ice cream and sweet endings.',
    image: IMAGES.dessert,
    href: '/menu',
  },
] as const;

export const GALLERY_ITEMS = [
  { src: IMAGES.biryani, alt: 'Chicken biryani with aromatic rice', category: 'Biryani' },
  { src: IMAGES.cheesePizza, alt: 'Cheese loaded pizza slice', category: 'Pizza' },
  { src: IMAGES.butterChicken, alt: 'Chicken butter masala curry', category: 'Indian' },
  { src: IMAGES.hakkaNoodles, alt: 'Chicken hakka noodles', category: 'Chinese' },
  { src: IMAGES.tandoorKebab, alt: 'Tandoor seekh kebab skewers', category: 'Tandoor' },
  { src: IMAGES.sizzler, alt: 'Grilled chicken sizzler with vegetables', category: 'Special' },
  { src: IMAGES.momo, alt: 'Steamed momos', category: 'Momos' },
  { src: IMAGES.lassi, alt: 'Hungryana special lassi', category: 'Beverages' },
  { src: IMAGES.dessert, alt: 'Fried ice cream dessert', category: 'Desserts' },
] as const;

export const WHY_CHOOSE = [
  { title: 'Fresh Ingredients', description: 'Sourced daily from trusted local suppliers.' },
  { title: 'Experienced Chefs', description: 'Culinary experts crafting every dish with passion.' },
  { title: 'Multi-Cuisine Options', description: 'Eight cuisines under one roof for every craving.' },
  { title: 'Hygienic Kitchen', description: 'Strict food safety standards at every step.' },
  { title: 'Quick Service', description: 'Fast, attentive service without compromising quality.' },
  { title: 'Family Friendly Ambience', description: 'Warm, welcoming space for all ages.' },
] as const;
