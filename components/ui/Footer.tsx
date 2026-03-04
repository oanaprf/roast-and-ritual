import type { FC } from 'react';

interface FooterProps {
  t: {
    tagline: string;
    rights: string;
  };
}

const Footer: FC<FooterProps> = ({ t }) => (
  <footer className="bg-espresso py-10">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-serif text-lg font-bold text-cream">Roast & Ritual</p>
          <p className="mt-1 text-sm italic text-latte/70">{t.tagline}</p>
        </div>
        <p className="text-xs text-cream/30">{t.rights}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
