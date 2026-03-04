import type { FC } from 'react';

interface AboutProps {
  t: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
}

const About: FC<AboutProps> = ({ t }) => {
  const [line1, line2] = t.heading.split('\n');
  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
  ];

  return (
    <section id="about" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-latte uppercase">
              {t.eyebrow}
            </p>
            <h2 className="font-serif text-4xl font-bold text-cream lg:text-5xl">
              {line1}
              <br />
              <span className="italic text-latte">{line2}</span>
            </h2>
            <div className="mt-4 h-px w-12 bg-roast" />
            <p className="mt-6 text-base leading-relaxed text-cream/70">{t.body1}</p>
            <p className="mt-4 text-base leading-relaxed text-cream/70">{t.body2}</p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-latte">{s.value}</p>
                  <p className="mt-1 text-xs text-cream/50 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative visual */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div className="relative h-80 w-80 rounded-full border border-latte/20 lg:h-96 lg:w-96">
              {/* Middle ring */}
              <div className="absolute inset-6 rounded-full border border-latte/30" />
              {/* Inner circle */}
              <div className="absolute inset-14 flex items-center justify-center rounded-full bg-roast/30 backdrop-blur-sm">
                <div className="text-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    className="mx-auto mb-3 text-latte"
                    aria-hidden="true"
                  >
                    {/* Coffee bean illustration */}
                    <ellipse cx="32" cy="32" rx="22" ry="30" fill="#6F4E37" opacity="0.8" />
                    <path
                      d="M32 8 Q40 32 32 56"
                      stroke="#2E1F1C"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <ellipse
                      cx="32"
                      cy="32"
                      rx="22"
                      ry="30"
                      fill="none"
                      stroke="#C4A484"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </svg>
                  <p className="font-serif text-sm italic text-cream/80">
                    &ldquo;Crafted with care&rdquo;
                  </p>
                </div>
              </div>

              {/* Orbiting accent dots */}
              {[0, 72, 144, 216, 288].map((deg) => (
                <div
                  key={deg}
                  className="absolute h-2 w-2 rounded-full bg-latte/60"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 46}% - 4px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 46}% - 4px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
