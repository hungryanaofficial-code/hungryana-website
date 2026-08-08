import type { ReactNode } from 'react';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell relative mx-auto min-h-screen w-full max-w-lg bg-black md:max-w-2xl lg:max-w-3xl">
      {children}
    </div>
  );
}
