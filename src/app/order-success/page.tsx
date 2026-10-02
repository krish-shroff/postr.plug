"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

export default function OrderSuccess() {
  const [id, setId] = useState("");
  useEffect(() => { try { setId(JSON.parse(sessionStorage.getItem("postr-last") || "{}").id || ""); } catch {} }, []);
  return (
    <div className="wrap max-w-xl py-20 text-center">
      <h1 className="h1">Order placed</h1>
      {id && <p className="mt-3 font-mono text-glow">Order ID: {id}</p>}
      <p className="mt-4 text-bone/80">Thank you! We'll contact you on WhatsApp or email to confirm your handover at school. You pay in cash when you receive your poster.</p>
      <p className="mt-2 text-sm text-bone/70">This is a demo storefront, so no real order was created.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="btn">Keep shopping</Link>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat on WhatsApp</a>
      </div>
    </div>
  );
}
