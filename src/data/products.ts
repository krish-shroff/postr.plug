// Product catalogue. Add `image: "https://..."` to any product to replace the generated artwork.
export const categories = ["Aesthetic", "Movies", "Music", "Anime", "Gaming", "Motivational", "Educational"] as const;
export type Category = (typeof categories)[number];
export type Motif = "sun" | "peaks" | "waves" | "orbit" | "bolt" | "grid";
export type Product = {
  slug: string; title: string; category: Category; blurb: string; motif: Motif;
  colors: [string, string, string]; image?: string; bestSeller?: boolean;
};

const P = (title: string, category: Category, motif: Motif, colors: [string, string, string], blurb: string, bestSeller = false): Product =>
  ({ slug: title.toLowerCase().replace(/\W+/g, "-"), title, category, motif, colors, blurb, bestSeller });

export const products: Product[] = [
  P("Golden Hour", "Aesthetic", "sun", ["#431407", "#ea580c", "#fde68a"], "A warm, minimal sunset to soften any study wall.", true),
  P("Quiet Peaks", "Aesthetic", "peaks", ["#0f172a", "#334155", "#e2e8f0"], "Layered mountain ridges in calm midnight tones."),
  P("Night Reel", "Movies", "orbit", ["#1c1917", "#7f1d1d", "#fecaca"], "Noir cinema mood for film-night obsessives."),
  P("Last Frame", "Movies", "sun", ["#111827", "#581c87", "#f0abfc"], "A cinematic dusk with big-screen energy.", true),
  P("Vinyl Dusk", "Music", "orbit", ["#1e1b4b", "#6d28d9", "#c4b5fd"], "A glowing record spin for late-night playlists.", true),
  P("Bassline", "Music", "waves", ["#042f2e", "#0f766e", "#99f6e4"], "Flowing sound-wave layers in deep teal."),
  P("Neon Ronin", "Anime", "bolt", ["#2e1065", "#7c3aed", "#f5d0fe"], "Lone-warrior energy in an anime-inspired original design.", true),
  P("Spirit Blade", "Anime", "peaks", ["#450a0a", "#b91c1c", "#fecaca"], "A crimson ridgeline and a hero's-journey mood."),
  P("Pixel Quest", "Gaming", "grid", ["#052e16", "#15803d", "#bbf7d0"], "A retro synth grid for the level-grinders.", true),
  P("Rise Early", "Motivational", "sun", ["#1c1917", "#d97706", "#fef3c7"], "Own the morning with a bold sunrise."),
  P("Stay Hungry", "Motivational", "bolt", ["#18181b", "#c2410c", "#fed7aa"], "A lightning-bolt reminder to keep pushing."),
  P("Periodic Pulse", "Educational", "orbit", ["#082f49", "#0369a1", "#bae6fd"], "An atomic orbit that makes science look good."),
];
