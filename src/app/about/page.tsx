import PageShell from "@/components/PageShell";
import { site } from "@/config/site";
import { categories } from "@/data/products";

export const metadata = { title: "About" };

export default function About() {
  return (
    <PageShell title="About Postr.Plug" intro={site.tagline}>
      <p className="text-bone/80">Postr.Plug makes posters for students of {site.school}. Pick from ready-made art or send us your own idea, and collect it without leaving school.</p>
      <p className="text-bone/80">We print {categories.join(", ").toLowerCase()} posters in A4 and A3. {site.shipping}</p>
      <p className="text-bone/80">{site.payment}. {site.returns}</p>
    </PageShell>
  );
}
