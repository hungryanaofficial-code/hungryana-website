'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UtensilsCrossed, Phone, MapPin } from 'lucide-react';
import clsx from 'clsx';
import { PHONE_TEL } from '@/lib/constants';

const tabs = [
  { label: 'Home', href: '/', icon: Home, match: (p: string) => p === '/', isOrder: false },
  { label: 'Menu', href: '/menu', icon: UtensilsCrossed, match: (p: string) => p.startsWith('/menu'), isOrder: false },
  { label: 'Order', href: PHONE_TEL, icon: Phone, match: () => false, isOrder: true },
  { label: 'Contact', href: '/#contact', icon: MapPin, match: (p: string) => p === '/#contact', isOrder: false },
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="app-tab-bar fixed inset-x-0 bottom-0 z-50 border-t border-gold/15 bg-black/95 backdrop-blur-xl"
      aria-label="App navigation"
    >
      <ul className="mx-auto flex max-w-lg items-end justify-around px-1 pb-[env(safe-area-inset-bottom)] pt-1">
        {tabs.map(({ label, href, icon: Icon, match, isOrder }) => {
          const active = !isOrder && match(pathname);

          if (isOrder) {
            return (
              <li key={label} className="flex flex-1 justify-center px-1">
                <a
                  href={href}
                  className="app-order-tab -mt-4 flex flex-col items-center gap-0.5 rounded-2xl bg-gradient-to-b from-red to-red-dark px-4 py-2.5 text-gold shadow-lg shadow-red/40 transition active:scale-95"
                  aria-label="Order now — call restaurant"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Order Now</span>
                </a>
              </li>
            );
          }

          return (
            <li key={label} className="flex-1">
              <Link
                href={href}
                className={clsx(
                  'flex flex-col items-center gap-0.5 rounded-lg px-2 py-2 transition-colors',
                  active ? 'text-gold' : 'text-cream/60 hover:text-cream'
                )}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-wide">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
