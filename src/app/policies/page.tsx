import PageShell from "@/components/PageShell";
import { policies } from "@/data/content";

export const metadata = { title: "Policies" };

export default function Policies() {
  return (
    <PageShell title="Policies">
      {policies.map((p) => <section key={p.t}><h2 className="h2 text-xl sm:text-2xl">{p.t}</h2><p className="mt-2 text-bone/80">{p.p}</p></section>)}
    </PageShell>
  );
}
