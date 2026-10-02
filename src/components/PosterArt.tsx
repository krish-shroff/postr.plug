import type { Motif, Product } from "@/data/products";

const shapes = (c: string, a: string): Record<Motif, JSX.Element> => ({
  sun: <><circle cx="150" cy="180" r="75" fill={c} /><path d="M0 250h300v150H0z" fill={a} opacity=".55" /></>,
  peaks: <path d="M0 340l80-140 50 70 70-130 100 200v60H0z" fill={c} opacity=".9" />,
  waves: <>{[0, 40, 80].map((y) => <path key={y} d={`M0 ${220 + y}q75-50 150 0t150 0v200H0z`} fill={c} opacity={0.25 + y / 200} />)}</>,
  orbit: <><circle cx="150" cy="180" r="100" fill="none" stroke={c} strokeWidth="3" /><circle cx="150" cy="180" r="48" fill={c} /><circle cx="250" cy="180" r="12" fill="#fff" /></>,
  bolt: <polygon points="175,50 85,215 150,215 120,340 225,160 160,160" fill={c} />,
  grid: <><circle cx="150" cy="170" r="65" fill={c} /><path d="M0 260h300M0 300h300M0 340h300M150 260v140M75 260L-40 400M225 260l115 140" stroke={c} strokeWidth="2" fill="none" /></>,
});

function Art({ p }: { p: Product }) {
  const [a, b, c] = p.colors;
  const id = `g-${p.slug}`;
  const font = "system-ui,sans-serif";
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${p.title}, original ${p.category} poster art`} className="block h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".75" /></linearGradient>
      </defs>
      <rect width="300" height="400" fill={`url(#${id})`} />
      {shapes(c, a)[p.motif]}
      <rect width="300" height="400" fill={`url(#${id}-f)`} />
      <text x="24" y="356" fill="#fff" fontSize="24" fontWeight="700" fontFamily={font}>{p.title.toUpperCase()}</text>
      <text x="24" y="378" fill="#fff" opacity=".7" fontSize="10" letterSpacing="3" fontFamily={font}>{p.category.toUpperCase()} POSTER</text>
    </svg>
  );
}

// variant 0 = front, 1 = close-up, 2 = framed on a wall (used by the product gallery)
export default function Poster({ p, variant = 0 }: { p: Product; variant?: number }) {
  const art = p.image
    ? <img src={p.image} alt={`${p.title} poster`} loading="lazy" className="h-full w-full object-cover" />
    : <Art p={p} />;
  if (variant === 2)
    return <div className="grid aspect-[3/4] place-items-center rounded-xl bg-gradient-to-b from-stone-700 to-stone-900"><div className="aspect-[3/4] w-3/5 overflow-hidden shadow-2xl ring-4 ring-black/70">{art}</div></div>;
  return (
    <div className="poster-image aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900">
      <div className="h-full w-full" style={variant === 1 ? { transform: "scale(1.8) translate(-8%,-14%)", transformOrigin: "50% 40%" } : undefined}>{art}</div>
    </div>
  );
}
