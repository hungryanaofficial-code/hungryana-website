import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MenuView } from '@/components/sections/MenuView';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: 'Menu | Hungryana — Kirnahar, Birbhum',
  description: 'Full menu with prices — Biryani, Pizza, Indian, Chinese, Pasta & more at Hungryana.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black pt-16 pb-28">
      <div className="px-5 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors active:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl text-warm-white">{SITE.name}</h1>
            <p className="text-sm text-gold">{SITE.tagline}</p>
          </div>
          <OrderNowButton compact />
        </div>
      </div>

      <MenuView showHeading={false} />
    </div>
  );
}
