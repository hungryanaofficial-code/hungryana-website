'use client';

import Link from 'next/link';
import { Home, UtensilsCrossed, Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, SITE } from '@/lib/constants';

function phoneToWhatsApp(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return digits.startsWith('91') ? digits : `91${digits}`;
}

const items = [
  { label: 'Home', href: '#home', icon: Home, external: false },
  { label: 'Menu', href: '/menu', icon: UtensilsCrossed, external: false },
  { label: 'Call', href: PHONE_TEL, icon: Phone, external: true },
  {
    label: 'Chat',
    href: `https://wa.me/${phoneToWhatsApp(SITE.phone)}?text=${encodeURIComponent('Hi Hungryana! I would like to place an order.')}`,
    icon: MessageCircle,
    external: true,
  },
] as const;

export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/15 bg-black/95 backdrop-blur-lg md:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-2 py-2">
        {items.map(({ label, href, icon: Icon, external }) => (
          <li key={label} className="flex-1">
            {external ? (
              <a
                href={href}
                {...(label === 'Chat'
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="flex flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-cream/70 transition-colors hover:text-gold active:text-gold"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-wide">{label}</span>
              </a>
            ) : (
              <Link
                href={href}
                className="flex flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-cream/70 transition-colors hover:text-gold active:text-gold"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-wide">{label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
