import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { StatGrid } from '@/components/Stats';
import { SdgGoals } from '@/components/SdgGoals';
import { CTASection } from '@/components/CTASection';
import { realItems, real } from '@/lib/placeholder';

export default function ImpactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('impact');
  // Only stats Play4Ward can document. All eight are unfilled today, so the
  // dashboard hides itself; it returns as soon as any number is entered.
  const stats = realItems(
    t.raw('dashboard.stats') as { value: string; label: string }[],
    'value',
  );
  const indicators = t.raw('indicators.items') as string[];
  const reports = t.raw('reports.items') as string[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      {/* Dashboard — only once there are documented numbers */}
      {stats.length > 0 && (
        <Section tone="sand" eyebrow={t('dashboard.eyebrow')} title={t('dashboard.title')}>
          <StatGrid stats={stats} />
          {real(t('dashboard.note')) && (
            <p className="mt-6 text-sm text-ink/50">{t('dashboard.note')}</p>
          )}
        </Section>
      )}

      {/* SDG alignment */}
      <Section
        tone="white"
        eyebrow={t('sdg.eyebrow')}
        title={t('sdg.title')}
        intro={t('sdg.intro')}
      >
        <SdgGoals />
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
