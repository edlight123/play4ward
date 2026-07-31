import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { links } from '@/lib/config';
import { isPlaceholder } from '@/lib/placeholder';

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('contact');
  const inquiries = t.raw('inquiries.items') as { title: string; value: string }[];

  // Play4Ward does not publish a phone number, so there is no WhatsApp row.
  // Anything still unfilled drops out rather than showing a placeholder.
  const methods = [
    { title: t('methods.generalTitle'), value: t('methods.general'), href: `mailto:${t('methods.general')}` },
    { title: t('methods.locationTitle'), value: t('methods.location') },
    { title: t('methods.instagramTitle'), value: t('methods.instagram'), href: links.instagram, external: true },
  ].filter((m) => !isPlaceholder(m.value));

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      <Section tone="sand">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-coral">
                {m.title}
              </h3>
              {m.href ? (
                <a
                  href={m.href}
                  target={m.external ? '_blank' : undefined}
                  rel={m.external ? 'noopener noreferrer' : undefined}
                  className="link-grow mt-3 block break-words font-semibold text-ink"
                >
                  {m.value}
                </a>
              ) : (
                <p className="mt-3 break-words font-semibold text-ink">{m.value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" title={t('inquiries.title')}>
        <div className="grid gap-4 sm:grid-cols-3">
          {inquiries.map((q, i) => (
            <div key={i} className="rounded-2xl border-2 border-ink/10 p-6">
              <h3 className="text-lg">{q.title}</h3>
              <p className="mt-2 break-words text-sm text-ink/70">{q.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl rounded-xl bg-sand p-5 text-sm leading-relaxed text-ink/70">
          {t('privacyNote')}
        </p>
      </Section>

      <Section tone="coral" center>
        <div className="text-center">
          <Button href="/join" variant="onDark" size="lg">
            {t('joinCta')}
          </Button>
        </div>
      </Section>
    </>
  );
}
