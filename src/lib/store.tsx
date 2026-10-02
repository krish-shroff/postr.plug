"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Size } from "@/config/site";
import { products } from "@/data/products";
import { priceFor } from "@/lib/utils";

export type Line = { slug: string; size: Size; qty: number };
type Ctx = {
  lines: Line[]; wish: string[]; count: number;
  add: (l: Line) => void; setQty: (slug: string, size: Size, qty: number) => void; clear: () => void;
  toggleWish: (slug: string) => void;
};
const StoreCtx = createContext<Ctx | null>(null);

function useLocal<T>(key: string, init: T) {
  const [v, setV] = useState<T>(init);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { const s = localStorage.getItem(key); if (s) setV(JSON.parse(s)); } catch {} setReady(true); }, [key]);
  useEffect(() => { if (ready) localStorage.setItem(key, JSON.stringify(v)); }, [key, v, ready]);
  return [v, setV] as const;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useLocal<Line[]>("postr-cart", []);
  const [wish, setWish] = useLocal<string[]>("postr-wish", []);
  const same = (a: Line, b: Line) => a.slug === b.slug && a.size === b.size;
  const add = (l: Line) => setLines((cur) => cur.some((x) => same(x, l))
    ? cur.map((x) => (same(x, l) ? { ...x, qty: Math.min(20, x.qty + l.qty) } : x))
    : [...cur, l]);
  const setQty = (slug: string, size: Size, qty: number) => setLines((cur) =>
    cur.flatMap((x) => (same(x, { slug, size, qty }) ? (qty > 0 ? [{ ...x, qty: Math.min(20, qty) }] : []) : [x])));
  const toggleWish = (s: string) => setWish((w) => (w.includes(s) ? w.filter((x) => x !== s) : [...w, s]));
  const count = lines.reduce((n, l) => n + l.qty, 0);
  return <StoreCtx.Provider value={{ lines, wish, count, add, setQty, clear: () => setLines([]), toggleWish }}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const c = useContext(StoreCtx);
  if (!c) throw new Error("StoreProvider is missing");
  return c;
}

export function useCart() {
  const s = useStore();
  const rows = s.lines.flatMap((l) => {
    const p = products.find((x) => x.slug === l.slug);
    return p ? [{ ...l, p, price: priceFor("ready", l.size) }] : [];
  });
  return { ...s, rows, subtotal: rows.reduce((n, r) => n + r.price * r.qty, 0) };
}
