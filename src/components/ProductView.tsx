"use client";
import Link from "next/link";
import { useState } from "react";
import Poster from "./PosterArt";
import SizePicker from "./SizePicker";
import Qty from "./Qty";
import { useStore } from "@/lib/store";
import { site, type Size } from "@/config/site";
import { inr, priceFor } from "@/lib/utils";
import type { Product } from "@/data/products";

const views = ["Front", "Close-up", "On the wall"];

export default function ProductView({ p }: { p: Product }) {
  const { add, wish, toggleWish } = useStore();
  const [view, setView] = useState(0);
  const [size, setSize] = useState<Size>("A4");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const liked = wish.includes(p.slug);
  const price = priceFor("ready", size);
  return (
    <div className="wrap grid gap-10 py-10 md:grid-cols-2">
      <div>
        <Poster p={p} variant={view} />
        <div className="mt-3 grid grid-cols-3 gap-3">
          {views.map((l, i) => (
            <button key={l} onClick={() => setView(i)} aria-label={`Show ${l} view`} aria-pressed={view === i}
              className={`overflow-hidden rounded-lg border-2 ${view === i ? "border-glow" : "border-transparent opacity-70"}`}><Poster p={p} variant={i} /></button>
          ))}
        </div>
      </div>
      <div>
        <Link href="/shop" className="text-sm text-glow">Back to all posters</Link>
        <p className="mt-4 text-sm text-bone/70">{p.category}</p>
        <h1 className="h1 mt-1">{p.title}</h1>
        <p className="mt-3 text-3xl font-semibold">{inr(price)}</p>
        <p className="mt-4 max-w-prose text-bone/80">{p.blurb} Original, royalty-free artwork, printed in A4 or A3.</p>
        <p className="mb-2 mt-6 text-sm font-medium">Size</p>
        <SizePicker kind="ready" value={size} onChange={setSize} />
        <p className="mb-2 mt-6 text-sm font-medium">Quantity</p>
        <Qty label="Quantity" value={qty} onChange={(n) => setQty(Math.max(1, Math.min(20, n)))} />
        <div className="mt-8 flex gap-3">
          <button aria-live="polite" className="btn flex-1" onClick={() => { add({ slug: p.slug, size, qty }); setAdded(true); setTimeout(() => setAdded(false), 1500); }}>
            {added ? "Added to cart" : `Add to cart, ${inr(price * qty)}`}
          </button>
          <button aria-pressed={liked} aria-label={liked ? "Remove from wishlist" : "Add to wishlist"} className="btn-ghost" onClick={() => toggleWish(p.slug)}>{liked ? "♥" : "♡"}</button>
        </div>
        <div className="card mt-8 space-y-1.5 p-4 text-sm text-bone/80">
          <p className="font-semibold text-bone">{site.exclusive}</p>
          <p>{site.shipping}</p>
          <p>{site.returns}</p>
        </div>
      </div>
    </div>
  );
}
