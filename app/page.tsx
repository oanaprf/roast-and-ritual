import { getTranslations } from '@/lib/i18n';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import Menu from '@/components/sections/Menu';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const t = getTranslations('en');

  return (
    <>
      <Navbar nav={t.nav} />
      <main>
        <Hero t={t.hero} />
        <Menu t={t.menu} />
        <About t={t.about} />
        <Contact t={t.cta} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
