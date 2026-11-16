'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Cake, Gift, X } from 'lucide-react';
import { CHRISTMAS_DRAW as C, PHASE_LABEL, getContestPhase, type ContestPhase } from '@/lib/contest';

const SEEN_KEY = 'hungryana-xmas-draw-popup-seen';

function readSeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}
function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* storage blocked: popup just shows again next page load */
  }
}

/**
 * Christmas Lucky Draw promo: a popup shown once per browser visit,
 * plus a floating badge that reopens it. Hidden after Christmas.
 */
export function ChristmasDrawPromo() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<ContestPhase | null>(null);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onRulesPage = pathname === C.slug;

  useEffect(() => {
    const p = getContestPhase();
    setPhase(p);
    if (p === 'over' || onRulesPage || readSeen()) return;
    const t = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(t);
  }, [onRulesPage]);

  const close = useCallback(() => {
    markSeen();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!phase || phase === 'over') return null;

  return (
    <>
      {/* Floating badge: bottom-left, clear of the mobile tab bar and the WhatsApp button */}
      {!onRulesPage && !open && (
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="fixed bottom-[calc(9.5rem+env(safe-area-inset-bottom))] left-4 z-40 flex items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-red-dark to-red px-3.5 py-2 text-left text-warm-white shadow-lg shadow-red/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:bottom-6 md:left-6"
          aria-label="Christmas Lucky Draw: win a free fruit cake. Open offer details"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-red-dark">
            <Gift className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gold-light">
              Christmas Lucky Draw
            </span>
            <span className="block text-sm font-bold">Win a FREE cake 🎂</span>
          </span>
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="xmas-draw-title"
              className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-3xl border border-gold/30 bg-gradient-to-b from-[#7b1414] via-[#3a0a0a] to-[#120404] text-cream shadow-2xl sm:max-w-lg sm:rounded-3xl"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-2 text-cream/80 transition hover:bg-black/70 hover:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label="Close offer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="px-5 pb-4 pt-6 text-center sm:px-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-red-dark">
                  ★ {C.title} ★
                </span>
                <p className="mt-3 font-body text-2xl font-bold text-gold-light" lang="bn">
                  {C.titleBn}
                </p>
                <h2
                  id="xmas-draw-title"
                  className="mt-1 font-display text-4xl leading-none tracking-wide text-warm-white sm:text-5xl"
                >
                  Win a <span className="text-gold">FREE</span> Fruit Cake!
                </h2>
                <p className="mt-2 text-sm text-cream/80">
                  This Christmas, Hungryana gives {C.winners} lucky customers a fruit cake, absolutely
                  free. Cake handed over on <strong className="text-gold">25 December</strong>.
                </p>
                <p className="mt-2 inline-block rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold text-gold-light">
                  {PHASE_LABEL[phase]}
                </p>
              </div>

              {/* Steps */}
              <ol className="mx-4 grid gap-2 rounded-2xl bg-cream p-4 text-charcoal sm:mx-6">
                {C.steps.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red font-display text-base text-warm-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-snug">
                      <strong className="text-red-dark">{s.title}</strong>
                      <span className="block text-charcoal/80">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>

              {/* Coupon tiers */}
              <div className="mx-4 mt-3 sm:mx-6">
                <p className="mb-1.5 text-center text-xs font-semibold uppercase tracking-wider text-gold-light">
                  Bigger bill, more chances
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {C.tiers.slice(0, 3).map((t) => (
                    <div key={t.bill} className="rounded-xl border border-gold/25 bg-black/30 px-1.5 py-2">
                      <div className="text-[11px] text-cream/75">{t.bill}</div>
                      <div className="font-display text-xl text-gold">
                        {t.coupons} coupon{t.coupons > 1 ? 's' : ''}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-1.5 text-center text-[11px] text-cream/60">…and 1 more coupon for every extra ₹500</p>
              </div>

              {/* Key dates */}
              <dl className="mx-4 mt-4 grid grid-cols-3 gap-2 text-center text-xs sm:mx-6">
                <div className="rounded-xl bg-black/30 p-2">
                  <dt className="text-cream/60">Contest</dt>
                  <dd className="font-semibold text-warm-white">20 Nov – 20 Dec</dd>
                </div>
                <div className="rounded-xl bg-black/30 p-2">
                  <dt className="text-cream/60">Winners</dt>
                  <dd className="font-semibold text-warm-white">22 Dec</dd>
                </div>
                <div className="rounded-xl bg-black/30 p-2">
                  <dt className="flex items-center justify-center gap-1 text-cream/60">
                    <Cake className="h-3 w-3" aria-hidden="true" /> Free cake
                  </dt>
                  <dd className="font-semibold text-gold">25 Dec</dd>
                </div>
              </dl>

              {/* Short rules */}
              <details className="group mx-4 mt-4 rounded-2xl border border-gold/20 bg-black/25 px-4 py-3 text-sm sm:mx-6">
                <summary className="cursor-pointer list-none font-semibold text-gold-light marker:hidden">
                  <span className="group-open:hidden">▸ Read all rules</span>
                  <span className="hidden group-open:inline">▾ All rules</span>
                </summary>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[13px] leading-snug text-cream/85">
                  {C.rules.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
              </details>

              <div className="flex flex-col gap-2 px-4 pb-6 pt-4 sm:flex-row sm:px-6">
                <Link
                  href={C.slug}
                  onClick={close}
                  className="btn-gradient-primary inline-flex flex-1 items-center justify-center rounded-xl px-5 py-3 font-display tracking-wider text-gold"
                >
                  Full Details
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-gold/50 px-5 py-3 font-display tracking-wider text-gold hover:bg-gold/10"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
