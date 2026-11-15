import Image from 'next/image';
import { ChefHat, UtensilsCrossed } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ABOUT_STORY, SITE } from '@/lib/constants';
import { AMBIENCE, IMAGES } from '@/lib/images';

export function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <SectionHeading
          eyebrow="About Us"
          title="Two Friends, One Kitchen"
          subtitle={`${SITE.locality}, ${SITE.district} — a joint dream by a foodie and a cook.`}
        />

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src={IMAGES.about}
              alt="Hungryana restaurant storefront in Kirnahar at night"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-4 text-base leading-relaxed text-cream/80">
            <p>{ABOUT_STORY.intro}</p>

            <div className="space-y-3">
              <div className="flex gap-3 rounded-xl border border-gold/10 bg-charcoal-light/40 p-4">
                <UtensilsCrossed className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg text-gold">{ABOUT_STORY.foodie.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{ABOUT_STORY.foodie.text}</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-gold/10 bg-charcoal-light/40 p-4">
                <ChefHat className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg text-gold">{ABOUT_STORY.cook.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{ABOUT_STORY.cook.text}</p>
                </div>
              </div>
            </div>

            <p className="text-cream/70">{ABOUT_STORY.closing}</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-center font-display text-2xl text-gold md:text-3xl">
            Inside Hungryana
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {AMBIENCE.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
