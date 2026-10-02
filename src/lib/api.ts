// Backend seam. Swap the body for fetch("/api/orders", { method: "POST", body: JSON.stringify(data) }).
export async function submitForm(kind: "order" | "custom", data: Record<string, unknown>) {
  const id = "PP-" + Math.random().toString(36).slice(2, 7).toUpperCase();
  sessionStorage.setItem("postr-last", JSON.stringify({ id, kind, data }));
  return id;
}
