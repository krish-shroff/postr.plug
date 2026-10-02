"use client";
import Link from "next/link";
import { useCart } from "@/lib/store";
import { site } from "@/config/site";
import { inr } from "@/lib/utils";
import Poster from "@/components/PosterArt";
import Qty from "@/components/Qty";

export default function CartPage() {
  const { rows, subtotal, setQty } = useCart();
  return (
    <div className="wrap py-12">
      <h1 className="h1">Your cart</h1>
      {!rows.length ? (
        <div className="mt-8"><p className="text-bone/75">Your cart is empty. Pick a poster to get started.</p><Link href="/shop" className="btn mt-4">Browse posters</Link></div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]">
          <ul className="space-y-4">
            {rows.map((r) => (
              <li key={r.slug + r.size} className="card flex items-center gap-4 p-3">
                <div className="w-20 shrink-0"><Poster p={r.p} /></div>
                <div className="flex-1">
                  <Link href={`/product/${r.slug}`} className="font-display font-semibold">{r.p.title}</Link>
                  <p className="text-sm text-bone/70">{r.size}, {inr(r.price)} each</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <Qty label={`Quantity for ${r.p.title}`} value={r.qty} onChange={(n) => setQty(r.slug, r.size, n)} />
                    <button className="text-sm text-bone/70 underline" onClick={() => setQty(r.slug, r.size, 0)}>Remove</button>
                  </div>
                </div>
                <p className="font-semibold">{inr(r.price * r.qty)}</p>
              </li>
            ))}
          </ul>
          <aside className="card h-fit space-y-3 p-5">
            <p className="flex justify-between"><span>Subtotal</span><b>{inr(subtotal)}</b></p>
            <p className="text-sm text-bone/70">No shipping fee. {site.payment}.</p>
            <Link href="/checkout" className="btn w-full">Go to checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
