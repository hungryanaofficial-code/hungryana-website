import { FullMenu } from '@/components/sections/FullMenu';
import { SITE, PHONE_TEL } from '@/lib/constants';

export const metadata = {
  title: 'Menu | Hungryana — Kirnahar, Birbhum',
  description: 'Full menu with prices — Biryani, Pizza, Indian, Chinese, Pasta & more at Hungryana.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto mb-6 max-w-3xl px-5 text-center">
        <h1 className="font-display text-3xl font-bold text-warm-white md:text-4xl">
          {SITE.name} Menu
        </h1>
        <p className="mt-2 text-gold">{SITE.tagline}</p>
        <a
          href={PHONE_TEL}
          className="mt-4 inline-block text-sm font-medium text-cream/70 hover:text-gold"
        >
          Order: {SITE.phone}
        </a>
      </div>
      <FullMenu />
    </div>
  );
}
