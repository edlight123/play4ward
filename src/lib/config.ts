import settings from '../../content/settings.json';

// Play4Ward external links. These are editable in the TinaCMS admin (/admin)
// under "Site settings" — the team can drop in the real Google Form, donation,
// and Instagram URLs without touching code. Values live in content/settings.json.
export const links = {
  registrationForm: settings.registrationForm,
  instagram: settings.instagram,
  donate: settings.donate,
};
