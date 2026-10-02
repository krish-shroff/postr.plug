"use client";
export default function Qty({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="inline-flex items-center rounded-full border border-white/25">
      <button type="button" aria-label="Decrease quantity" className="h-10 w-10 text-lg" onClick={() => onChange(value - 1)}>−</button>
      <span aria-live="polite" className="w-8 text-center text-sm">{value}</span>
      <button type="button" aria-label="Increase quantity" className="h-10 w-10 text-lg" onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
