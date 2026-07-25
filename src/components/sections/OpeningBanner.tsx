'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { PHONE_TEL } from '@/lib/constants';

export function OpeningBanner() {
  return (
    <section
      id="home"
      className="relative bg-black pt-20 md:pt-24"
      aria-label="Hungryana opening announcement"
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-5">
        <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-2xl shadow-red/20">
          <Image
            src="/opening-banner.png"
            alt="Hungryana Multi Cuisine Restaurant — Opening 11th September. Kirnahar, Paschimpatty, Birbhum. hungryana.com"
            width={1200}
            height={675}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 pb-10 sm:flex-row">
          <Button href="#full-menu" variant="primary" ariaLabel="View our menu">
            View Menu
          </Button>
          <Button href={PHONE_TEL} variant="outline" ariaLabel="Call to order now">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
