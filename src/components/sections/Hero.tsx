'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Snowflake, Star, UtensilsCrossed, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { LogoImage } from '@/components/ui/LogoImage';
import { SITE } from '@/lib/constants';
import { IMAGES, KITCHEN } from '@/lib/images';

const HIGHLIGHTS = [
  { icon: Star, label: `${SITE.googleRating} on Google`, sub: `${SITE.googleReviewCount}+ reviews` },
  { icon: Snowflake, label: 'Fully AC', sub: "Kirnahar's first AC restaurant" },
  { icon: UtensilsCrossed, label: '7 cuisines', sub: 'One roof, endless cravings' },
  { icon: Users, label: 'Family friendly', sub: 'Dine in or takeaway' },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black pt-20 md:pt-24"
      aria-label="Hungryana — home"
    >
      {/* Real dining room, slow cinematic zoom */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="hero-kenburns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.heroInterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 px-5 pb-12 lg:max-w-7xl lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <LogoImage size="hero" priority className="mx-auto mb-5 lg:mx-0" />

          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/50 px-3.5 py-1.5 text-sm text-cream/85 backdrop-blur transition hover:border-gold/60"
          >
            <span className="flex text-gold" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>
              <strong className="text-warm-white">{SITE.googleRating}</strong> on Google ·{' '}
              {SITE.googleReviewCount} reviews
            </span>
          </a>

          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-wide text-warm-white md:text-7xl">
            <span className="text-gradient-spicy">{SITE.tagline}</span>
          </h1>

          <p className="mt-3 font-body text-lg text-gold/90 md:text-xl" lang="bn">
            {SITE.nameBengali}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg lg:mx-0">
            Fire-wok Chinese, crisp dosas, oven-fresh pizzas, biryani and Basanti Pulao — cooked fresh
            and served in {SITE.locality}&apos;s most colourful dining room.
          </p>

          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-cream/60">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Paschimpatty, {SITE.locality}, {SITE.district}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <OrderNowButton />
            <Button href="/menu" variant="outline" ariaLabel="Browse our menu">
              Browse Menu
            </Button>
          </div>
        </motion.div>

        {/* Floating food photos — desktop */}
        <div className="relative hidden h-[520px] lg:block" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-6 h-[400px] w-[300px] overflow-hidden rounded-3xl border-4 border-black/60 shadow-2xl shadow-black/70"
          >
            <Image src={KITCHEN.chilliChicken} alt="" fill priority className="object-cover" sizes="600px" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-0 h-[360px] w-[270px] overflow-hidden rounded-3xl border-4 border-black/60 shadow-2xl shadow-black/70"
          >
            <Image src={KITCHEN.masalaDosa} alt="" fill priority className="object-cover" sizes="540px" />
          </motion.div>
          <div className="absolute -bottom-2 left-4 rounded-2xl border border-gold/25 bg-black/75 px-4 py-3 backdrop-blur">
            <p className="font-display text-lg tracking-wide text-gold">Cooked fresh, every order</p>
            <p className="text-xs text-cream/70">Straight from our kitchen to your table</p>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="relative border-t border-gold/15 bg-black/70 backdrop-blur">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 px-5 py-5 md:grid-cols-4 lg:max-w-7xl lg:px-8">
          {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
            <li key={label} className="flex items-center gap-3 py-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red to-orange text-warm-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-warm-white">{label}</span>
                <span className="block text-xs text-cream/60">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
