import type { FC } from 'react';

interface ContactProps {
  t: {
    eyebrow: string;
    heading: string;
    address: string;
    hours: string;
    phone: string;
    buttonMap: string;
    buttonOrder: string;
  };
}

const Contact: FC<ContactProps> = ({ t }) => {
  const [line1, line2] = t.heading.split('\n');
  const [hoursLine1, hoursLine2] = t.hours.split('\n');

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      {/* Decorative background blob */}
      <div
        className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-latte/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-roast/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — heading & info */}
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-roast uppercase">
              {t.eyebrow}
            </p>
            <h2 className="font-serif text-4xl font-bold text-espresso lg:text-5xl">
              {line1}
              <br />
              <span className="italic text-roast">{line2}</span>
            </h2>
            <div className="mt-4 h-px w-12 bg-latte" />

            <dl className="mt-10 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roast/10 text-roast">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest text-latte uppercase">Address</dt>
                  <dd className="mt-1 text-base text-espresso">{t.address}</dd>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roast/10 text-roast">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest text-latte uppercase">Hours</dt>
                  <dd className="mt-1 text-base text-espresso">
                    {hoursLine1}
                    <br />
                    {hoursLine2}
                  </dd>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roast/10 text-roast">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.8 19.8 0 0 1 1.62 4.4 2 2 0 0 1 3.59 2.2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l.87-.87a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest text-latte uppercase">Phone</dt>
                  <dd className="mt-1 text-base text-espresso">{t.phone}</dd>
                </div>
              </div>
            </dl>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-roast"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t.buttonMap}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-roast px-6 py-3 text-sm font-semibold text-roast transition-colors hover:bg-roast hover:text-cream"
              >
                {t.buttonOrder}
              </a>
            </div>
          </div>

          {/* Right — decorative map placeholder */}
          <div className="relative h-80 overflow-hidden rounded-3xl bg-espresso/10 lg:h-96">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-roast text-cream shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="font-serif text-lg font-semibold text-espresso">42 Ember Lane</p>
              <p className="text-sm text-espresso/60">Portland, OR 97201</p>
            </div>
            {/* Grid lines to suggest a map */}
            <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={`${(i + 1) * 12.5}%`}
                  x2="100%"
                  y2={`${(i + 1) * 12.5}%`}
                  stroke="#6F4E37"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={`${(i + 1) * 10}%`}
                  y1="0"
                  x2={`${(i + 1) * 10}%`}
                  y2="100%"
                  stroke="#6F4E37"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
