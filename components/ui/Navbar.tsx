'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

interface NavbarProps {
  nav: {
    menu: string;
    about: string;
    contact: string;
    orderNow: string;
  };
}

const Navbar: FC<NavbarProps> = ({ nav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-espresso/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-bold tracking-wide text-cream">
            Roast & Ritual
          </span>
          <span className="text-[10px] tracking-[0.2em] text-latte uppercase">
            Est. 2012
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: '#menu', label: nav.menu },
            { href: '#about', label: nav.about },
            { href: '#contact', label: nav.contact },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link text-sm tracking-wide text-cream/80 transition-colors hover:text-cream"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-roast px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-latte hover:text-espresso"
          >
            {nav.orderNow}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-latte/20 bg-espresso px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {[
              { href: '#menu', label: nav.menu },
              { href: '#about', label: nav.about },
              { href: '#contact', label: nav.contact },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-cream/80 transition-colors hover:text-cream"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block rounded-full bg-roast px-5 py-2.5 text-center text-sm font-medium text-cream transition-colors hover:bg-latte hover:text-espresso"
            >
              {nav.orderNow}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
