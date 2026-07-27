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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'mb-10 md:mb-12',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange md:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-warm-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-cream/70 md:text-lg">{subtitle}</p>
      )}
      <div
        className={clsx('mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-red via-orange to-gold', align === 'center' && 'mx-auto')}
        aria-hidden="true"
      />
    </motion.div>
  );
}
