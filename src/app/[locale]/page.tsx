import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { HomeHero } from '@/components/HomeHero';
import { ImpactStrip } from '@/components/Stats';
import { MissionPillars } from '@/components/MissionPillars';
import { Section } from '@/components/Section';
import { ProgramCard, StoryCard, EventCard } from '@/components/Cards';
import { CTASection } from '@/components/CTASection';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';

// `photo` is set only where Play4Ward has a real image; the others keep their
// labelled placeholders until photos arrive (see CONTENT-CHECKLIST.md).
const programKeys = [
  { key: 'center', href: '/programs#center', photo: '/photos/training-session.jpg' },
  { key: 'leadership', href: '/programs#leadership' },
  { key: 'outreach', href: '/programs#outreach' },
  { key: 'tournaments', href: '/programs#tournaments' },
] as const;

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('home');
  const tp = useTranslations('programCards');
  const te = useTranslations('events');
  const events = te.raw('items') as {
    date: string;
    tag: string;
    title: string;
    place: string;
    description: string;
  }[];

  return (
    <>
      <HomeHero />
      <ImpactStrip message={t('impactStrip')} />

      {/* Mission — Play / Lead / Move Forward */}
      <Section
        tone="sand"
        eyebrow={t('missionHead.eyebrow')}
        title={t('missionHead.title')}
        intro={t('missionHead.intro')}
      >
        <MissionPillars />
      </Section>

      {/* Programs preview */}
      <Section
        tone="white"
        eyebrow={t('programsHead.eyebrow')}
        title={t('programsHead.title')}
        intro={t('programsHead.intro')}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programKeys.map((p, i) => (
            <ProgramCard
              key={p.key}
              index={`0${i + 1}`}
              title={tp(`${p.key}.title`)}
              description={tp(`${p.key}.desc`)}
              href={p.href}
              cta={t('programsHead.cta')}
              photoLabel={tp(`${p.key}.photo`)}
              photoSrc={'photo' in p ? p.photo : undefined}
            />
          ))}
        </div>
      </Section>

      {/* Featured story */}
      <Section tone="sand" eyebrow={t('storyHead.eyebrow')} title={t('storyHead.title')}>
        <StoryCard
          quote="[REPLACE: « Avant de rejoindre Play4Ward… » — récit authentique d'un·e jeune athlète.]"
          name="[REMPLACER : nom]"
          role="[REMPLACER : âge · école · quartier]"
          photoLabel="[REMPLACER : portrait de l'athlète]"
        />
      </Section>

      {/* Upcoming activities */}
      <Section
        tone="white"
        eyebrow={t('activitiesHead.eyebrow')}
        title={t('activitiesHead.title')}
        intro={t('activitiesHead.intro')}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {events.slice(0, 4).map((e, i) => (
            <EventCard key={i} {...e} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/events" variant="outline">
            {t('activitiesHead.cta')}
          </Button>
        </div>
      </Section>

      {/* Partners */}
      <Section
        tone="sand"
        eyebrow={t('partnersHead.eyebrow')}
        title={t('partnersHead.title')}
        intro={t('partnersHead.intro')}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <ImagePlaceholder
              key={i}
              label={i === 0 ? 'EdLight [REPLACE: logo]' : '[REPLACE: partner logo]'}
              ratio="aspect-[3/2]"
              tone="sand"
            />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/50">{t('partnersHead.note')}</p>
      </Section>

      <CTASection />
    </>
  );
}
