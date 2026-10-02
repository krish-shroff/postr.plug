import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const siteUrl = "https://postr-plug.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = ["", "/shop", "/custom", "/about", "/faq", "/contact", "/policies"];

  return [
    ...mainPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/product/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
