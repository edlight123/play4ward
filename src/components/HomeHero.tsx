import { useTranslations } from 'next-intl';
import { Button } from './Button';
import { Link } from '@/i18n/navigation';
import { GoalArc } from './GoalArc';
import { Photo } from './Photo';

export function HomeHero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* ambient court lines + arc */}
      <div className="absolute inset-0 court-lines opacity-60" aria-hidden="true" />
      <GoalArc
        className="pointer-events-none absolute bottom-0 left-1/2 h-[70%] w-[900px] -translate-x-1/2 text-white/[0.07]"
        strokeWidth={1.5}
      />

      <div className="wrap relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <span className="eyebrow animate-rise-in text-gold" style={{ animationDelay: '40ms' }}>
            {t('eyebrow')}
          </span>
          <h1
            className="mt-5 animate-rise-in text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: '120ms' }}
          >
            {t('titleLead')}{' '}
            <span className="relative whitespace-nowrap text-coral">
              {t('titleAccent')}
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-coral"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8c40-6 120-6 196 0" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p
            className="mt-7 max-w-xl animate-rise-in text-lg leading-relaxed text-white/80 sm:text-xl"
            style={{ animationDelay: '220ms' }}
          >
            {t('body')}
          </p>
          <div
            className="mt-9 flex animate-rise-in flex-wrap items-center gap-4"
            style={{ animationDelay: '320ms' }}
          >
            <Button href="/join" variant="primary" size="lg">
              {t('primary')}
            </Button>
            <Button href="/support" variant="onDark" size="lg">
              {t('secondary')}
            </Button>
            <Link href="/partners" className="link-grow font-display text-sm font-bold text-white/80 hover:text-white">
              {t('tertiary')} →
            </Link>
          </div>
        </div>

        {/* Framed photo block */}
        <div className="relative animate-rise-in" style={{ animationDelay: '260ms' }}>
          <div className="relative">
            <Photo
              src="/photos/team-banner.jpg"
              label={t('photo')}
              ratio="aspect-[4/3]"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="ring-1 ring-white/20"
            />
            {/* corner badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-gold px-5 py-4 text-ink shadow-lift sm:block">
              <span className="block font-display text-xs font-bold uppercase tracking-[0.18em]">
                {t('badgeTop')}
              </span>
              <span className="block font-display text-lg font-extrabold leading-tight">
                {t('badgeBottom')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
