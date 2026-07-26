import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SPECIALITIES } from '@/lib/images';

const FEATURED = SPECIALITIES.slice(0, 3);

export function Specialities() {
  return (
    <section id="specialities" className="section-padding bg-charcoal-dark">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Chef's Picks"
          title="Must-Try Dishes"
          subtitle="A few favourites to start with — see the full menu for everything we serve."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {FEATURED.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-gold/10 bg-charcoal-light/30"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-warm-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
