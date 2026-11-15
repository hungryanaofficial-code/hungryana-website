export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
}

export interface MenuSubsection {
  title: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  title: string;
  emoji: string;
  subsections: MenuSubsection[];
}

/** Official Hungryana menu (3-page print menu) */
export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'starters-soups',
    title: 'Starters & Soups',
    emoji: '🥟',
    subsections: [
      {
        title: 'Starters',
        items: [
          { name: 'Pakora (6 pcs)', price: '₹110' },
          { name: 'Lollipop (4 pcs)', price: '₹110' },
          { name: 'Fish Finger (4 pcs)', price: '₹120' },
        ],
      },
      {
        title: 'Momos & Rolls (6 pcs / Regular)',
        items: [
          { name: 'Veg Steam Momo', price: '₹50' },
          { name: 'Chicken Steam Momo', price: '₹70', featured: true },
          { name: 'Veg Fried Momo', price: '₹60' },
          { name: 'Chicken Fried Momo', price: '₹80' },
          { name: 'Schezwan Momo (Chicken)', price: '₹90' },
          { name: 'Schezwan Momo (Veg)', price: '₹70' },
          { name: 'Egg Roll', price: '₹50' },
          { name: 'Paneer Roll', price: '₹60' },
          { name: 'Chicken Roll', price: '₹70' },
          { name: 'Egg Chicken Roll', price: '₹80' },
        ],
      },
      {
        title: 'Pasta & Soup',
        items: [
          { name: 'Veg White Sauce Pasta', price: '₹100' },
          { name: 'Non-Veg White Sauce Pasta', price: '₹120' },
          { name: 'Classic Tomato Soup', price: '₹40' },
          { name: 'Sweet Corn Soup', price: '₹50' },
          { name: 'Sweet Corn Non-Veg Soup', price: '₹60' },
        ],
      },
    ],
  },
  {
    id: 'south-indian-pizza',
    title: 'South Indian & Pizza',
    emoji: '🍕',
    subsections: [
      {
        title: 'South Indian',
        items: [
          { name: 'Plain Dosa', price: '₹50' },
          { name: 'Masala Dosa', price: '₹70', featured: true },
          { name: 'Cheese Masala Dosa', price: '₹80' },
          { name: 'Idli (4 pcs)', price: '₹50' },
          { name: 'Dahi Vada', price: '₹80' },
          { name: 'Medu Vada (4 pcs)', price: '₹50' },
        ],
      },
      {
        title: 'Pizza',
        items: [
          { name: 'Margherita Pizza', price: '₹120' },
          { name: 'Farmhouse Veg Pizza', price: '₹140' },
          { name: 'Paneer Pizza', price: '₹150' },
          { name: 'Chicken Pizza', price: '₹160', featured: true },
          { name: 'Extra Cheese', price: '₹20' },
        ],
      },
    ],
  },
  {
    id: 'paratha-rice-mains',
    title: 'Paratha, Rice & Indian Mains',
    emoji: '🍛',
    subsections: [
      {
        title: 'Paratha & Rice',
        items: [
          { name: 'Lachha Paratha', price: '₹35' },
          { name: 'Peas Pulao', price: '₹90' },
          { name: 'Sweet Kaju Kismiss Pulao', price: '₹120' },
          { name: 'Jeera Rice', price: '₹70' },
        ],
      },
      {
        title: 'Indian Mains & Biryani',
        items: [
          { name: 'Chicken Kosha (4 pcs)', price: '₹200' },
          { name: 'Chicken Bharta', price: '₹240' },
          { name: 'Egg Biriyani', price: '₹120' },
          { name: 'Chicken Biriyani', price: '₹160', featured: true },
          { name: 'Aloo Biriyani', price: '₹100' },
        ],
      },
    ],
  },
  {
    id: 'chinese',
    title: 'Chinese Specialties',
    emoji: '🍜',
    subsections: [
      {
        title: 'Noodles & Fried Rice',
        items: [
          {
            name: 'Hakka Noodles',
            price: '₹90 – ₹140',
            description: 'Veg / Egg / Chicken / Mixed',
          },
          {
            name: 'Fried Rice',
            price: '₹70 – ₹160',
            description: 'Veg / Paneer / Egg / Chicken / Mix',
          },
        ],
      },
      {
        title: 'Indo-Chinese',
        items: [
          { name: 'Chilli Paneer (Gravy / Dry) (8 pcs)', price: '₹160' },
          { name: 'Chilli Chicken (Gravy / Dry) (8 pcs)', price: '₹180', featured: true },
          { name: 'Hot Garlic Chicken / Paneer', price: '₹190' },
          { name: 'Honey Chicken / Paneer', price: '₹200' },
        ],
      },
    ],
  },
  {
    id: 'tandoor',
    title: 'Tandoor Corner',
    emoji: '🔥',
    subsections: [
      {
        title: 'Naan & Roti',
        items: [
          { name: 'Plain Naan', price: '₹40' },
          { name: 'Butter Naan', price: '₹50' },
          { name: 'Garlic Naan', price: '₹60' },
          { name: 'Tandoori Roti', price: '₹35' },
          { name: 'Butter Tandoori Roti', price: '₹40' },
        ],
      },
      {
        title: 'Kebabs & Tandoori',
        items: [
          { name: 'Paneer Tikka (6 pcs)', price: '₹200', featured: true },
          { name: 'Chicken Tikka (6 pcs)', price: '₹220', featured: true },
          { name: 'Tandoori Chicken (Half)', price: '₹350' },
          { name: 'Tandoori Chicken (Full)', price: '₹550' },
        ],
      },
    ],
  },
  {
    id: 'beverages-dessert',
    title: 'Beverages, Coffee & Desserts',
    emoji: '🥤',
    subsections: [
      {
        title: 'Lassi & Coolers',
        items: [
          {
            name: 'Hungryana Special Lassi',
            price: '₹50 – ₹80',
            description: 'Special / Sweet / Salted / Mixed',
            featured: true,
          },
          {
            name: 'Fresh Lime Soda',
            price: '₹40 – ₹45',
            description: 'Sweet / Salted / Mixed',
          },
          {
            name: 'Virgin Mojito / Blue Lagoon / Watermelon / Nimbu Shikanji',
            price: '₹60',
          },
        ],
      },
      {
        title: 'Coffee & Ice Cream',
        items: [
          { name: 'Cold Coffee', price: '₹80' },
          { name: 'Cold Coffee with Ice Cream', price: '₹100' },
          {
            name: 'Jamuni Vanilla / Cookies Cream / Butterscotch',
            price: '₹80',
          },
        ],
      },
      {
        title: 'Dessert',
        items: [{ name: 'Hot Gulab Jamun (2 pcs)', price: '₹30' }],
      },
    ],
  },
];

export const MENU_TAGLINE = 'Eat Hearty, Stay Hungry';

export const FEATURED_ITEMS = MENU_SECTIONS.flatMap((section) =>
  section.subsections.flatMap((sub) =>
    sub.items.filter((item) => item.featured).map((item) => ({
      ...item,
      section: section.title,
    }))
  )
);
