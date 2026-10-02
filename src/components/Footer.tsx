import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-12 text-sm text-bone/75">
      <div className="wrap grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-bone">{site.name}</p>
          <p className="mt-2">{site.tagline}</p>
          <p className="mt-2">{site.location}</p>
        </div>
        <div>
          <p className="font-semibold text-bone">Contact</p>
          <ul className="mt-2 space-y-1">
            <li><a href={site.whatsapp}>WhatsApp {site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.instagram.map((i) => <li key={i.url}><a href={i.url} target="_blank" rel="noopener noreferrer">Instagram {i.handle}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-bone">Good to know</p>
          <ul className="mt-2 space-y-1">
            <li>{site.payment}</li>
            <li>{site.returns}</li>
            <li><Link href="/policies">Read the policies</Link></li>
          </ul>
        </div>
      </div>
      <p className="wrap mt-8 text-xs">© {new Date().getFullYear()} {site.name}. Exclusive to {site.school} students.</p>
    </footer>
  );
}
