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

/** Menu synced from Hungryana Excel / print menu reference */
export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'biryani',
    title: 'Biryani',
    emoji: '🍛',
    subsections: [
      {
        title: 'The Biryani Station',
        items: [
          { name: 'Chicken Biryani', price: '₹120', featured: true },
          { name: 'Mutton Biryani', price: '₹220', description: 'Subject to availability' },
          { name: 'Egg Biryani', price: '₹100' },
        ],
      },
    ],
  },
  {
    id: 'pizza-pasta',
    title: 'Pizza & Pasta',
    emoji: '🍕',
    subsections: [
      {
        title: 'Hand-Tossed Pizzas',
        items: [
          { name: 'Margherita (Classic Cheese)', price: '₹80' },
          { name: 'Farmhouse (Veg)', price: '₹90' },
          { name: 'Chicken Pizza', price: '₹100', featured: true },
          { name: 'Chicken Pizza — Extra Cheese', price: '₹110' },
          { name: 'Paneer Pizza', price: '₹90' },
        ],
      },
      {
        title: 'Italian Pasta',
        items: [
          { name: 'Paneer Pasta', price: '₹70' },
          { name: 'Chicken Pasta', price: '₹80' },
        ],
      },
    ],
  },
  {
    id: 'starters',
    title: 'Starters',
    emoji: '🌶️',
    subsections: [
      {
        title: 'Indo-Chinese Appetizers',
        items: [
          { name: 'Kurkure Fried Chicken (4 pcs)', price: '₹100' },
          { name: 'Chilli Chicken (8 pcs, Dry / Gravy)', price: '₹150', featured: true },
          { name: 'Chilli Paneer (Dry / Gravy)', price: '₹120' },
          { name: 'Hot Garlic Chicken (8 pcs)', price: '₹150' },
          { name: 'Honey Chicken (Dry)', price: '₹160' },
          { name: 'Chicken Lollipop (4 pcs)', price: '₹80' },
          { name: 'Kurkure Baby Corn', price: '₹100' },
          { name: 'Baby Corn Taka Tin', price: '₹110' },
        ],
      },
    ],
  },
  {
    id: 'momos',
    title: 'Momos',
    emoji: '🥟',
    subsections: [
      {
        title: 'Steamed Momos (6 pcs)',
        items: [
          { name: 'Veg Steamed Momo', price: '₹50' },
          { name: 'Paneer Steamed Momo', price: '₹55' },
          { name: 'Chicken Steamed Momo', price: '₹60', featured: true },
        ],
      },
      {
        title: 'Fried & Special Momos (6 pcs)',
        items: [
          { name: 'Veg Fried Momo', price: '₹55' },
          { name: 'Paneer Fried Momo', price: '₹60' },
          { name: 'Chicken Fried Momo', price: '₹65' },
          { name: 'Schezwan Momo', price: '₹65' },
        ],
      },
    ],
  },
  {
    id: 'indian-main',
    title: 'Indian Main Course',
    emoji: '🍲',
    subsections: [
      {
        title: 'Chicken Specialties',
        items: [
          { name: 'Chicken Bharta', price: '₹170' },
          { name: 'Chicken Butter Masala', price: '₹160' },
          { name: 'Kadai Chicken', price: '₹160' },
          { name: 'Chicken Kosha', price: '₹160' },
          { name: 'Shahi Chicken (Sweet)', price: '₹160' },
        ],
      },
      {
        title: 'Paneer Specialties',
        items: [
          { name: 'Kadai Paneer', price: '₹120' },
          { name: 'Paneer Do Pyaza', price: '₹130' },
          { name: 'Paneer Butter Masala', price: '₹130' },
        ],
      },
    ],
  },
  {
    id: 'tandoor',
    title: 'Tandoor',
    emoji: '🔥',
    subsections: [
      {
        title: 'Kebabs & Tikka',
        items: [
          { name: 'Paneer Tikka (6 pcs)', price: '₹130', featured: true },
          { name: 'Chicken Tikka (6 pcs)', price: '₹160', featured: true },
          { name: 'Malai Chicken Tikka', price: '₹180' },
          { name: 'Hariyali Chicken Tikka', price: '₹170' },
          { name: 'Tandoori Chicken — Half', price: '₹200' },
          { name: 'Tandoori Chicken — Full', price: '₹380' },
        ],
      },
      {
        title: 'Naan & Roti',
        items: [
          { name: 'Plain Naan', price: '₹30' },
          { name: 'Butter Naan', price: '₹35' },
          { name: 'Garlic Naan', price: '₹40' },
          { name: 'Cheese Naan', price: '₹40' },
          { name: 'Garlic Cheese Naan', price: '₹40' },
          { name: 'Tandoori Roti', price: '₹20' },
          { name: 'Butter Tandoori Roti', price: '₹25' },
        ],
      },
    ],
  },
  {
    id: 'wok-rolls',
    title: 'Wok & Rolls',
    emoji: '🍜',
    subsections: [
      {
        title: 'Fried Rice',
        items: [
          { name: 'Veg Fried Rice', price: '₹50' },
          { name: 'Egg Fried Rice', price: '₹60' },
          { name: 'Chicken Fried Rice', price: '₹70' },
          { name: 'Mix Fried Rice', price: '₹80' },
        ],
      },
      {
        title: 'Noodles',
        items: [
          { name: 'Veg Hakka Noodles', price: '₹60' },
          { name: 'Egg Noodles', price: '₹70' },
          { name: 'Chicken Noodles', price: '₹80' },
          { name: 'Mix Noodles', price: '₹90' },
        ],
      },
      {
        title: 'Street-Style Rolls',
        items: [
          { name: 'Paneer Roll', price: '₹45' },
          { name: 'Egg Roll', price: '₹45' },
          { name: 'Chicken Roll', price: '₹60' },
          { name: 'Egg Chicken Roll', price: '₹70' },
        ],
      },
    ],
  },
  {
    id: 'breads-sides',
    title: 'Rice, Breads & Dal',
    emoji: '🫓',
    subsections: [
      {
        title: 'Paratha',
        items: [
          { name: 'Laccha Paratha', price: '₹30' },
          { name: 'Aloo Paratha', price: '₹35' },
        ],
      },
      {
        title: 'Dal',
        items: [
          { name: 'Plain Dal Fry', price: '₹40' },
          { name: 'Mix Dal Fry', price: '₹50' },
        ],
      },
      {
        title: 'Rice & Pulao',
        items: [
          { name: 'Plain Rice', price: '₹40' },
          { name: 'Jeera Rice', price: '₹40' },
          { name: 'Peas Pulao', price: '₹45' },
          { name: 'Sweet Veg Pulao — Kaju Kismiss', price: '₹70' },
        ],
      },
    ],
  },
  {
    id: 'south-indian',
    title: 'South Indian',
    emoji: '🥘',
    subsections: [
      {
        title: 'South Indian Favourites',
        items: [
          { name: 'Plain Dosa', price: '₹50' },
          { name: 'Masala Dosa', price: '₹65', featured: true },
          { name: 'Cheese Dosa', price: '₹70' },
          { name: 'Idli (4 pcs)', price: '₹40' },
          { name: 'Dahi Vada', price: '₹50' },
          { name: 'Medu Vada (4 pcs)', price: '₹40' },
        ],
      },
    ],
  },
  {
    id: 'beverages-dessert',
    title: 'Beverages & Dessert',
    emoji: '🥤',
    subsections: [
      {
        title: 'Lassi & Coffee',
        items: [
          {
            name: 'Hungryana Special Lassi',
            price: '₹80',
            description: 'With coconut, banana, kaju & kismiss',
            featured: true,
          },
          { name: 'Salted Lassi', price: '₹50' },
          { name: 'Cold Coffee', price: '₹80' },
          { name: 'Hot Coffee', price: '₹20' },
        ],
      },
      {
        title: 'Mocktails & Coolers',
        items: [
          { name: 'Fresh Lime Soda — Sweet / Mix / Salt', price: '₹40' },
          { name: 'Virgin Mojito', price: '₹50' },
          { name: 'Blue Lagoon', price: '₹50' },
          { name: 'Watermelon Mojito', price: '₹50' },
          { name: 'Nimbu Shikanji', price: '₹60' },
          { name: 'Aam Jhatka', price: '₹60' },
        ],
      },
      {
        title: 'Dessert',
        items: [
          { name: 'Fried Ice Cream', price: '₹60', featured: true },
          { name: 'Gulab Jamun Ice Cream', price: '₹45' },
        ],
      },
    ],
  },
  {
    id: 'soups',
    title: 'Soups',
    emoji: '🥣',
    subsections: [
      {
        title: 'Soups',
        items: [
          { name: 'Classic Tomato Soup', price: '₹30' },
          { name: 'Sweet Corn Soup — Veg', price: '₹30' },
          { name: 'Sweet Corn Soup — Non-Veg', price: '₹40' },
        ],
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
