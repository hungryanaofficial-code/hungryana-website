'use client';

import Link from 'next/link';
import { Flame, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LogoImage } from '@/components/ui/LogoImage';
import { OPENING, PHONE_TEL, QUICK_LINKS, SITE } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden bg-black pb-10 pt-24 md:min-h-[92vh] md:pb-14"
      aria-label="Hungryana — opening soon"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.biryani})` }}
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="spicy-glow absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center">
        {/* Opening badge — no promo banner image */}
        <div className="opening-badge mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-wide">
          <Flame className="h-4 w-4 text-orange" aria-hidden="true" />
          <span>
            {OPENING.label} · {OPENING.date}
          </span>
        </div>

        <LogoImage size="hero" priority className="mx-auto mb-4" />

        <p className="font-body text-lg text-gold/90 md:text-xl" lang="bn">
          {SITE.nameBengali}
        </p>

        <h1 className="mt-3 font-display text-4xl leading-tight tracking-wide text-warm-white md:text-6xl lg:text-7xl">
          <span className="text-gradient-spicy">{SITE.tagline}</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          Multi-cuisine restaurant in {SITE.locality}. Biryani, Pizza, Momos, Tandoor &amp; more —
          bold flavours, young energy, premium taste.
        </p>

        <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm text-cream/60">
          <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          {OPENING.location}
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href="/menu" variant="primary" ariaLabel="Browse our menu">
            Browse Menu
          </Button>
          <Button href={PHONE_TEL} variant="outline" ariaLabel="Call to order">
            Call to Order
          </Button>
        </div>

        {/* Quick jump — easy navigation */}
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Quick links"
        >
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
