import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MENU_SECTIONS, MENU_TAGLINE } from '@/data/menu';
import clsx from 'clsx';

export function FullMenu() {
  return (
    <section id="full-menu" className="section-padding bg-charcoal-dark">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Our Menu"
          title="Hungryana Menu"
          subtitle={MENU_TAGLINE}
        />

        <nav
          className="mb-10 flex flex-wrap justify-center gap-2"
          aria-label="Jump to menu section"
        >
          {MENU_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#menu-${section.id}`}
              className="rounded-full border border-gold/15 bg-charcoal-light/80 px-4 py-1.5 text-sm text-cream/70 transition-all hover:border-gold/40 hover:text-gold"
            >
              {section.title}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {MENU_SECTIONS.map((section) => (
            <div key={section.id} id={`menu-${section.id}`} className="scroll-mt-28">
              <h3 className="mb-6 flex items-center gap-3 border-b border-gold/20 pb-4 font-display text-2xl font-bold text-warm-white">
                <span className="text-2xl" aria-hidden="true">
                  {section.emoji}
                </span>
                {section.title}
              </h3>

              <div className="space-y-8">
                {section.subsections.map((subsection) => (
                  <div key={subsection.title}>
                    {section.subsections.length > 1 && (
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold/80">
                        {subsection.title}
                      </h4>
                    )}

                    <ul className="divide-y divide-gold/10 rounded-xl border border-gold/8 bg-charcoal-light/30">
                      {subsection.items.map((item) => (
                        <li
                          key={item.name}
                          className={clsx(
                            'flex items-start justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-gold/5',
                            item.featured && 'border-l-2 border-l-red bg-red/5'
                          )}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-cream">{item.name}</span>
                              {item.featured && (
                                <Star
                                  className="h-3.5 w-3.5 shrink-0 fill-gold text-gold"
                                  aria-label="Chef's special"
                                />
                              )}
                            </div>
                            {item.description && (
                              <p className="mt-0.5 text-sm text-cream/50">{item.description}</p>
                            )}
                          </div>
                          <span className="shrink-0 font-semibold text-gold">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
