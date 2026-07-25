'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SPECIALITIES } from '@/lib/images';

export function Specialities() {
  return (
    <section id="specialities" className="section-padding section-glow bg-charcoal-dark">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Chef's Picks"
          title="Our Specialities"
          subtitle="Handpicked favourites that define the Hungryana experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALITIES.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/10 shadow-lg shadow-black/30 transition-shadow hover:border-gold/25 hover:shadow-red/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-xs font-bold text-gold backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-display text-xl font-bold text-warm-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/80 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-0.5 w-0 bg-gradient-to-r from-red via-gold to-orange transition-all duration-500 group-hover:w-12" />
                  <span className="text-xs uppercase tracking-widest text-gold/0 transition-all duration-300 group-hover:text-gold/80">
                    Signature
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
