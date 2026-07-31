import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { HomeHero } from '@/components/HomeHero';
import { ImpactStrip } from '@/components/Stats';
import { MissionPillars } from '@/components/MissionPillars';
import { SupportedBy } from '@/components/SupportedBy';
import { TrainingVideo } from '@/components/TrainingVideo';
import { Section } from '@/components/Section';
import { ProgramCard, EventCard } from '@/components/Cards';
import { CTASection } from '@/components/CTASection';
import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { realItems } from '@/lib/placeholder';
import { confirmedPartners } from '@/lib/partners';

// `photo` is set only where Play4Ward has a real image; the others keep their
// labelled placeholders until photos arrive (see CONTENT-CHECKLIST.md).
const programKeys = [
  { key: 'center', href: '/programs#center', photo: '/photos/training-drills.jpg' },
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
  // Same rule as the events page: no invented dates on a public page.
  const events = realItems(
    te.raw('items') as {
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

  return (
    <>
      <HomeHero />
      <ImpactStrip message={t('impactStrip')} />
      <SupportedBy />

      {/* Mission — Play / Lead / Move Forward */}
      <Section
        tone="sand"
        eyebrow={t('missionHead.eyebrow')}
        title={t('missionHead.title')}
        intro={t('missionHead.intro')}
      >
        <MissionPillars />
      </Section>

      {/* Training footage */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <TrainingVideo label={t('videoHead.title')} />
          <div>
            <span className="eyebrow text-coral">{t('videoHead.eyebrow')}</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{t('videoHead.title')}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              {t('videoHead.intro')}
            </p>
          </div>
        </div>
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

      {/* Upcoming activities — only when there are real, dated events */}
      {events.length > 0 && (
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
      )}

      {/* Partners */}
      <Section
        tone="sand"
        eyebrow={t('partnersHead.eyebrow')}
        title={t('partnersHead.title')}
        intro={t('partnersHead.intro')}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {confirmedPartners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-2xl bg-white p-5 shadow-card"
            >
              <Photo
                src={p.logo}
                label={p.name}
                ratio="aspect-[3/2]"
                fit="contain"
                sizes="(min-width: 640px) 25vw, 50vw"
                className="rounded-none"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/50">{t('partnersHead.note')}</p>
      </Section>

      <CTASection />
    </>
  );
}
