"use client";
import { sizes, type Size } from "@/config/site";
import { inr, priceFor } from "@/lib/utils";

export default function SizePicker({ value, onChange, kind }: { value: Size; onChange: (s: Size) => void; kind: "ready" | "custom" }) {
  return (
    <div role="radiogroup" aria-label="Poster size" className="flex gap-3">
      {sizes.map((s) => (
        <button key={s} type="button" role="radio" aria-checked={value === s} onClick={() => onChange(s)}
          className={`flex-1 rounded-xl border px-4 py-3 text-left text-sm transition ${value === s ? "border-glow bg-accent/25" : "border-white/15 hover:border-white/40"}`}>
          <span className="block font-semibold">{s}</span>
          <span className="text-bone/70">{inr(priceFor(kind, s))}</span>
        </button>
      ))}
    </div>
  );
}
