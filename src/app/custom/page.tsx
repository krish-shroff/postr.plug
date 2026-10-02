"use client";
import { useState } from "react";
import { site, type Size } from "@/config/site";
import { categories } from "@/data/products";
import { inr, priceFor } from "@/lib/utils";
import { submitForm } from "@/lib/api";
import { Field, Select } from "@/components/Fields";
import SizePicker from "@/components/SizePicker";

export default function CustomPage() {
  const [size, setSize] = useState<Size>("A4");
  const [id, setId] = useState("");
  const price = priceFor("custom", size);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setId(await submitForm("custom", { ...Object.fromEntries(new FormData(form)), size, price }));
    form.reset();
  }

  return (
    <div className="wrap max-w-3xl py-12 sm:py-16">
      <h1 className="h1">Custom Poster — {inr(price)}</h1>
      <p className="mt-4 text-lg text-bone/75">Tell us your idea and we'll design it. Same price in A4 or A3. {site.exclusive}</p>
      <div className="mt-6 max-w-sm"><SizePicker kind="custom" value={size} onChange={setSize} /></div>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" />
        <Field label="Class / section" name="class" />
        <Field label="Mobile number" name="mobile" type="tel" inputMode="tel" pattern="[0-9]{10}" placeholder="10-digit number" />
        <Field label="Email" name="email" type="email" />
        <Select label="Theme" name="theme" options={[...categories, "Something else"]} />
        <Select label="School handover preference" name="handover" options={site.handover} />
        <div className="sm:col-span-2"><Field label="Text on the poster" name="text" area required={false} placeholder="Quote, name or date you want printed" /></div>
        <div className="sm:col-span-2"><Field label="Reference link" name="reference" type="url" inputMode="url" required={false} placeholder="https://" /></div>
        <div className="sm:col-span-2"><Field label="Design notes" name="notes" area required={false} placeholder="Colours, mood, layout ideas" /></div>
        <div className="flex flex-wrap gap-3 sm:col-span-2">
          <button className="btn">Request custom poster, {inr(price)}</button>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat on WhatsApp</a>
        </div>
        {id && <p role="status" className="card p-4 sm:col-span-2">Request {id} received. We'll contact you on WhatsApp or email. {site.payment}. {site.returns}</p>}
      </form>
    </div>
  );
}
