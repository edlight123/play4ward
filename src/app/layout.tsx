import type { ReactNode } from 'react';

// The real <html>/<body> live in [locale]/layout.tsx so the lang attribute
// can reflect the active locale. This root layout is a pass-through.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
