import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { EventCard } from '@/components/Cards';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { realItems, real } from '@/lib/placeholder';

export default function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('events');
  const nav = useTranslations('nav');
  // An event is only shown once it has a real date, title and place — the
  // scaffolded sample entries had invented dates, which must not look real.
  const items = realItems(
    t.raw('items') as {
      date: string;
      tag: string;
      title: string;
      place: string;
      description: string;
    }[],
    'date',
    'title',
    'place',
  );
  const note = real(t('note'));

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      <Section tone="sand" title={items.length ? t('upcomingTitle') : undefined}>
        {items.length > 0 ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((e, i) => (
                <EventCard key={i} {...e} />
              ))}
            </div>
            {note && <p className="mt-6 text-sm text-ink/50">{note}</p>}
          </>
        ) : (
          <p className="max-w-2xl text-lg leading-relaxed text-ink/70">{t('empty')}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/news" variant="outline">
            {t('newsLink')}
          </Button>
          {items.length === 0 && (
            <Button href="/join" variant="primary">
              {nav('join')}
            </Button>
          )}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
