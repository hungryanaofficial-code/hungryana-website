import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SPECIALITIES } from '@/lib/images';

const FEATURED = SPECIALITIES.slice(0, 3);

export function Specialities() {
  return (
    <section id="specialities" className="section-padding bg-charcoal-dark">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Must Try"
          title="Spicy Favourites"
          subtitle="Start here — then explore the full menu."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {FEATURED.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-gold/10 bg-black/50 transition-colors hover:border-orange/30"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-red/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm-white">
                  Hot
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-warm-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/60">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link href="/menu" className="text-sm font-medium text-gold underline-offset-4 hover:underline">
            See everything on the menu →
          </Link>
        </p>
      </div>
    </section>
  );
}
