"use client";
import { useMemo, useState } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useStore } from "@/lib/store";
import { inr, priceFor } from "@/lib/utils";

export default function ShopClient({ initialCat = "All" }: { initialCat?: string }) {
  const { wish } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCat);
  const [sort, setSort] = useState("featured");
  const [onlyWish, setOnlyWish] = useState(false);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products
      .filter((p) => (cat === "All" || p.category === cat) && (!s || `${p.title} ${p.category} ${p.blurb}`.toLowerCase().includes(s)) && (!onlyWish || wish.includes(p.slug)))
      .sort((a, b) =>
        sort === "az" ? a.title.localeCompare(b.title)
        : sort === "za" ? b.title.localeCompare(a.title)
        : sort === "new" ? products.indexOf(b) - products.indexOf(a)
        : Number(!!b.bestSeller) - Number(!!a.bestSeller));
  }, [q, cat, sort, onlyWish, wish]);

  return (
    <div className="wrap py-12">
      <h1 className="h1">Shop posters</h1>
      <p className="mt-3 max-w-xl text-bone/75">Every ready-made poster is {inr(priceFor("ready", "A4"))} in A4 or A3. Orders are for Mahadevi Birla World Academy students, paid on delivery.</p>
      <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_auto_auto]">
        <input type="search" aria-label="Search posters" placeholder="Search posters" className="input" value={q} onChange={(e) => setQ(e.target.value)} />
        <select aria-label="Category" className="input" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option>All</option>{categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select aria-label="Sort by" className="input" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Best sellers first</option><option value="new">Newest</option><option value="az">Title A to Z</option><option value="za">Title Z to A</option>
        </select>
        <button aria-pressed={onlyWish} className={`btn-ghost ${onlyWish ? "!border-glow !bg-accent/25" : ""}`} onClick={() => setOnlyWish(!onlyWish)}>♥ Wishlist ({wish.length})</button>
      </div>
      <p aria-live="polite" className="mt-6 text-sm text-bone/70">{list.length} {list.length === 1 ? "poster" : "posters"}</p>
      {list.length
        ? <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
        : <p className="mt-10 text-center text-bone/70">No posters match. Clear the search or pick another category.</p>}
    </div>
  );
}
