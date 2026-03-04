import type { FC } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag: string;
}

interface MenuProps {
  t: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: MenuItem[];
  };
}

const tagColors: Record<string, string> = {
  Signature: 'bg-roast text-cream',
  Favorite: 'bg-espresso text-latte',
  Specialty: 'bg-latte text-espresso',
  Seasonal: 'border border-latte text-latte',
};

const Menu: FC<MenuProps> = ({ t }) => (
  <section id="menu" className="bg-cream py-24 lg:py-32">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.3em] text-roast uppercase">{t.eyebrow}</p>
        <h2 className="font-serif text-4xl font-bold text-espresso lg:text-5xl">{t.heading}</h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-espresso/60 lg:text-lg">{t.subheading}</p>
        <div className="mx-auto mt-6 h-px w-16 bg-latte" />
      </div>

      {/* Menu cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => (
          <article
            key={item.name}
            className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Tag */}
            <span
              className={`mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-medium ${tagColors[item.tag] ?? 'bg-latte/30 text-espresso'}`}
            >
              {item.tag}
            </span>

            {/* Coffee cup icon */}
            <div className="mb-3 text-latte">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="font-serif text-lg font-bold text-espresso">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso/60">{item.description}</p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-latte/20 pt-4">
              <span className="font-serif text-xl font-bold text-roast">{item.price}</span>
              <button className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-roast ring-1 ring-latte/40 transition-colors hover:bg-roast hover:text-cream hover:ring-roast">
                Add
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Menu;
