import { site, type Size } from "@/config/site";
export const priceFor = (kind: "ready" | "custom", size: Size) => site.prices[kind][size];
export const inr = (n: number) => `₹${n}`;
