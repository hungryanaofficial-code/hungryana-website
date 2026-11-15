import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { OrderNowButton } from '@/components/ui/OrderNowButton';
import { CUISINE_CATEGORIES } from '@/lib/constants';
import { KITCHEN } from '@/lib/images';

export function MenuPreview() {
  return (
    <section id="menu-preview" className="section-padding bg-black">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-red-maroon/40 via-charcoal to-black md:grid-cols-[1.2fr_0.8fr] lg:max-w-7xl">
        <div className="px-6 py-12 md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange md:text-sm">Menu</p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-warm-white md:text-6xl">
            Pick Your Flavour
          </h2>
          <p className="mt-3 text-base text-cream/75 md:text-lg">
            Seven cuisines, one kitchen. Browse the full menu or call us and we&apos;ll have it hot
            and ready.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {CUISINE_CATEGORIES.map((category) => (
              <Link
                key={category}
                href="/menu"
                className="rounded-full border border-gold/20 bg-black/50 px-3.5 py-1.5 text-sm text-cream/85 transition-colors hover:border-orange/60 hover:text-gold"
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/menu" variant="primary" ariaLabel="View full menu">
              Full Menu
            </Button>
            <OrderNowButton className="w-full sm:w-auto" />
          </div>
        </div>

        <div className="relative min-h-[320px]">
          <Image
            src={KITCHEN.pizzaOven}
            alt="Pizza baking in the Hungryana oven"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-black/50" />
        </div>
      </div>
    </section>
  );
}
