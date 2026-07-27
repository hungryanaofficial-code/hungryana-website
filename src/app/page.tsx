import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';

const About = dynamic(() => import('@/components/sections/About').then((m) => m.About));
const Specialities = dynamic(() =>
  import('@/components/sections/Specialities').then((m) => m.Specialities)
);
const MenuPreview = dynamic(() =>
  import('@/components/sections/MenuPreview').then((m) => m.MenuPreview)
);
const Contact = dynamic(() => import('@/components/sections/Contact').then((m) => m.Contact));

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Specialities />
      <MenuPreview />
      <Contact />
    </>
  );
}
