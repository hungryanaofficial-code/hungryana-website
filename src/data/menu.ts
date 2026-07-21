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

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'biryani',
    title: 'Biryani',
    emoji: '🍛',
    subsections: [
      {
        title: 'The Biryani Station',
        items: [
          {
            name: 'Chicken Biryani',
            price: '₹130',
            description: '1pc Chicken, 1pc Aloo, 1pc Egg',
            featured: true,
          },
          {
            name: 'Mutton Biryani',
            price: '₹230',
            description: '1pc Mutton, 1pc Aloo, 1pc Egg — subject to availability',
          },
        ],
      },
      {
        title: "Chef's Special",
        items: [
          {
            name: 'Hungryana Special Chicken Sizzler',
            price: '₹200',
            description: 'Grilled chicken, sautéed veggies, and fries on a smoking plate',
            featured: true,
          },
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
          { name: 'Margherita (Classic Cheese)', price: '₹100' },
          { name: 'Farmhouse (Fresh Veggies & Paneer)', price: '₹120' },
          { name: 'Peri-Peri Pizza (Spicy Kick)', price: 'Veg ₹130 / Chk ₹150' },
          { name: 'Chicken Feast (Loaded with Chicken)', price: '₹180' },
          { name: 'Cheese Overloaded (Chicken + Extra Mozzarella)', price: '₹200', featured: true },
        ],
      },
      {
        title: 'Italian Pasta',
        items: [
          { name: 'Veg Pasta (Red / White Sauce)', price: '₹80' },
          { name: 'Chicken Pasta (Red / White Sauce)', price: '₹100' },
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
          { name: 'Chilli Chicken (Dry / Gravy)', price: '₹130' },
          { name: 'Chilli Paneer (Dry / Gravy)', price: '₹120' },
          { name: 'Hot Garlic Chicken', price: '₹150' },
          { name: 'Honey Chicken (Crispy & Glazed)', price: '₹150' },
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
          { name: 'Veg Steamed Momo', price: '₹60', description: 'Classic vegetable filling' },
          { name: 'Paneer Steamed Momo', price: '₹70' },
          { name: 'Chicken Steamed Momo', price: '₹80', featured: true },
        ],
      },
      {
        title: 'Fried & Special Momos (6 pcs)',
        items: [
          { name: 'Veg Fried Momo', price: '₹70' },
          { name: 'Chicken Fried Momo', price: '₹90' },
          { name: 'Schezwan Momo', price: 'Veg ₹80 | Chicken ₹100' },
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
          { name: "Chicken Bharta (Chef's Choice)", price: '₹200' },
          { name: 'Chicken Butter Masala', price: '₹200' },
          { name: 'Kadai Chicken (4 pcs)', price: '₹200' },
          { name: 'Tariwala Chicken (4 pcs - Home style)', price: '₹210' },
          {
            name: 'Chicken Dakbanglow (Heritage recipe with Egg)',
            price: '₹220',
          },
          { name: 'Chicken Kosha (4 pcs - Spicy semi-dry)', price: '₹180' },
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
          { name: 'Paneer Tikka (8 pcs)', price: '₹180', featured: true },
          { name: 'Chicken Tikka (8 pcs)', price: '₹200', featured: true },
          { name: 'Malai Chicken Tikka (8 pcs)', price: '₹220' },
          { name: 'Hariyali Chicken Tikka (8 pcs)', price: '₹220' },
          { name: 'Chicken Seekh Kebab (2 pcs)', price: '₹180' },
          { name: 'Tandoori Chicken (Half)', price: '₹180', description: 'Marinated & clay-oven roasted' },
          { name: 'Tandoori Chicken (Full)', price: '₹320' },
        ],
      },
      {
        title: 'Naan & Kulcha',
        items: [
          { name: 'Plain Naan', price: '₹30' },
          { name: 'Butter Naan', price: '₹40' },
          { name: 'Garlic Naan', price: '₹50' },
          { name: 'Cheese Naan', price: '₹70' },
          { name: 'Garlic Cheese Naan', price: '₹80' },
          { name: 'Plain Kulcha', price: '₹35' },
          { name: 'Butter Kulcha', price: '₹45' },
          { name: 'Aloo Kulcha', price: '₹55' },
          { name: 'Paneer Kulcha', price: '₹65' },
          { name: 'Mix Kulcha', price: '₹70', description: 'Aloo & paneer stuffing' },
        ],
      },
      {
        title: 'Tandoori Roti',
        items: [
          { name: 'Tandoori Roti', price: '₹15' },
          { name: 'Butter Roti', price: '₹20' },
          { name: 'Roomali Roti', price: '₹25' },
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
        title: 'Fried Rice & Noodles',
        items: [
          { name: 'Fried Rice', price: 'Egg ₹80 | Chicken ₹90 | Mixed ₹110' },
          { name: 'Noodles', price: 'Veg ₹60 | Egg ₹70 | Chicken ₹90 | Mixed ₹110' },
        ],
      },
      {
        title: 'Street-Style Rolls',
        items: [
          { name: 'Egg Roll', price: '₹40' },
          { name: 'Chicken Roll', price: '₹60' },
          { name: 'Paneer Roll', price: '₹60' },
        ],
      },
    ],
  },
  {
    id: 'breads-sides',
    title: 'Breads & Sides',
    emoji: '🫓',
    subsections: [
      {
        title: 'Indian Breads',
        items: [
          { name: 'Laccha Paratha', price: '₹30' },
          { name: 'Aloo Paratha', price: '₹40' },
          { name: 'Paneer Paratha', price: '₹45' },
        ],
      },
      {
        title: 'Sides',
        items: [{ name: 'Dal Fry', price: '₹60' }],
      },
      {
        title: 'Rice & Pulao',
        items: [
          { name: 'Plain Rice', price: '₹50' },
          { name: 'Jeera Rice', price: '₹60' },
          { name: 'Peas Pulao', price: '₹70' },
          { name: 'Sweet Veg Pulao', price: '₹90' },
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
        title: 'Refreshing Drinks',
        items: [
          {
            name: 'Hungryana Special Lassi',
            price: '₹70',
            description: 'With Coconut, Banana, Kaju, and Kismiss',
            featured: true,
          },
          { name: 'Salted Lassi (With Roasted Cumin)', price: '₹50' },
          { name: 'Cold Coffee', price: '₹70' },
        ],
      },
      {
        title: 'Hot Brews',
        items: [
          { name: 'Special Milk Tea', price: '₹20' },
          { name: 'Hot Coffee', price: '₹25' },
        ],
      },
      {
        title: 'Dessert',
        items: [
          { name: 'Fried Ice Cream', price: '₹100', featured: true },
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
          { name: 'Classic Tomato Soup', price: '₹60' },
          { name: 'Sweet Corn Soup (Veg/Non-Veg)', price: '₹100' },
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
