/**
 * Supporters Play4Ward holds an actual logo file for.
 *
 * Shared by the "Supported by" bar, the home partners strip and the partners page,
 * so the three can never disagree. Names are proper nouns and are not translated.
 *
 * Both logos were taken from Play4Ward's own brand assets in the shared Drive
 * folder and had their backgrounds knocked out to transparency. The IOC lockup
 * comes from the flat, digitally-rendered supporter credit at the foot of the
 * organization's own carousel slide — not from the photographed banner, which is
 * on fabric and would not hold up as a logo.
 *
 * Note: the Olympic rings are a protected mark. Play4Ward already displays this
 * exact credit publicly on its own banner and social posts, so this mirrors what
 * the organization does — but the IOC does publish usage guidelines worth checking.
 *
 * `category` indexes into `partners.categories` in messages/*.json:
 *   0 Strategic partners   1 Financial sponsors   2 Program partners
 *   3 School partners      4 Media partners       5 Equipment partners
 *
 * IOC Young Leaders sits in 1 (financial sponsors): they awarded Play4Ward a grant.
 * EdLight sits in 0 (strategic partners) deliberately — the nature of their support
 * is not public, so the site names them without characterising what they provide.
 */
export type Partner = {
  name: string;
  logo: string;
  /** Intrinsic size, so the logo can be laid out by height without distortion. */
  width: number;
  height: number;
  category: number;
};

export const confirmedPartners: Partner[] = [
  {
    name: 'IOC Young Leaders — Advancing Olympism 365',
    logo: '/partners/ioc-young-leaders.png',
    width: 450,
    height: 82,
    category: 1,
  },
  {
    name: 'EdLight Initiative',
    logo: '/partners/edlight-initiative.png',
    width: 800,
    height: 289,
    category: 0,
  },
];

export const partnersInCategory = (index: number): Partner[] =>
  confirmedPartners.filter((p) => p.category === index);
