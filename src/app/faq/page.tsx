import PageShell from "@/components/PageShell";
import { faqs } from "@/data/content";

export const metadata = { title: "FAQ" };

export default function FAQ() {
  return (
    <PageShell title="Frequently asked questions">
      {faqs.map((f) => (
        <details key={f.q} className="card p-5">
          <summary className="cursor-pointer font-medium">{f.q}</summary>
          <p className="mt-3 text-bone/80">{f.a}</p>
        </details>
      ))}
    </PageShell>
  );
}
