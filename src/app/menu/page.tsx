import Link from 'next/link';
import { FullMenu } from '@/components/sections/FullMenu';
import { Button } from '@/components/ui/Button';
import { PHONE_TEL, SITE } from '@/lib/constants';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Menu | Hungryana — Kirnahar, Birbhum',
  description: 'Full menu with prices — Biryani, Pizza, Indian, Chinese, Pasta & more at Hungryana.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-24 md:pb-16">
      <div className="mx-auto max-w-3xl px-5">
        <Link
          href="/#home"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl text-warm-white md:text-5xl">{SITE.name} Menu</h1>
          <p className="mt-2 text-gold">{SITE.tagline}</p>
          <div className="mt-5">
            <Button href={PHONE_TEL} variant="primary" className="!text-sm" ariaLabel="Call to order">
              Order: {SITE.phone}
            </Button>
          </div>
        </div>
      </div>
      <FullMenu />
    </div>
  );
}
