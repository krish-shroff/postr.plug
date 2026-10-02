type F = { label: string; name: string; type?: string; required?: boolean; area?: boolean; placeholder?: string; pattern?: string; inputMode?: "tel" | "text" | "url" };

export function Field({ label, name, type = "text", required = true, area, ...rest }: F) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}{!required && <span className="text-bone/60"> (optional)</span>}</label>
      {area
        ? <textarea id={name} name={name} required={required} rows={4} placeholder={rest.placeholder} className="input" />
        : <input id={name} name={name} type={type} required={required} className="input" {...rest} />}
    </div>
  );
}

export function Select({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
      <select id={name} name={name} className="input">{options.map((o) => <option key={o}>{o}</option>)}</select>
    </div>
  );
}
