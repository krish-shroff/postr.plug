# Postr.Plug storefront

Next.js 14 (App Router) + TypeScript + Tailwind. Demo storefront for Mahadevi Birla World Academy students, pay on delivery only.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit without touching components
| What | File |
|---|---|
| Contact details, socials, prices (per kind and size), policies text, nav | `src/config/site.ts` |
| Products, categories, image URLs (`image: "https://..."`) | `src/data/products.ts` |
| Benefits, testimonials, FAQ, policies copy | `src/data/content.ts` |
| Colours and fonts | `tailwind.config.ts`, `src/app/layout.tsx` |

Products without `image` use generated original SVG artwork (no copyrighted assets).

## Structure
- `src/app/*` pages: home, shop, product/[slug], cart, checkout, order-success, custom, about, contact, faq, policies
- `src/components/*` Header, Footer, ProductCard, ProductView, ShopClient, SizePicker, Qty, Fields, PageShell, PosterArt
- `src/lib/store.tsx` cart and wishlist (localStorage), `src/lib/api.ts` form submission

## Connecting a backend
Replace the body of `submitForm` in `src/lib/api.ts` with a `fetch` to your API (orders and custom requests both go through it). Cart state stays client-side until then.
