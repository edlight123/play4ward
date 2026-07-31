import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { links } from '@/lib/config';
import { realItems, real } from '@/lib/placeholder';

export default function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('news');
  // Only articles that have actually been written.
  const items = realItems(
    t.raw('items') as { date: string; tag: string; title: string; excerpt: string }[],
    'title',
    'date',
  );
  const note = real(t('note'));

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      <Section tone="sand">
        {items.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((a, i) => (
                <article
                  key={i}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="eyebrow text-coral text-[10px]">{a.tag}</span>
                      <span className="text-ink/40">· {a.date}</span>
                    </div>
                    <h3 className="mt-2 text-lg leading-snug">{a.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{a.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
            {note && <p className="mt-6 text-sm text-ink/50">{note}</p>}
          </>
        ) : (
          <p className="max-w-2xl text-lg leading-relaxed text-ink/70">{t('empty')}</p>
        )}
      </Section>

      <Section tone="ink" center title={t('instaNote')}>
        <div className="text-center">
          <Button href={links.instagram} external variant="onDark">
            Instagram
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
