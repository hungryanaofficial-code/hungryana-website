import Image from 'next/image';
import { ChefHat, UtensilsCrossed } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ABOUT_STORY, OPENING, SITE } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="About Us"
          title="Two Friends, One Kitchen"
          subtitle={`Opening ${OPENING.date} in ${SITE.locality} — a joint dream by a foodie and a cook.`}
        />

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.about}
              alt="Food at Hungryana"
              fill
              className="object-cover"
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
      </div>
    </section>
  );
}
