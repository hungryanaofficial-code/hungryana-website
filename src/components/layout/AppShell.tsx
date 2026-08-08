import type { ReactNode } from 'react';

/** Full-width site on desktop; app-style padding only on mobile via CSS. */
export function AppShell({ children }: { children: ReactNode }) {
  return <div className="app-shell relative min-h-screen w-full bg-black">{children}</div>;
}
