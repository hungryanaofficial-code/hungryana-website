'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import clsx from 'clsx';
import { MENU_SECTIONS, MENU_TAGLINE } from '@/data/menu';
import { OrderNowButton } from '@/components/ui/OrderNowButton';

interface MenuViewProps {
  showHeading?: boolean;
}

export function MenuView({ showHeading = true }: MenuViewProps) {
  const [activeId, setActiveId] = useState(MENU_SECTIONS[0]?.id ?? '');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = MENU_SECTIONS.map((s) => document.getElementById(`menu-${s.id}`)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id.replace('menu-', ''));
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btn = navRef.current?.querySelector(`[data-section="${activeId}"]`);
    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeId]);

  const jumpTo = (id: string) => {
    setActiveId(id);
    document.getElementById(`menu-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="full-menu" className="pb-4">
      {showHeading && (
        <div className="mb-6 px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Full Menu</p>
          <h2 className="mt-2 font-display text-3xl text-warm-white">Hungryana Menu</h2>
          <p className="mt-2 text-sm text-cream/65">{MENU_TAGLINE}</p>
        </div>
      )}

      {/* Sticky category bar — easy jump on mobile & web */}
      <div
        ref={navRef}
        className="menu-sticky-nav sticky top-14 z-40 border-b border-gold/10 bg-black/95 backdrop-blur-xl"
      >
        <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
          {MENU_SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              data-section={section.id}
              onClick={() => jumpTo(section.id)}
              className={clsx(
                'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95',
                activeId === section.id
                  ? 'bg-red text-gold shadow-md shadow-red/30'
                  : 'border border-gold/15 bg-charcoal-light/80 text-cream/75'
              )}
            >
              <span className="mr-1" aria-hidden="true">
                {section.emoji}
              </span>
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 px-5 pt-6 lg:max-w-4xl lg:px-8">
        {MENU_SECTIONS.map((section) => (
          <div key={section.id} id={`menu-${section.id}`} className="scroll-mt-36">
            <h3 className="mb-4 flex items-center gap-2 border-b border-gold/15 pb-3 font-display text-xl text-warm-white">
              <span aria-hidden="true">{section.emoji}</span>
              {section.title}
            </h3>

            <div className="space-y-6">
              {section.subsections.map((subsection) => (
                <div key={subsection.title}>
                  {section.subsections.length > 1 && (
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold/75">
                      {subsection.title}
                    </h4>
                  )}

                  <ul className="divide-y divide-gold/8 overflow-hidden rounded-xl border border-gold/10 bg-charcoal-light/25">
                    {subsection.items.map((item) => (
                      <li
                        key={item.name}
                        className={clsx(
                          'flex items-start justify-between gap-3 px-4 py-3.5',
                          item.featured && 'border-l-2 border-l-red bg-red/5'
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-cream">{item.name}</span>
                            {item.featured && (
                              <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-label="Special" />
                            )}
                          </div>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-cream/50">{item.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 mx-auto mt-8 max-w-3xl px-5 lg:static lg:max-w-4xl lg:px-8 lg:pt-4">
        <OrderNowButton className="w-full !py-4 text-lg lg:!py-3" showPhone />
      </div>
    </section>
  );
}
