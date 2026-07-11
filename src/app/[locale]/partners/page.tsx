import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';

export default function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('partners');
  const categories = t.raw('categories') as { title: string; body: string }[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      <Section tone="sand">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-2xl bg-white p-7 shadow-card">
              <h3 className="text-lg text-blue">{cat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{cat.body}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <ImagePlaceholder label="[REPLACE: logo]" ratio="aspect-[3/2]" tone="sand" />
                <ImagePlaceholder label="[REPLACE: logo]" ratio="aspect-[3/2]" tone="sand" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/50">{t('note')}</p>
      </Section>

      <Section tone="ink" center>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-gold sm:text-4xl">{t('becomeTitle')}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{t('becomeBody')}</p>
          <div className="mt-8">
            <Button href="/contact" variant="onDark" size="lg">
              {t('becomeCta')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
