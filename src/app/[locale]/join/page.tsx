import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { links } from '@/lib/config';

export default function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('join');
  const options = t.raw('options.items') as { title: string; body: string }[];

  const blocks = [
    { key: 'who' },
    { key: 'receive' },
    { key: 'expect' },
  ] as const;

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')}>
        <Button href={links.registrationForm} external variant="primary" size="lg">
          {t('hero.cta')}
        </Button>
      </PageHero>

      {/* Who / receive / expect */}
      <Section tone="sand">
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((b, i) => (
            <div key={b.key} className="rounded-2xl bg-white p-7 shadow-card">
              <span className="font-display text-sm font-bold text-coral">0{i + 1}</span>
              <h3 className="mt-2 text-xl text-blue">{t(`${b.key}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{t(`${b.key}.body`)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Options */}
      <Section tone="white" eyebrow={t('options.eyebrow')} title={t('options.title')}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl border-2 border-ink/10 p-6 transition-colors hover:border-coral"
            >
              <h3 className="text-lg">{o.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Safeguarding + form CTA */}
      <Section tone="ink">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/5 p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h2 className="text-2xl text-gold">{t('safeguarding.title')}</h2>
              <p className="mt-3 leading-relaxed text-white/85">{t('safeguarding.body')}</p>
              <p className="mt-4 text-sm text-white/60">{t('safeguarding.formNote')}</p>
              <div className="mt-6">
                <Button href={links.registrationForm} external variant="onDark" size="lg">
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
