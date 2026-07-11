import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { CTASection } from '@/components/CTASection';

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('about');
  const values = t.raw('values.items') as { title: string; body: string }[];
  const points = t.raw('why.points') as string[];
  const members = t.raw('team.members') as {
    name: string;
    role: string;
    bio: string;
  }[];
  const gov = t.raw('governance.items') as string[];

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        intro={t('hero.intro')}
      />

      {/* Story */}
      <Section tone="sand">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-coral">{t('story.eyebrow')}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">{t('story.title')}</h2>
            <p className="mt-5 leading-relaxed text-ink/75">{t('story.body1')}</p>
            <p className="mt-4 leading-relaxed text-ink/75">{t('story.body2')}</p>
          </div>
          <ImagePlaceholder label={t('story.photo')} ratio="aspect-[4/3]" />
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="blue">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-gold sm:text-3xl">{t('mv.missionTitle')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">{t('mv.mission')}</p>
          </div>
          <div>
            <h2 className="text-2xl text-gold sm:text-3xl">{t('mv.visionTitle')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">{t('mv.vision')}</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section
        tone="white"
        eyebrow={t('values.eyebrow')}
        title={t('values.title')}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <div key={i} className="rounded-2xl bg-sand p-6">
              <span className="font-display text-sm font-bold text-coral">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why handball */}
      <Section tone="sand" eyebrow={t('why.eyebrow')} title={t('why.title')} intro={t('why.intro')}>
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-xs font-bold text-white">
                  ✓
                </span>
                <span className="leading-relaxed text-ink/80">{p}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border-l-4 border-gold bg-white p-7 shadow-card">
            <p className="text-lg leading-relaxed text-ink/80">{t('why.federation')}</p>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section tone="white" eyebrow={t('team.eyebrow')} title={t('team.title')} intro={t('team.intro')}>
        <div className="grid gap-6 sm:grid-cols-3">
          {members.map((m, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-sand shadow-card">
              <ImagePlaceholder
                label="[REPLACE: portrait]"
                ratio="aspect-square"
                className="rounded-none border-0"
              />
              <div className="p-6">
                <h3 className="text-lg">{m.name}</h3>
                <p className="text-sm font-semibold text-coral">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Governance */}
      <Section tone="ink" eyebrow={t('governance.eyebrow')} title={t('governance.title')} intro={t('governance.intro')}>
        <div className="grid gap-4 sm:grid-cols-2">
          {gov.map((g, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
              <span className="text-white/90">{g}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/50">{t('governance.note')}</p>
      </Section>

      <CTASection />
    </>
  );
}
