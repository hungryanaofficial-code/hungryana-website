import clsx from 'clsx';
import { Phone } from 'lucide-react';
import { PHONE_TEL, SITE } from '@/lib/constants';

interface OrderNowButtonProps {
  className?: string;
  compact?: boolean;
  showPhone?: boolean;
}

/** Direct dial — opens phone call on tap (mobile) or default dialer (desktop). */
export function OrderNowButton({
  className,
  compact = false,
  showPhone = false,
}: OrderNowButtonProps) {
  return (
    <a
      href={PHONE_TEL}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red to-red-dark font-display tracking-wide text-gold shadow-lg shadow-red/30 transition active:scale-[0.98] hover:brightness-110',
        compact ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base',
        className
      )}
      aria-label={`Order now — call ${SITE.phone}`}
    >
      <Phone className={compact ? 'h-4 w-4' : 'h-5 w-5'} aria-hidden="true" />
      {showPhone ? SITE.phone : 'Order Now'}
    </a>
  );
}
