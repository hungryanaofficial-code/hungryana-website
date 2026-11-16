/**
 * Christmas Lucky Draw 2026: single source of truth for the popup,
 * the floating badge and the /christmas-lucky-draw rules page.
 * All dates are IST (+05:30).
 */
export const CHRISTMAS_DRAW = {
  slug: '/christmas-lucky-draw',
  title: 'Christmas Lucky Draw',
  titleBn: 'শুভ বড়দিন',
  headline: 'Win a FREE Fruit Cake this Christmas!',
  taglineBn: 'বড়দিনে খাওয়া জমুক, কেক জিতুন ফ্রিতে!',
  winners: 5,
  minBill: 500,
  poster: '/christmas-lucky-draw.png',

  startsAt: new Date('2026-11-20T00:00:00+05:30'),
  /** Last day to drop a coupon (inclusive). */
  entriesCloseAt: new Date('2026-12-21T00:00:00+05:30'),
  /** The popup and badge stop showing after Christmas Day. */
  promoEndsAt: new Date('2026-12-26T00:00:00+05:30'),

  dates: {
    contest: '20 Nov – 20 Dec 2026',
    winners: '22 Dec 2026',
    cake: '25 Dec 2026 (Christmas Day)',
  },

  steps: [
    { title: 'Eat at Hungryana', text: 'Bill of ₹500 or more on a single bill' },
    { title: 'Fill a coupon', text: 'Write your name & phone number' },
    { title: 'Drop it in the box', text: '5 lucky winners get a FREE fruit cake on Christmas' },
  ],

  tiers: [
    { bill: '₹500 – ₹999', coupons: 1 },
    { bill: '₹1,000 – ₹1,499', coupons: 2 },
    { bill: '₹1,500 – ₹1,999', coupons: 3 },
    { bill: '₹2,000 – ₹2,499', coupons: 4 },
  ],

  rules: [
    'The contest runs from 20 November to 20 December 2026 at Hungryana, Kirnahar.',
    'Every single bill of ₹500 or more gets lucky draw coupons: 1 coupon for every ₹500 on the bill (₹500–999 = 1, ₹1,000–1,499 = 2, ₹1,500–1,999 = 3, and so on).',
    'Write your name and phone number clearly on each coupon and drop it in the lucky draw box at the restaurant.',
    'Coupons that are blank, unreadable or missing a phone number will not be counted.',
    'The more coupons you drop, the more chances you have to win.',
    '5 lucky winners will be drawn and announced on 22 December 2026. Winners will be called on the phone number written on the coupon and posted on our Facebook page.',
    'Each winner gets one fruit cake absolutely FREE, handed over on Christmas Day, 25 December 2026, at Hungryana, Kirnahar.',
    'One prize per phone number. The prize cannot be exchanged for cash or other items.',
    'Hungryana staff and their families are not eligible.',
    'The decision of the Hungryana management is final.',
  ],
} as const;

export type ContestPhase = 'upcoming' | 'live' | 'closed' | 'over';

export function getContestPhase(now: Date = new Date()): ContestPhase {
  if (now < CHRISTMAS_DRAW.startsAt) return 'upcoming';
  if (now < CHRISTMAS_DRAW.entriesCloseAt) return 'live';
  if (now < CHRISTMAS_DRAW.promoEndsAt) return 'closed';
  return 'over';
}

export const PHASE_LABEL: Record<ContestPhase, string> = {
  upcoming: 'Starts 20 November',
  live: 'Running now · till 20 Dec',
  closed: 'Entries closed · winners on 22 Dec',
  over: 'Contest ended',
};
