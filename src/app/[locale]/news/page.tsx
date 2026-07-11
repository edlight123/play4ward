import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { links } from '@/lib/config';

export default function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('news');
  const items = t.raw('items') as {
    date: string;
    tag: string;
    title: string;
    excerpt: string;
  }[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      <Section tone="sand">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a, i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <ImagePlaceholder
                label="[REPLACE: article image]"
                ratio="aspect-[16/10]"
                className="rounded-none border-0"
              />
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
        <p className="mt-6 text-sm text-ink/50">{t('note')}</p>
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
