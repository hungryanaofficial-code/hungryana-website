import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CUISINE_CATEGORIES, PHONE_TEL, SITE } from '@/lib/constants';
import { SPECIALITIES } from '@/lib/images';

export function MenuPreview() {
  const picks = SPECIALITIES.slice(0, 4);

  return (
    <section id="menu-preview" className="section-padding bg-charcoal-dark">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Our Menu"
          title="Flavours Under One Roof"
          subtitle={`${SITE.tagline} — Biryani, Pizza, Indian, Chinese, Tandoor & more.`}
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CUISINE_CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-full border border-gold/15 px-4 py-1.5 text-sm text-cream/75"
            >
              {category}
            </span>
          ))}
        </div>

        <ul className="mb-8 divide-y divide-gold/10 rounded-xl border border-gold/10 bg-charcoal-light/30">
          {picks.map((item) => (
            <li key={item.title} className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="font-medium text-warm-white">{item.title}</p>
                <p className="mt-0.5 text-sm text-cream/60">{item.description}</p>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-wider text-gold">★</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/menu" variant="primary" ariaLabel="View full menu">
            View Full Menu
          </Button>
          <Button href={PHONE_TEL} variant="outline" ariaLabel="Call to order">
            Order Now
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-cream/50">
          Full menu with prices on the{' '}
          <Link href="/menu" className="text-gold underline-offset-2 hover:underline">
            menu page
          </Link>
          {' '}or scan the QR code below.
        </p>
      </div>
    </section>
  );
}
