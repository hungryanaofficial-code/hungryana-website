'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, OPENING, PHONE_TEL, SITE } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { LogoImage } from '@/components/ui/LogoImage';
import clsx from 'clsx';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gold/10 bg-black/90 py-2 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/70 to-transparent py-3'
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 md:px-6">
        <Link href="#home" className="shrink-0" aria-label={`${SITE.name} home`}>
          <LogoImage size="md" className="transition-transform hover:scale-105" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="hidden text-xs text-cream/50 lg:inline">
            Opens {OPENING.date}
          </span>
          <Button href={PHONE_TEL} variant="primary" className="!px-5 !py-2.5 !text-sm" ariaLabel="Call to order">
            Order
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-gold md:hidden"
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
            className="overflow-hidden border-t border-gold/10 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col px-4 py-3" aria-label="Mobile menu">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-base text-cream transition-colors hover:bg-red/10 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <p className="px-4 py-2 text-xs text-cream/50">Opening {OPENING.date} · {OPENING.location}</p>
              <a href={PHONE_TEL} className="flex items-center gap-2 px-4 py-2 text-sm text-cream/70">
                <Phone className="h-4 w-4 text-gold" />
                {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
