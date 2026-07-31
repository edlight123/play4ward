import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { StatGrid } from '@/components/Stats';
import { SdgGoals } from '@/components/SdgGoals';
import { StoryCard } from '@/components/Cards';
import { CTASection } from '@/components/CTASection';

export default function ImpactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('impact');
  const stats = t.raw('dashboard.stats') as { value: string; label: string }[];
  const indicators = t.raw('indicators.items') as string[];
  const reports = t.raw('reports.items') as string[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      {/* Dashboard */}
      <Section tone="sand" eyebrow={t('dashboard.eyebrow')} title={t('dashboard.title')}>
        <StatGrid stats={stats} />
        <p className="mt-6 text-sm text-ink/50">{t('dashboard.note')}</p>
      </Section>

      {/* SDG alignment */}
      <Section
        tone="white"
        eyebrow={t('sdg.eyebrow')}
        title={t('sdg.title')}
        intro={t('sdg.intro')}
      >
        <SdgGoals />
      </Section>

      {/* Stories */}
      <Section tone="sand" eyebrow={t('stories.eyebrow')} title={t('stories.title')}>
        <StoryCard
          quote="[REPLACE: citation authentique d'un·e joueur·se, parent, entraîneur ou responsable scolaire.]"
          name="[REMPLACER : nom]"
          role="[REMPLACER : rôle]"
          photoLabel="[REMPLACER : portrait]"
        />
        <p className="mt-6 text-sm text-ink/50">{t('stories.note')}</p>
      </Section>

      {/* Indicators */}
      <Section tone="blue" eyebrow={t('indicators.eyebrow')} title={t('indicators.title')}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {indicators.map((it, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-white/10 p-5">
              <span className="font-display text-lg font-extrabold text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-semibold text-white/90">{it}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-white/70">{t('indicators.caution')}</p>
      </Section>

      {/* Reports */}
      <Section tone="sand" eyebrow={t('reports.eyebrow')} title={t('reports.title')}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((r, i) => (
            <div key={i} className="rounded-2xl border-2 border-dashed border-ink/15 bg-white/60 p-6 text-center">
              <span className="font-semibold text-ink/70">{r}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
