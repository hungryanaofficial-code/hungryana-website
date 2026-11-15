import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { SITE } from '@/lib/constants';
import { KITCHEN } from '@/lib/images';

/** Google rating call-out with links to reviews and directions */
export function GoogleReviews() {
  return (
    <section className="section-padding bg-charcoal-dark" aria-labelledby="reviews-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] lg:max-w-7xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/15">
          <Image
            src={KITCHEN.pizzaServed}
            alt="Hungryana staff serving a fresh pizza in the dining room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange md:text-sm">
            Loved in {SITE.locality}
          </p>
          <h2
            id="reviews-heading"
            className="mt-2 font-display text-4xl leading-tight text-warm-white md:text-6xl"
          >
            Rated {SITE.googleRating} on Google
          </h2>

          <div className="mt-4 flex items-center justify-center gap-1 text-gold md:justify-start" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-7 w-7 fill-current" />
            ))}
          </div>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cream/75 md:mx-0 md:text-lg">
            Families, friends and food lovers keep coming back for the flavour, the friendly staff and
            the warm, colourful dining room. Read what {SITE.googleReviewCount}+ guests say, or share
            your own visit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-warm-white px-6 py-3 font-semibold text-black transition hover:bg-gold"
            >
              <Star className="h-5 w-5" aria-hidden="true" />
              Read reviews on Google
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/50 px-6 py-3 font-semibold text-gold transition hover:bg-gold/10"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
