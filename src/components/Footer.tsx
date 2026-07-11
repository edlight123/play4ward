import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { primaryNav, secondaryNav } from '@/lib/nav';
import { links } from '@/lib/config';
import { Logo } from './Logo';
import { GoalArc } from './GoalArc';

export function Footer() {
  const t = useTranslations('nav');
  const f = useTranslations('footer');
  const c = useTranslations('contact');

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <GoalArc
        className="pointer-events-none absolute -top-8 left-1/2 h-40 w-[520px] -translate-x-1/2 text-white/10"
        strokeWidth={1.5}
      />
      <div className="wrap relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {f('tagline')}
            </p>
            <p className="mt-4 text-sm text-white/60">{f('location')}</p>
          </div>

          <nav aria-label="Footer primary">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {f('explore')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="link-grow text-sm text-white/80 hover:text-white">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer secondary">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {f('more')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {secondaryNav.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="link-grow text-sm text-white/80 hover:text-white">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {f('getInTouch')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <a href="mailto:REPLACE@play4ward.org" className="link-grow hover:text-white">
                  REPLACE@play4ward.org
                </a>
                <span className="ml-1 text-white/40">[{c('emailNote')}]</span>
              </li>
              <li>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow hover:text-white"
                >
                  Instagram
                </a>
                <span className="ml-1 text-white/40">@play4ward_haiti</span>
              </li>
            </ul>
            <Link
              href="/support#donate"
              className="mt-5 inline-flex rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-coral-600"
            >
              {t('donate')}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {f('year')} Play4Ward. {f('rights')}</p>
          <p>{f('builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}
