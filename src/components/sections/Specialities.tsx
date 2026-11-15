import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SIGNATURE_DISHES } from '@/lib/images';

/** Real dishes from the Hungryana kitchen in a bento grid */
export function Specialities() {
  return (
    <section id="specialities" className="section-padding bg-charcoal-dark">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <SectionHeading
          eyebrow="From Our Kitchen"
          title="Real Food. Real Fire."
          subtitle="No stock photos here — every dish below was shot in the Hungryana kitchen."
        />

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {SIGNATURE_DISHES.map((dish, i) => (
            <article
              key={dish.title}
              className={clsx(
                'group relative overflow-hidden rounded-2xl bg-charcoal',
                dish.span === 'tall' && 'row-span-2',
                i === 1 && 'md:col-span-2'
              )}
            >
              <Image
                src={dish.src}
                alt={dish.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <h3 className="font-display text-lg leading-tight tracking-wide text-warm-white md:text-2xl">
                  {dish.title}
                </h3>
                <p className="mt-0.5 text-xs text-cream/75 md:text-sm">{dish.note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1 rounded-full border border-gold/30 px-5 py-2 text-sm font-medium text-gold transition hover:border-gold hover:bg-gold/10"
          >
            See the full menu →
          </Link>
        </p>
      </div>
    </section>
  );
}
