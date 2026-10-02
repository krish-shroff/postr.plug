// Central business config: edit details, prices, links and policies here.
export const sizes = ["A4", "A3"] as const;
export type Size = (typeof sizes)[number];

export const site = {
  name: "Postr.Plug",
  tagline: "Make your walls say something.",
  school: "Mahadevi Birla World Academy",
  location: "Mahadevi Birla World Academy, Kolkata, Darga Road",
  phone: "+91 8336992705",
  whatsapp: "https://wa.me/918336992705",
  email: "krish03shroff@gmail.com",
  instagram: [
    { handle: "@wavedstr_14", url: "https://instagram.com/wavedstr_14" },
    { handle: "@devesh.mundhra02", url: "https://instagram.com/devesh.mundhra02" },
  ],
  // Fixed prices in rupees, per kind and size.
  prices: { ready: { A4: 90, A3: 90 }, custom: { A4: 100, A3: 100 } } as Record<"ready" | "custom", Record<Size, number>>,
  handover: ["Collect from the Postr.Plug team at school", "Hand it over to me at school"],
  payment: "Pay on Delivery / Cash on Delivery",
  shipping: "No shipping fee. Orders are collected or delivered within the school only.",
  returns: "No returns. Replacement is available only for damaged or defective prints.",
  exclusive: "Orders are exclusive to Mahadevi Birla World Academy students and paid on delivery.",
  nav: [["Vibe", "/shop"], ["Custom", "/custom"], ["About", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"]],
};
