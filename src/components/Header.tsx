"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { useStore } from "@/lib/store";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useStore();
  const links = site.nav.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="hover:text-glow">{l}</Link>);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
      <p className="bg-accent/25 px-4 py-1.5 text-center text-xs">Only for {site.school} students. Pay on delivery, no shipping fee.</p>
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold">Postr<span className="text-glow">.</span>Plug</Link>
        <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">{links}</nav>
        <div className="flex items-center gap-2">
          <Link href="/cart" className="btn-ghost !px-4 !py-2">Cart ({count})</Link>
          <button className="btn-ghost !px-4 !py-2 md:hidden" aria-expanded={open} aria-controls="m-nav" onClick={() => setOpen(!open)}>Menu</button>
        </div>
      </div>
      {open && <nav id="m-nav" aria-label="Mobile" className="wrap grid gap-4 pb-5 text-lg md:hidden">{links}</nav>}
    </header>
  );
}
