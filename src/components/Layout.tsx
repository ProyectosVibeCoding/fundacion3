import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div className="iso-orb pointer-events-none absolute -right-24 -top-28 size-72 opacity-20" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">{lead}</p>
      </div>
    </section>
  );
}
