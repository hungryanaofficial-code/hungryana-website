'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { PHONE_TEL } from '@/lib/constants';

export function OpeningBanner() {
  return (
    <section
      id="home"
      className="bg-black pt-[4.5rem] md:pt-20"
      aria-label="Hungryana opening announcement"
    >
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-5">
        <Image
          src="/opening-banner.png"
          alt="Hungryana Multi Cuisine Restaurant — Opening 11th September. Kirnahar, Birbhum."
          width={1200}
          height={675}
          priority
          className="h-auto w-full rounded-xl"
          sizes="(max-width: 896px) 100vw, 896px"
        />

        <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
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
