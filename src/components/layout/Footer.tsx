import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, OPENING, PHONE_TEL, SITE } from '@/lib/constants';
import { LogoImage } from '@/components/ui/LogoImage';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-black pb-20 lg:pb-8">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <Link href="/">
              <LogoImage size="md" />
            </Link>
            <p className="mt-2 text-sm text-gold/80" lang="bn">
              {SITE.nameBengali}
            </p>
            <p className="mt-1 text-xs text-cream/50">
              Opening {OPENING.date} · {OPENING.location}
            </p>
          </div>

          <nav className="mt-8 flex gap-6 md:mt-0" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/60 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-sm text-cream/60 md:flex-row md:justify-center md:gap-8">
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 hover:text-gold">
            <Phone className="h-4 w-4 text-gold" />
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-gold">
            <Mail className="h-4 w-4 text-gold" />
            {SITE.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            {SITE.locality}, {SITE.district}
          </span>
        </div>

        <p className="mt-8 text-center text-xs text-cream/40">
          &copy; {year} {SITE.name} · {SITE.tagline}
        </p>
      </div>
    </footer>
  );
}
