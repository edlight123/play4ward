import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { EventCard } from '@/components/Cards';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';

export default function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('events');
  const items = t.raw('items') as {
    date: string;
    tag: string;
    title: string;
    place: string;
    description: string;
  }[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      <Section tone="sand" title={t('upcomingTitle')}>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((e, i) => (
            <EventCard key={i} {...e} />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/50">{t('note')}</p>
        <div className="mt-8">
          <Button href="/news" variant="outline">
            {t('newsLink')}
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
