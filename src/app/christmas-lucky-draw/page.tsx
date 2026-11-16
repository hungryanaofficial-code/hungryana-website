import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Cake, CalendarDays, Gift, MapPin, Phone, Trophy } from 'lucide-react';
import { CHRISTMAS_DRAW as C } from '@/lib/contest';
import { PHONE_TEL, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Christmas Lucky Draw: Win a FREE Fruit Cake',
  description:
    'Eat at Hungryana, Kirnahar between 20 Nov and 20 Dec 2026 with a bill of ₹500+ and get lucky draw coupons. 5 winners get a FREE fruit cake on Christmas Day.',
  alternates: { canonical: C.slug },
  openGraph: {
    title: 'Hungryana Christmas Lucky Draw: Win a FREE Fruit Cake',
    description: 'Bill ₹500+ = lucky draw coupon. 5 winners get a free fruit cake on 25 December.',
    images: [{ url: C.poster, width: 1080, height: 1350, alt: 'Hungryana Christmas Lucky Draw poster' }],
  },
};

const KEY_DATES = [
  { icon: CalendarDays, label: 'Contest', value: C.dates.contest },
  { icon: Trophy, label: 'Winners announced', value: C.dates.winners },
  { icon: Cake, label: 'Free cake given', value: C.dates.cake },
] as const;

export default function ChristmasLuckyDrawPage() {
  return (
    <div className="min-h-screen bg-black pb-28 pt-16 lg:pb-12">
      <div className="mx-auto max-w-6xl px-5 pt-2 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-md lg:sticky lg:top-24">
            <Image
              src={C.poster}
              alt="Hungryana Christmas Lucky Draw: this Christmas Hungryana gives you a free fruit cake. Bill ₹500 or more gets a coupon; 5 lucky winners."
              width={1080}
              height={1350}
              priority
              className="h-auto w-full rounded-2xl border border-gold/20 shadow-2xl shadow-red/20"
              sizes="(max-width: 1024px) 100vw, 448px"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-dark">
              <Gift className="h-3.5 w-3.5" aria-hidden="true" /> {C.title}
            </span>
            <p className="mt-4 text-2xl font-bold text-gold-light" lang="bn">
              {C.titleBn}
            </p>
            <h1 className="mt-1 font-display text-5xl leading-none tracking-wide text-warm-white sm:text-6xl">
              Win a <span className="text-gold">FREE</span> Fruit Cake this Christmas!
            </h1>
            <p className="mt-4 text-lg text-cream/80">
              Eat at Hungryana with a bill of <strong className="text-gold">₹{C.minBill} or more</strong>{' '}
              and get lucky draw coupons. {C.winners} lucky winners get a fruit cake, absolutely free,
              on Christmas Day.
            </p>
            <p className="mt-1 text-cream/70" lang="bn">
              {C.taglineBn}
            </p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {KEY_DATES.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-gold/20 bg-charcoal-light p-4">
                  <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-cream/60">
                    <Icon className="h-4 w-4 text-gold" aria-hidden="true" /> {label}
                  </dt>
                  <dd className="mt-1 font-semibold text-warm-white">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 font-display text-3xl tracking-wide text-gold">How to win</h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {C.steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-cream p-4 text-charcoal">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-red font-display text-lg text-warm-white">
                    {i + 1}
                  </span>
                  <p className="mt-2 font-bold text-red-dark">{s.title}</p>
                  <p className="text-sm text-charcoal/80">{s.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 font-display text-3xl tracking-wide text-gold">Coupons per bill</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-gold/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-red-dark text-warm-white">
                  <tr>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Bill amount</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Coupons</th>
                  </tr>
                </thead>
                <tbody>
                  {C.tiers.map((t, i) => (
                    <tr key={t.bill} className={i % 2 ? 'bg-charcoal-light' : 'bg-charcoal'}>
                      <td className="px-4 py-2.5 text-cream/90">{t.bill}</td>
                      <td className="px-4 py-2.5 font-semibold text-gold">{t.coupons}</td>
                    </tr>
                  ))}
                  <tr className="bg-charcoal-light">
                    <td className="px-4 py-2.5 text-cream/70" colSpan={2}>
                      …and 1 more coupon for every extra ₹500 on the same bill
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 font-display text-3xl tracking-wide text-gold">Rules</h2>
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-cream/85 marker:font-semibold marker:text-gold">
              {C.rules.map((r) => (
                <li key={r} className="pl-1">
                  {r}
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-gold/25 bg-gradient-to-br from-red-maroon to-black p-5">
              <p className="font-display text-2xl tracking-wide text-warm-white">See you at Hungryana!</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-cream/75">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" /> {SITE.address}
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={PHONE_TEL}
                  className="btn-gradient-primary inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-display tracking-wider text-gold"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {SITE.phone}
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-xl border border-gold/50 px-5 py-3 font-display tracking-wider text-gold hover:bg-gold/10"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
