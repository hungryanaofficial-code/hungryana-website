import Image from 'next/image';
import { ChefHat, UtensilsCrossed } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ABOUT_STORY, SITE } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About Us"
          title="Two Friends, One Kitchen"
          subtitle={`A foodie and a cook — both with years of experience across multiple cuisines — came together to bring ${SITE.name} to ${SITE.locality}.`}
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gold/10">
            <Image
              src={IMAGES.about}
              alt="Food and dining at Hungryana"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-cream/85 md:text-lg">
            <p>{ABOUT_STORY.intro}</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-gold/10 bg-charcoal-light/50 p-5">
                <div className="mb-2 flex items-center gap-2 text-gold">
                  <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
                  <h3 className="font-display text-lg tracking-wide">{ABOUT_STORY.foodie.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-cream/75 md:text-base">
                  {ABOUT_STORY.foodie.text}
                </p>
              </div>

              <div className="rounded-xl border border-gold/10 bg-charcoal-light/50 p-5">
                <div className="mb-2 flex items-center gap-2 text-gold">
                  <ChefHat className="h-5 w-5" aria-hidden="true" />
                  <h3 className="font-display text-lg tracking-wide">{ABOUT_STORY.cook.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-cream/75 md:text-base">
                  {ABOUT_STORY.cook.text}
                </p>
              </div>
            </div>

            <p>{ABOUT_STORY.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
