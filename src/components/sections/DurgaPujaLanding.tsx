'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { LogoImage } from '@/components/ui/LogoImage';
import { DURGA_PUJA, DURGA_WISHES, PHONE_TEL, QUICK_LINKS, SITE } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import clsx from 'clsx';

const SLIDES = [
  {
    src: IMAGES.durgaBanner,
    alt: 'Hungryana Sharodiya Shubhechha — Durga Puja greetings from Kirnahar',
    caption: 'শারদীয় শুভেচ্ছা · Hungryana',
    fit: 'contain' as const,
  },
  {
    src: IMAGES.durgaStory,
    alt: 'Durga Puja wishes from Hungryana family',
    caption: 'From our family to yours',
    fit: 'contain' as const,
  },
  {
    src: IMAGES.durgaPandal,
    alt: 'Festive pandal lights during Durga Puja',
    caption: 'Celebrate the season of Maa Durga',
    fit: 'cover' as const,
  },
  {
    src: IMAGES.durgaLights,
    alt: 'Festival lights and celebration',
    caption: 'Light, colour & togetherness',
    fit: 'cover' as const,
  },
] as const;

const SPARKS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 17) % 84)}%`,
  delay: (i % 6) * 0.35,
  size: 4 + (i % 3) * 2,
}));

function isRemote(src: string) {
  return src.startsWith('http');
}

export function DurgaPujaLanding() {
  const [slide, setSlide] = useState(0);
  const [wishId, setWishId] = useState<string>(DURGA_WISHES[0].id);
  const [burst, setBurst] = useState(false);
  const [paused, setPaused] = useState(false);

  const activeWish = useMemo(
    () => DURGA_WISHES.find((w) => w.id === wishId) ?? DURGA_WISHES[0],
    [wishId]
  );

  const next = useCallback(() => {
    setSlide((s) => (s + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 5500);
    return () => window.clearInterval(t);
  }, [next, paused]);

  const shareWish = () => {
    const text = `${activeWish.bn}\n\n${activeWish.en}\n\nVisit Hungryana — ${SITE.locality}, ${SITE.district}\n${SITE.phone}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const triggerBlessing = () => {
    setBurst(true);
    window.setTimeout(() => setBurst(false), 1200);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pb-12 pt-20 md:pb-16 md:pt-24"
      aria-label="Durga Puja greetings from Hungryana"
    >
      {/* Ambient diyas / sparks */}
      <div className="puja-ambient pointer-events-none absolute inset-0" aria-hidden="true">
        {SPARKS.map((s) => (
          <span
            key={s.id}
            className="puja-spark"
            style={{
              left: s.left,
              animationDelay: `${s.delay}s`,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:max-w-7xl">
        {/* Header strip */}
        <div className="mb-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="puja-badge mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          >
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            <span lang="bn">{DURGA_PUJA.eyebrow}</span>
            <span className="text-cream/50">·</span>
            <span>{DURGA_PUJA.headline}</span>
          </motion.div>

          <div className="mb-3 flex w-full justify-center">
            <LogoImage size="md" priority className="mx-auto" />
          </div>

          <button
            type="button"
            onClick={triggerBlessing}
            className="group rounded-xl px-2 py-1 transition-transform active:scale-[0.98]"
            aria-label="Tap for festive blessing animation"
          >
            <h1 className="font-display text-3xl tracking-wide text-warm-white md:text-5xl lg:text-6xl">
              <span className="text-gradient-puja">{DURGA_PUJA.headlineBn}</span>
            </h1>
            <p className="mt-1 text-xs text-gold/70 opacity-0 transition-opacity group-hover:opacity-100 md:text-sm">
              Tap for blessings ✨
            </p>
          </button>

          <AnimatePresence>
            {burst && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="puja-burst text-center font-display text-4xl text-gold md:text-6xl">
                  🪔 শুভেচ্ছা 🪔
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg" lang="bn">
            {DURGA_PUJA.subline}
          </p>
          <p className="mt-2 max-w-xl text-sm text-cream/65 md:text-base">{DURGA_PUJA.visitLine}</p>
        </div>

        {/* Interactive gallery — fixed frame, brand art contained (not cropped) */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="media-frame overflow-hidden rounded-2xl border border-gold/25 shadow-2xl shadow-red/20">
            <div className="relative aspect-[4/5] min-h-[280px] bg-gradient-to-b from-[#1a0a1f] via-black to-black sm:aspect-[5/4] md:aspect-[16/10] md:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6"
                >
                  <Image
                    src={SLIDES[slide].src}
                    alt={SLIDES[slide].alt}
                    fill
                    className={clsx(
                      'object-center',
                      SLIDES[slide].fit === 'contain'
                        ? 'object-contain p-1 sm:p-2'
                        : 'object-cover'
                    )}
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority={slide === 0}
                    unoptimized={!isRemote(SLIDES[slide].src)}
                  />
                  {SLIDES[slide].fit === 'cover' && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  )}
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-gold backdrop-blur-sm transition hover:bg-black/80"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-gold backdrop-blur-sm transition hover:bg-black/80"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="border-t border-gold/15 bg-black/95 px-4 py-3">
              <p className="text-center text-sm font-medium text-gold md:text-base">
                {SLIDES[slide].caption}
              </p>
              <div className="mt-3 flex justify-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlide(i)}
                    className={clsx(
                      'h-2 rounded-full transition-all',
                      i === slide ? 'w-8 bg-gold' : 'w-2 bg-cream/40 hover:bg-cream/70'
                    )}
                    aria-label={`Show image ${i + 1}`}
                    aria-current={i === slide ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive wishes */}
        <div className="mt-10">
          <h2 className="text-center font-display text-2xl text-gold md:text-3xl">Puja Wishes</h2>
          <p className="mt-1 text-center text-sm text-cream/60">Tap a card — share the blessing with friends</p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {DURGA_WISHES.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setWishId(w.id)}
                className={clsx(
                  'rounded-full border px-4 py-2 text-sm font-semibold transition-all',
                  wishId === w.id
                    ? 'border-gold bg-gold/15 text-gold shadow-md shadow-gold/20'
                    : 'border-gold/20 bg-black/40 text-cream/75 hover:border-gold/45'
                )}
              >
                {w.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeWish.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="glass-gold mx-auto mt-6 max-w-2xl rounded-2xl p-6 text-center"
            >
              <p className="text-lg leading-relaxed text-warm-white md:text-xl" lang="bn">
                {activeWish.bn}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75 md:text-base">{activeWish.en}</p>
              <button
                type="button"
                onClick={shareWish}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-black/30 px-5 py-2.5 text-sm font-semibold text-gold transition hover:border-gold hover:bg-gold/10"
              >
                Share wish on WhatsApp
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Visit Hungryana CTA */}
        <div className="mt-12 rounded-2xl border border-red/30 bg-gradient-to-br from-red/15 via-black to-orange/10 p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            <UtensilsCrossed className="mb-3 h-10 w-10 text-gold" aria-hidden="true" />
            <h2 className="font-display text-2xl text-warm-white md:text-4xl">{DURGA_PUJA.ctaPrimary}</h2>
            <p className="mt-2 max-w-lg text-cream/75">
              Puja evenings made easy — dine in at Kirnahar or call for takeaway. Biryani, basanti pulao, momos &amp;
              festive platters waiting for you.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-gold">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {SITE.locality}, {SITE.district}
            </p>

            <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/menu" variant="primary" ariaLabel="View Puja menu">
                {DURGA_PUJA.ctaMenu}
              </Button>
              <OrderNowButton />
            </div>
            <a
              href={PHONE_TEL}
              className="mt-4 text-sm text-cream/60 underline-offset-4 hover:text-gold hover:underline"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Quick links">
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
