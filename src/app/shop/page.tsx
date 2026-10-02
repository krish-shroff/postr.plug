import ShopClient from "@/components/ShopClient";
import { categories } from "@/data/products";

export const metadata = { title: "Shop" };

export default function Shop({ searchParams }: { searchParams: { cat?: string } }) {
  return <ShopClient initialCat={categories.find((c) => c === searchParams.cat) ?? "All"} />;
}
