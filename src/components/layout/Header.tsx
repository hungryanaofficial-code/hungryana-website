'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, PHONE_TEL, SITE } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { LogoImage } from '@/components/ui/LogoImage';
import clsx from 'clsx';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-gold/10 py-2 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 to-transparent py-3 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link
          href="#home"
          className="group flex shrink-0 flex-col items-start gap-0.5"
          aria-label={`${SITE.name} home`}
        >
          <LogoImage size="lg" className="logo-glow transition-transform group-hover:scale-105" />
          <span className="hidden text-[10px] tracking-widest text-gold/60 sm:block" lang="bn">
            {SITE.nameBengali}
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-display text-base tracking-wide text-cream/85 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-1.5 text-sm text-cream/70 transition-colors hover:text-gold"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span className="hidden xl:inline">{SITE.phone}</span>
          </a>
          <Button href={PHONE_TEL} variant="primary" ariaLabel="Call to order now">
            Order Now
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg border border-gold/20 p-2 text-gold transition-colors hover:border-gold/40 hover:bg-red/15 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden border-t border-gold/10 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 font-display text-lg tracking-wide text-cream transition-colors hover:bg-red/15 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_TEL}
                className="mt-2 flex items-center gap-2 px-4 py-2 text-sm text-cream/70"
              >
                <Phone className="h-4 w-4 text-gold" />
                {SITE.phone}
              </a>
              <div className="mt-3 px-4">
                <Button href={PHONE_TEL} variant="primary" ariaLabel="Call to order now">
                  Order Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
