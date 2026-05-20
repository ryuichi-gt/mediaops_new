import Header from "@/components/shell/Header";

export default function PagePlaceholder({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: { title: string; body: string }[];
}) {
  return (
    <>
      <Header title={title} />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <div className="rounded-xl border border-dashed border-paper-border bg-paper-card p-5 md:p-7">
          <div className="text-xs uppercase tracking-wider text-ink-subtle">Coming soon</div>
          <h1 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">{title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>
        </div>
        <div className="mt-6 space-y-3">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-paper-border bg-paper-card p-4"
            >
              <div className="text-sm font-medium">{s.title}</div>
              <div className="mt-1.5 text-sm text-ink-muted">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
