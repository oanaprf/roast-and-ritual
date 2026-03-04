import type { FC } from 'react';

interface HeroProps {
  t: {
    eyebrow: string;
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

// SVG coffee bean shape used as a repeating texture
const CoffeeBeanPattern: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    className="absolute inset-0 h-full w-full"
    aria-hidden="true"
  >
    <defs>
      <pattern id="coffee-beans" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* Bean 1 — top-left */}
        <g transform="translate(14, 12) rotate(-25, 12, 16)">
          <ellipse cx="12" cy="16" rx="10" ry="14" fill="#6F4E37" opacity="0.55" />
          <path
            d="M12 4 Q16 16 12 28"
            stroke="#2E1F1C"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
          />
        </g>
        {/* Bean 2 — bottom-right */}
        <g transform="translate(48, 46) rotate(40, 12, 16)">
          <ellipse cx="12" cy="16" rx="9" ry="13" fill="#6F4E37" opacity="0.45" />
          <path
            d="M12 5 Q16 16 12 27"
            stroke="#2E1F1C"
            strokeWidth="1.1"
            fill="none"
            opacity="0.6"
          />
        </g>
        {/* Bean 3 — top-right (small) */}
        <g transform="translate(58, 8) rotate(15, 8, 10)">
          <ellipse cx="8" cy="10" rx="6" ry="9" fill="#C4A484" opacity="0.3" />
          <path
            d="M8 3 Q11 10 8 17"
            stroke="#2E1F1C"
            strokeWidth="0.9"
            fill="none"
            opacity="0.5"
          />
        </g>
        {/* Bean 4 — bottom-left (small) */}
        <g transform="translate(4, 54) rotate(-55, 7, 9)">
          <ellipse cx="7" cy="9" rx="5" ry="8" fill="#C4A484" opacity="0.25" />
          <path
            d="M7 2 Q10 9 7 16"
            stroke="#2E1F1C"
            strokeWidth="0.9"
            fill="none"
            opacity="0.4"
          />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#coffee-beans)" />
  </svg>
);

const Hero: FC<HeroProps> = ({ t }) => {
  const [line1, line2] = t.heading.split('\n');

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso"
    >
      {/* Coffee beans texture layer */}
      <div className="absolute inset-0 opacity-30">
        <CoffeeBeanPattern />
      </div>

      {/* Radial vignette — keeps center legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, #2E1F1C 85%)',
        }}
      />

      {/* Subtle top + bottom gradient blends */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-espresso to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-espresso to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Eyebrow */}
        <p className="mb-6 text-xs font-medium tracking-[0.3em] text-latte uppercase">
          {t.eyebrow}
        </p>

        {/* Decorative rule */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-latte/50" />
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="3" fill="#C4A484" />
            <circle cx="8" cy="8" r="6" fill="none" stroke="#C4A484" strokeWidth="0.75" />
          </svg>
          <span className="h-px w-12 bg-latte/50" />
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-cream md:text-6xl lg:text-7xl">
          {line1}
          <br />
          <span className="italic text-latte">{line2}</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
          {t.subheading}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-roast px-8 py-3.5 text-sm font-semibold text-cream shadow-lg transition-all hover:bg-latte hover:text-espresso hover:shadow-xl"
          >
            {t.ctaPrimary}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-latte/40 px-8 py-3.5 text-sm font-medium text-cream/80 transition-all hover:border-latte hover:text-cream"
          >
            {t.ctaSecondary}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex animate-bounce flex-col items-center gap-1.5">
          <span className="text-xs tracking-widest text-latte/50 uppercase">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C4A484"
            strokeWidth="1.5"
            opacity="0.5"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
