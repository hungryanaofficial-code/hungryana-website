'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LogoImage } from '@/components/ui/LogoImage';
import { IMAGES } from '@/lib/images';
import { PHONE_TEL, SITE } from '@/lib/constants';

export function OpeningBanner() {
  const [showBannerImage, setShowBannerImage] = useState(true);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black"
      aria-label="Hungryana opening announcement"
    >
      <Image
        src={IMAGES.hero[0]}
        alt=""
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 pb-16 lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/60 px-5 py-2 text-sm font-medium tracking-wide text-gold backdrop-blur-md">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Grand Opening · 11th September
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <LogoImage size="xl" className="logo-glow" priority />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center font-body text-2xl text-gold/90 md:text-3xl"
          lang="bn"
        >
          {SITE.nameBengali}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="mt-2 text-center font-display text-xl tracking-wide text-gold text-shadow-soft md:text-2xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-4 flex justify-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red/35 bg-black/50 px-4 py-1.5 text-sm text-cream/85 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {SITE.locality}, {SITE.district} · West Bengal
          </span>
        </motion.div>

        {showBannerImage ? (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto mt-10 max-w-4xl"
          >
            <div className="overflow-hidden rounded-2xl border border-gold/25 shadow-2xl shadow-red/25 ring-1 ring-white/5">
              <Image
                src="/opening-banner.png"
                alt="Hungryana Multi Cuisine Restaurant — Opening 11th September. Kirnahar, Birbhum."
                width={1200}
                height={675}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                onError={() => setShowBannerImage(false)}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="glass-gold mx-auto mt-10 max-w-2xl rounded-2xl p-8 text-center md:p-10"
          >
            <p className="font-display text-3xl text-warm-white text-shadow-brand md:text-4xl">
              Multi-Cuisine Restaurant
            </p>
            <p className="mt-3 text-base leading-relaxed text-cream/80 md:text-lg">
              Biryani · Pizza · Indian · Chinese · Pasta &amp; more — now opening in the heart of{' '}
              <strong className="text-gold">{SITE.locality}</strong>.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#full-menu" variant="primary" ariaLabel="View our menu">
            View Menu
          </Button>
          <Button href={PHONE_TEL} variant="outline" ariaLabel="Call to order now">
            Order Now
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/80 transition-colors hover:text-gold"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </motion.a>
    </section>
  );
}
