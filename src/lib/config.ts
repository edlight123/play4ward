import settings from '../../content/settings.json';

// Play4Ward external links. These are editable in the TinaCMS admin (/admin)
// under "Site settings" — the team can drop in the real Google Form, donation,
// and Instagram URLs without touching code. Values live in content/settings.json.
export const links = {
  registrationForm: settings.registrationForm,
  instagram: settings.instagram,
  donate: settings.donate,
};

/**
 * A link is only live once it holds a real URL. The seeded values are deliberate
 * dead placeholders (`https://forms.gle/REPLACE`, `https://REPLACE-donation-link`),
 * and sending a visitor to one is worse than telling them it is not ready — so the
 * pages check this and offer a real alternative instead of a broken button.
 *
 * Drop the real URL into /admin and the button switches over on its own.
 */
const isLive = (url: string | undefined): boolean =>
  typeof url === 'string' && url.trim() !== '' && !/REPLACE/i.test(url);

export const linkIsLive = {
  registrationForm: isLive(settings.registrationForm),
  instagram: isLive(settings.instagram),
  donate: isLive(settings.donate),
};
