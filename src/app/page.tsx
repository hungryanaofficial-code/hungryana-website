import dynamic from 'next/dynamic';
import { OpeningBanner } from '@/components/sections/OpeningBanner';

const About = dynamic(() => import('@/components/sections/About').then((m) => m.About));
const Specialities = dynamic(() =>
  import('@/components/sections/Specialities').then((m) => m.Specialities)
);
const MenuPreview = dynamic(() =>
  import('@/components/sections/MenuPreview').then((m) => m.MenuPreview)
);
const QRMenu = dynamic(() => import('@/components/sections/QRMenu').then((m) => m.QRMenu));
const Contact = dynamic(() => import('@/components/sections/Contact').then((m) => m.Contact));

export default function HomePage() {
  return (
    <>
      <OpeningBanner />
      <About />
      <Specialities />
      <MenuPreview />
      <QRMenu />
      <Contact />
    </>
  );
}
