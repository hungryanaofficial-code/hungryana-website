'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-display text-sm uppercase tracking-[0.25em] text-gold text-shadow-brand md:text-base">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl leading-tight text-warm-white text-shadow-brand md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-cream/75 md:text-lg">{subtitle}</p>
      )}
      <div
        className={clsx('mt-6 flex items-center gap-3', align === 'center' && 'justify-center')}
        aria-hidden="true"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-red" />
        <span className="h-1 w-16 rounded-full bg-gradient-to-r from-red via-gold to-orange" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    </motion.div>
  );
}
