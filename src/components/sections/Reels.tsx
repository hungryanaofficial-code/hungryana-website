import { SectionHeading } from '@/components/ui/SectionHeading';
import { REELS } from '@/lib/images';

export function Reels() {
  return (
    <section id="reels" className="section-padding bg-black">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <SectionHeading
          eyebrow="Reels"
          title="Straight from Our Kitchen"
          subtitle="Tap play to see what's cooking at Hungryana."
        />

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
          {REELS.map((reel) => (
            <figure
              key={reel.src}
              className="w-[70%] shrink-0 snap-center sm:w-[45%] md:w-auto"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-gold/10 bg-charcoal">
                <video
                  src={reel.src}
                  poster={reel.poster}
                  controls
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover"
                  aria-label={reel.title}
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-cream/75">{reel.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
