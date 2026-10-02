import Link from "next/link";
import { site } from "@/config/site";
import { categories, products } from "@/data/products";
import { benefits, testimonials } from "@/data/content";
import Poster from "@/components/PosterArt";

export default function Home() {
  const best = products.filter((p) => p.bestSeller).slice(0, 4);
  const goldenHour = products.find((p) => p.slug === "golden-hour")!;
  const posterFacts = [
    { number: "7", label: "poster worlds", copy: "Aesthetic, movies, music, anime, gaming, motivational and educational." },
    { number: "2", label: "sizes", copy: "A4 for desks and corners. A3 when you want the wall to notice." },
    { number: "₹90", label: "ready-made", copy: "The same simple price for an A4 or A3 ready-made poster." },
    { number: "₹100", label: "custom-made", copy: "Your idea, text and references, designed as a custom A4 or A3 print." },
  ];
  return (
    <>
      <section className="hero relative isolate overflow-hidden">
        <div aria-hidden className="hero-glow absolute inset-0" />
        <div aria-hidden className="hero-orb hero-orb-one" />
        <div aria-hidden className="hero-orb hero-orb-two" />
        <div className="wrap relative grid min-h-[620px] items-center gap-10 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div className="reveal-up">
            <p className="eyebrow mb-5"><span className="status-dot" /> Made for your kind of wall</p>
            <h1 className="font-display text-5xl font-extrabold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-8xl">Make your walls <span className="text-gradient">say something.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70 sm:text-lg">Aesthetic, anime, gaming, music and custom posters for {site.school} students. Pick your vibe, choose A4 or A3, and collect it at school.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn group">Explore the vibe <span className="ml-2 transition-transform group-hover:translate-x-1">↗</span></Link>
              <Link href="/custom" className="btn-ghost">Make it yours</Link>
            </div>
            <p className="mt-7 text-xs font-medium uppercase tracking-[.18em] text-bone/45">A4 & A3 <span className="mx-2 text-glow">✦</span> from ₹90 <span className="mx-2 text-glow">✦</span> pay at school</p>
          </div>
          <div aria-label="A preview of Postr.Plug poster designs" className="hero-posters relative mx-auto grid w-full max-w-[440px] grid-cols-2 gap-4 sm:gap-6">
            <div className="poster-float poster-float-left"><Poster p={best[0]} /></div>
            <div className="poster-float poster-float-right mt-12"><Poster p={best[2]} /></div>
            <div className="hero-sticker"><span>YOUR<br />WALL<br /><b>YOUR RULES</b></span><span className="sticker-star">✳</span></div>
          </div>
        </div>
      </section>

      <section className="wrap section-space" aria-labelledby="cats">
        <div className="section-heading reveal-up"><div><p className="eyebrow">Find your frequency</p><h2 id="cats" className="h2 mt-2">Vibe<span className="text-glow">.</span></h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-bone/55 sm:block">From quiet corners to main-character energy. There’s a poster for your space.</p></div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const p = products.find((x) => x.category === c)!;
            const n = products.filter((x) => x.category === c).length;
            return (
              <Link key={c} href={`/shop?cat=${c}`} className="vibe-card reveal-up group flex aspect-[1.22] flex-col justify-between overflow-hidden rounded-2xl p-4 sm:aspect-[1.35] sm:p-5"
                style={{ "--vibe-a": p.colors[0], "--vibe-b": p.colors[1], animationDelay: `${categories.indexOf(c) * 75}ms` } as React.CSSProperties}>
                <span className="vibe-index">0{categories.indexOf(c) + 1}<span className="float-right transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></span>
                <span><span className="block font-display text-xl font-bold text-white sm:text-2xl">{c}</span><span className="mt-1 block text-xs text-white/65">{n} {n === 1 ? "poster" : "posters"}</span></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="wrap section-space" aria-labelledby="poster-playbook">
        <div className="section-heading reveal-up"><div><p className="eyebrow">A quick poster guide</p><h2 id="poster-playbook" className="h2 mt-2">Poster playbook<span className="text-glow">.</span></h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-bone/55 sm:block">A little more useful information before you pick your next wall statement.</p></div>
        <div className="poster-facts mt-7">
          {posterFacts.map((fact, index) => <article className="poster-fact reveal-up" style={{ animationDelay: `${index * 90}ms` }} key={fact.label}>
            <p className="fact-number">{fact.number}</p><p className="fact-label">{fact.label}</p><p className="fact-copy">{fact.copy}</p>
          </article>)}
        </div>
        <div className="poster-tip mt-4 reveal-up"><span className="tip-icon">✦</span><p><b>Quick pick:</b> A4 works beautifully above a desk or inside a frame. Choose A3 for an empty wall, a bigger statement, or a room centrepiece.</p><Link href="/shop" className="see-all whitespace-nowrap">Find your vibe <span>↗</span></Link></div>
      </section>

      <section className="wrap section-space" aria-labelledby="golden-hour">
        <div className="golden-feature reveal-up">
          <div className="golden-copy">
            <p className="eyebrow"><span className="golden-dot" /> The signature print · Aesthetic</p>
            <h2 id="golden-hour" className="mt-4 font-display text-4xl font-extrabold leading-[.96] tracking-tight sm:text-6xl">Golden<br /><span>Hour.</span></h2>
            <p className="mt-5 max-w-md leading-relaxed text-bone/70">A little sunset for the space you call yours. Warm amber tones, a calm horizon, and just enough glow to make your study corner feel like a whole mood.</p>
            <div className="golden-meta mt-6"><span>Original art</span><span>A4 or A3</span><span>₹90</span></div>
            <Link href={`/product/${goldenHour.slug}`} className="btn mt-7">Meet Golden Hour <span className="ml-2">↗</span></Link>
          </div>
          <Link href={`/product/${goldenHour.slug}`} className="golden-art" aria-label="Explore the Golden Hour poster"><div className="golden-frame"><Poster p={goldenHour} /></div><span className="golden-caption">A softer kind of statement <span>✳</span></span></Link>
        </div>
      </section>

      <section className="wrap section-space" aria-labelledby="why">
        <div className="reveal-up"><p className="eyebrow">Easy as picking a playlist</p><h2 id="why" className="h2 mt-2">Good art. Easy handover<span className="text-glow">.</span></h2></div>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => <li key={b.t} className="card p-5"><h3 className="font-display font-semibold">{b.t}</h3><p className="mt-2 text-sm text-bone/75">{b.d}</p></li>)}
        </ul>
      </section>

      <section className="wrap section-space" aria-labelledby="love">
        <div className="reveal-up"><p className="eyebrow">Word on the walls</p><h2 id="love" className="h2 mt-2">What students say<span className="text-glow">.</span></h2></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => <figure key={t.n} className="quote-card card p-6"><span aria-hidden className="quote-mark">“</span><blockquote className="relative text-lg leading-snug">“{t.q}”</blockquote><figcaption className="mt-4 text-sm text-bone/60">{t.n}</figcaption></figure>)}
        </div>
      </section>

      <section className="wrap section-space pb-20" aria-labelledby="ig">
        <div className="section-heading reveal-up"><div><p className="eyebrow">Follow the feed</p><h2 id="ig" className="h2 mt-2">New drops on Instagram<span className="text-glow">.</span></h2></div></div>
        <p className="mt-3 text-sm text-bone/65">Follow {site.instagram.map((i, k) => <span key={i.url}>{k > 0 && " and "}<a href={i.url} target="_blank" rel="noopener noreferrer" className="text-glow underline underline-offset-4">{i.handle}</a></span>)}.</p>
        <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-6">
          {products.slice(0, 6).map((p, i) => <a key={p.slug} className="insta-tile" style={{ animationDelay: `${i * 70}ms` }} href={site.instagram[0].url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on Instagram`}><Poster p={p} /></a>)}
        </div>
      </section>
    </>
  );
}
