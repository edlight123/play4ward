import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { real } from '@/lib/placeholder';
import { links } from '@/lib/config';

export default function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('support');
  const tiers = t.raw('money.tiers') as { amount: string; body: string }[];
  const equipment = t.raw('equipment.items') as string[];
  const sponsors = t.raw('sponsor.items') as { title: string; body: string }[];
  const corporate = t.raw('corporate.items') as string[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      {/* Donate money */}
      <Section id="donate" tone="sand" eyebrow={t('money.eyebrow')} title={t('money.title')}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <div key={i} className="flex flex-col rounded-2xl bg-white p-6 shadow-card">
              <span className="font-display text-4xl font-extrabold text-coral">
                {tier.amount}
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{tier.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/50">{t('money.note')}</p>
        <div className="mt-6">
          <Button href={links.donate} external variant="primary" size="lg">
            {t('money.cta')}
          </Button>
          {real(t('money.methodNote')) && (
            <span className="ml-3 text-xs text-ink/40">{t('money.methodNote')}</span>
          )}
        </div>
      </Section>

      {/* Equipment */}
      <Section tone="white" eyebrow={t('equipment.eyebrow')} title={t('equipment.title')} intro={t('equipment.intro')}>
        <div className="flex flex-wrap gap-3">
          {equipment.map((it, i) => (
            <span
              key={i}
              className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {it}
            </span>
          ))}
        </div>
        {real(t('equipment.note')) && (
          <p className="mt-6 text-sm text-ink/50">{t('equipment.note')}</p>
        )}
      </Section>

      {/* Sponsor packages */}
      <Section tone="blue" eyebrow={t('sponsor.eyebrow')} title={t('sponsor.title')}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/10 p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-ink">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Corporate */}
      <Section tone="sand" eyebrow={t('corporate.eyebrow')} title={t('corporate.title')} intro={t('corporate.intro')}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {corporate.map((it, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-coral" />
              <span className="font-semibold text-ink/85">{it}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
