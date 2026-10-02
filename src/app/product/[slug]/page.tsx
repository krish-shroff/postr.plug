import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductView from "@/components/ProductView";
import ProductCard from "@/components/ProductCard";

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return { title: products.find((x) => x.slug === params.slug)?.title ?? "Poster" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.category === p.category) - Number(a.category === p.category)).slice(0, 4);
  return (
    <>
      <ProductView p={p} />
      <section className="wrap mt-16" aria-labelledby="rel">
        <h2 id="rel" className="h2">You might also like</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
      </section>
    </>
  );
}
