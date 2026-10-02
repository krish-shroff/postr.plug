"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/store";
import { site } from "@/config/site";
import { inr } from "@/lib/utils";
import { submitForm } from "@/lib/api";
import { Field, Select } from "@/components/Fields";

export default function Checkout() {
  const { rows, subtotal, clear } = useCart();
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await submitForm("order", { ...data, items: rows.map(({ slug, size, qty, price }) => ({ slug, size, qty, price })), total: subtotal, payment: site.payment });
    clear();
    router.push("/order-success");
  }

  if (!rows.length && !busy)
    return <div className="wrap py-12"><h1 className="h1">Checkout</h1><p className="mt-4 text-bone/75">Your cart is empty.</p><Link href="/shop" className="btn mt-4">Browse posters</Link></div>;

  return (
    <div className="wrap py-12">
      <h1 className="h1">Checkout</h1>
      <p className="mt-3 max-w-xl text-bone/75">{site.exclusive} There is no home address and no shipping charge.</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="name" />
          <Field label="Class / section" name="class" placeholder="For example 11-B" />
          <Field label="Mobile number" name="mobile" type="tel" inputMode="tel" pattern="[0-9]{10}" placeholder="10-digit number" />
          <Field label="Email" name="email" type="email" />
          <div className="sm:col-span-2"><Select label="School handover preference" name="handover" options={site.handover} /></div>
          <div className="sm:col-span-2"><Field label="Order note" name="note" area required={false} placeholder="Anything we should know?" /></div>
        </div>
        <aside className="card h-fit space-y-3 p-5">
          <h2 className="font-display font-semibold">Order summary</h2>
          {rows.map((r) => <p key={r.slug + r.size} className="flex justify-between gap-3 text-sm"><span>{r.p.title} ({r.size}) × {r.qty}</span><span>{inr(r.price * r.qty)}</span></p>)}
          <p className="flex justify-between border-t border-white/10 pt-3 font-semibold"><span>Total</span><span>{inr(subtotal)}</span></p>
          <p className="text-sm">Payment method: {site.payment}</p>
          <p className="text-xs text-bone/70">{site.returns}</p>
          <button className="btn w-full" disabled={busy}>{busy ? "Placing order" : "Place order"}</button>
        </aside>
      </form>
    </div>
  );
}
