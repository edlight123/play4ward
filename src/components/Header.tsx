'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { primaryNav } from '@/lib/nav';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-sand/90 shadow-card backdrop-blur' : 'bg-sand'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {t('skip')}
      </a>
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? 'text-coral'
                  : 'text-ink/80 hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden text-ink sm:inline-flex" />
          <Link
            href="/support#donate"
            className="hidden rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-lift sm:inline-flex"
          >
            {t('donate')}
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('close') : t('menu')}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-sand lg:hidden">
          <nav className="wrap flex flex-col py-4" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`border-b border-ink/5 py-3 font-display text-lg font-bold ${
                  isActive(item.href) ? 'text-coral' : 'text-ink'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <LanguageToggle className="text-ink" />
              <Link
                href="/support#donate"
                className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white"
              >
                {t('donate')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
