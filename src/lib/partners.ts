/**
 * Supporters Play4Ward holds an actual logo file for.
 *
 * Shared by the home partners strip and the partners page so the two can never
 * disagree. Names are proper nouns and are not translated.
 *
 * `category` indexes into `partners.categories` in messages/*.json:
 *   0 Strategic partners   1 Financial sponsors   2 Program partners
 *   3 School partners      4 Media partners       5 Equipment partners
 *
 * Still missing: the IOC Young Leaders / Olympism 365 logo. It exists only inside
 * composite graphics (a carousel slide and the banner in the team photo), which is
 * not clean enough to crop into a logo tile.
 */
export type Partner = {
  name: string;
  logo: string;
  category: number;
};

export const confirmedPartners: Partner[] = [
  { name: 'EdLight Initiative', logo: '/partners/edlight-initiative.png', category: 0 },
];

export const partnersInCategory = (index: number): Partner[] =>
  confirmedPartners.filter((p) => p.category === index);
