'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SITE_URL } from '@/lib/site';

export function QRMenu() {
  const [qrSrc, setQrSrc] = useState('/qr-menu.png');

  return (
    <section id="qr-menu" className="section-padding bg-black">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Digital Menu"
          title="Scan to Browse"
          subtitle="Open our full menu on your phone — no app needed."
        />

        <div className="mx-auto inline-block rounded-xl border border-gold/15 bg-charcoal-light/40 p-6">
          <Image
            src={qrSrc}
            alt="QR code to browse Hungryana digital menu"
            width={220}
            height={220}
            className="mx-auto h-[200px] w-[200px] object-contain"
            onError={() => setQrSrc('/qr-menu.svg')}
          />
          <p className="mt-4 text-sm text-cream/60">
            Or visit{' '}
            <Link href="/menu" className="text-gold hover:underline">
              {SITE_URL}/menu
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
