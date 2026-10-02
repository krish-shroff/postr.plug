import PageShell from "@/components/PageShell";
import { site } from "@/config/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    { t: "WhatsApp", v: site.phone, h: site.whatsapp },
    { t: "Email", v: site.email, h: `mailto:${site.email}` },
    ...site.instagram.map((i, k) => ({ t: k ? "Instagram (second account)" : "Instagram (main account)", v: i.handle, h: i.url })),
  ];
  return (
    <PageShell title="Contact" intro={`We're on campus at ${site.location}. Message us anytime.`}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <li key={i.h}><a href={i.h} target={i.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card block p-5 transition hover:border-glow">
            <span className="text-sm text-bone/70">{i.t}</span><span className="mt-1 block font-display text-lg font-semibold">{i.v}</span></a></li>
        ))}
      </ul>
    </PageShell>
  );
}
