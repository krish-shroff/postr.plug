import type { ReactNode } from "react";
export default function PageShell({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="wrap max-w-3xl py-12 sm:py-16">
      <h1 className="h1">{title}</h1>
      {intro && <p className="mt-4 text-lg text-bone/75">{intro}</p>}
      <div className="mt-10 space-y-6">{children}</div>
    </div>
  );
}
