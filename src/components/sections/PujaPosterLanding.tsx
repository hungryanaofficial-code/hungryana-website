'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { QUICK_LINKS } from '@/lib/constants';

/** Full Puja poster as homepage — copy and spelling come from the artwork */
export function PujaPosterLanding() {
  return (
    <section id="home" className="bg-black pb-10 pt-20 md:pb-14 md:pt-24" aria-label="Hungryana — Durga Puja">
      <div className="mx-auto w-full max-w-5xl px-4 lg:max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-gold/20 bg-[#fff8e7] shadow-2xl shadow-red/15">
          <Image
            src="/hungryana-puja-landing.png"
            alt="This Puja, Visit Hungryana — Hungryana Restaurant, Kirnahar, Birbhum. Call 83898 77242."
            width={1200}
            height={1500}
            priority
            className="h-auto w-full object-contain object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href="/menu" variant="primary" ariaLabel="Browse menu">
            Browse Menu
          </Button>
          <OrderNowButton />
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Quick links">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-cream/75 backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
