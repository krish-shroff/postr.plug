// Page copy: benefits, testimonials (sample text, replace with real reviews), FAQ and policies.
import { site } from "@/config/site";
import { inr, priceFor } from "@/lib/utils";

const ready = inr(priceFor("ready", "A4"));
const custom = inr(priceFor("custom", "A4"));

export const benefits = [
  { t: "School-only convenience", d: "Made for Mahadevi Birla World Academy students, handed over on campus." },
  { t: "A4 and A3 prints", d: "Pick the size that fits your wall, desk or locker." },
  { t: `${ready} ready-made`, d: "Every ready-made poster costs the same in A4 or A3." },
  { t: `${custom} custom`, d: "Your theme, your text, either size." },
  { t: "Pay on delivery", d: "No online payment. Pay in cash when you get your poster." },
];

export const testimonials = [
  { q: "Got my Neon Ronin poster at school the next day. The colours are insane.", n: "Aarav, Class 11" },
  { q: "Ordered a custom poster for our farewell wall. It came out exactly as I described.", n: "Ishita, Class 12" },
  { q: `${ready} and pay on delivery? Easiest order I've made.`, n: "Rohan, Class 9" },
];

export const faqs = [
  { q: "How much do posters cost?", a: `Ready-made posters are ${ready} in A4 or A3. Custom posters are ${custom} in A4 or A3.` },
  { q: "Who can order?", a: "Only Mahadevi Birla World Academy students. We don't deliver anywhere outside the school." },
  { q: "How do I pay?", a: "Pay on Delivery / Cash on Delivery only. Nothing is charged online." },
  { q: "Is there a delivery fee?", a: site.shipping },
  { q: "Can I return a poster?", a: `${site.returns} Message us on WhatsApp with a photo of the problem.` },
  { q: "How do custom posters work?", a: "Fill in the custom poster form with your theme, text and references. We'll contact you on WhatsApp or email to confirm." },
];

export const policies = [
  { t: "Who can order", p: `${site.exclusive} We do not ship outside the school.` },
  { t: "Payment", p: `${site.payment}. No payment is taken on this website.` },
  { t: "Handover", p: `${site.shipping} We'll contact you on WhatsApp or email to arrange it.` },
  { t: "Returns and replacements", p: `${site.returns} Contact us with a photo of the issue.` },
];
