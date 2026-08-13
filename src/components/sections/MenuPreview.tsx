import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { CUISINE_CATEGORIES, SITE } from '@/lib/constants';
import { SPECIALITIES } from '@/lib/images';

export function MenuPreview() {
  const picks = SPECIALITIES.slice(0, 4);

  return (
    <section id="menu-preview" className="section-padding section-glow bg-charcoal-dark">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <SectionHeading
          eyebrow="Menu"
          title="Pick Your Flavour"
          subtitle={`${SITE.tagline} — scroll the full menu or call to order.`}
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CUISINE_CATEGORIES.map((category) => (
            <Link
              key={category}
              href="/menu"
              className="rounded-full border border-gold/15 bg-black/30 px-3.5 py-1.5 text-sm text-cream/75 transition-colors hover:border-orange/50 hover:text-gold"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {picks.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 overflow-hidden rounded-xl border border-gold/10 bg-black/40"
            >
              <div className="relative h-24 w-24 shrink-0 sm:h-auto sm:w-28">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="112px" />
              </div>
              <div className="flex flex-col justify-center py-3 pr-3">
                <p className="font-medium text-warm-white">{item.title}</p>
                <p className="mt-0.5 line-clamp-2 text-xs text-cream/55">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/menu" variant="primary" ariaLabel="View full menu with prices">
            Full Menu &amp; Prices
          </Button>
          <OrderNowButton className="w-full sm:w-auto" />        </div>
      </div>
    </section>
  );
}
