"use client";
import Link from "next/link";
import { useState } from "react";
import Poster from "./PosterArt";
import { useStore } from "@/lib/store";
import { inr, priceFor } from "@/lib/utils";
import type { Product } from "@/data/products";

export default function ProductCard({ p }: { p: Product }) {
  const { wish, toggleWish, add } = useStore();
  const [ok, setOk] = useState(false);
  const liked = wish.includes(p.slug);
  const href = `/product/${p.slug}`;
  return (
    <article className="product-card card overflow-hidden p-2.5 sm:p-3">
      <div className="relative">
        <Link href={href} aria-label={`View ${p.title}`}><Poster p={p} /></Link>
        <button onClick={() => toggleWish(p.slug)} aria-pressed={liked} aria-label={`${liked ? "Remove" : "Add"} ${p.title} ${liked ? "from" : "to"} wishlist`}
          className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/60 text-lg backdrop-blur transition hover:scale-110 hover:bg-accent">{liked ? "♥" : "♡"}</button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-semibold sm:text-base"><Link className="transition hover:text-glow" href={href}>{p.title}</Link></h3>
          <p className="mt-0.5 text-[11px] text-bone/60 sm:text-xs">{p.category} · A4 or A3</p>
        </div>
        <p className="font-semibold">{inr(priceFor("ready", "A4"))}</p>
      </div>
      <button aria-live="polite" className="btn mt-3 w-full !py-2" onClick={() => { add({ slug: p.slug, size: "A4", qty: 1 }); setOk(true); setTimeout(() => setOk(false), 1200); }}>
        {ok ? "Added" : "Add to cart (A4)"}
      </button>
    </article>
  );
}
