'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, OPENING, PHONE_TEL, SITE } from '@/lib/constants';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { LogoImage } from '@/components/ui/LogoImage';
import clsx from 'clsx';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === '/' ? '#home' : '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        'app-header fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-gold/10 bg-black/95 py-2 backdrop-blur-xl' : 'bg-black/80 py-2.5 backdrop-blur-md'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Link href={homeHref} className="shrink-0" aria-label={`${SITE.name} home`}>
          <LogoImage size="sm" className="transition-transform active:scale-95" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <OrderNowButton compact className="hidden lg:inline-flex" />
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red to-red-dark p-2.5 text-gold shadow-md shadow-red/30 lg:hidden"
            aria-label="Order now — call restaurant"
          >
            <Phone className="h-5 w-5" />
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-gold lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gold/10 bg-black/98 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile menu">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-base text-cream active:bg-red/10"
              >
                {link.label}
              </Link>
            ))}
            <p className="px-4 py-2 text-xs text-cream/50">
              Opening {OPENING.date} · {OPENING.location}
            </p>
            <a
              href={PHONE_TEL}
              className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl border border-gold/30 py-3 text-gold"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
