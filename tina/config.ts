import { defineConfig } from 'tinacms';
import messageFields from './fields.json';

// Branch Tina reads/writes. On Vercel this is the deployed branch; locally 'main'.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // Set in TinaCloud, then added to Vercel env vars (see README → CMS setup).
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin', // admin served at /admin
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads', // uploaded photos land in public/uploads
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'messages',
        label: 'Website text (FR / KR / EN)',
        path: 'messages',
        format: 'json',
        // Editors edit the three existing language files; they can't add/remove languages here.
        ui: { allowedActions: { create: false, delete: false } },
        // Full mirror of the message structure, generated from fr.json.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fields: messageFields as any,
      },
      {
        name: 'settings',
        label: 'Site settings (links)',
        path: 'content',
        format: 'json',
        match: { include: 'settings' },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: 'string',
            name: 'registrationForm',
            label: 'Registration form URL (Google Form) — the Join button',
          },
          { type: 'string', name: 'instagram', label: 'Instagram URL' },
          { type: 'string', name: 'donate', label: 'Donation link URL' },
        ],
      },
    ],
  },
});
