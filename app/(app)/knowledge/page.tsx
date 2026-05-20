import Header from "@/components/shell/Header";
import knowledge from "@/data/knowledge.json";
import tenant from "@/data/tenant.json";
import { BookOpen, Users, Boxes, Target, FlaskConical } from "lucide-react";

export default function KnowledgePage() {
  return (
    <>
      <Header title="Knowledge" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10 space-y-8">
        <div>
          <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Knowledge Base</h1>
          <p className="mt-2 text-sm text-ink-muted">
            {tenant.name} のブランド理解。AIが自動抽出した知識をここで補正/拡張すると、
            Studio / Strategy / Trend Radar の出力に即座に反映される。
          </p>
        </div>

        {/* Brand */}
        <section className="rounded-xl border border-paper-border bg-paper-card p-5">
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <BookOpen className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Brand</span>
          </div>
          <div className="mt-3 text-lg font-medium leading-snug">{tenant.tagline}</div>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <div className="text-xs text-ink-subtle">Mission</div>
              <div className="mt-0.5 text-ink">{knowledge.brand.mission}</div>
            </div>
            <div>
              <div className="text-xs text-ink-subtle">Vision</div>
              <div className="mt-0.5 text-ink">{knowledge.brand.vision}</div>
            </div>
            <div>
              <div className="text-xs text-ink-subtle">Values</div>
              <ul className="mt-1 space-y-1 text-ink">
                {knowledge.brand.values.map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-paper-border bg-paper p-4">
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Brand voice</div>
            <p className="mt-1.5 text-sm text-ink">{knowledge.brand.voice.tone}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-ink-subtle">使う言葉</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {knowledge.brand.voice.lexicon.map((w) => (
                    <span key={w} className="rounded bg-accent-soft px-1.5 py-0.5 text-[11px] text-accent">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-ink-subtle">避ける表現</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {knowledge.brand.voice.avoid.map((w) => (
                    <span key={w} className="rounded bg-rose-50 px-1.5 py-0.5 text-[11px] text-rose-700">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personas */}
        <section>
          <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
            <Users className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Personas</span>
          </div>
          <div className="space-y-3">
            {knowledge.personas.map((p) => (
              <div key={p.name} className="rounded-xl border border-paper-border bg-paper-card p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] text-ink-muted border border-paper-border">
                    {p.channel}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-muted">{p.summary}</p>
                <div className="mt-3 text-[10px] uppercase tracking-wider text-ink-subtle">Pains</div>
                <ul className="mt-1 space-y-0.5 text-sm text-ink">
                  {p.pains.map((pn) => (
                    <li key={pn}>· {pn}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section>
          <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
            <Boxes className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Products</span>
          </div>
          <div className="space-y-2">
            {knowledge.products.map((p) => (
              <div key={p.name} className="rounded-xl border border-paper-border bg-paper-card p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <span className="shrink-0 text-xs text-ink-muted">{p.price}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink-muted">{p.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competitors */}
        <section>
          <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
            <Target className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Competitors</span>
          </div>
          <div className="space-y-2">
            {knowledge.competitors.map((c) => (
              <div key={c.name} className="rounded-xl border border-paper-border bg-paper-card p-4">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="mt-1 text-xs text-ink-muted">{c.position}</div>
                <div className="mt-2 rounded-md bg-accent-soft px-3 py-2 text-xs text-ink">
                  <span className="font-medium text-accent">差別化軸: </span>
                  {c.diff}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Science core */}
        <section>
          <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
            <FlaskConical className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">Science Core</span>
          </div>
          <div className="rounded-xl border border-paper-border bg-paper-card p-5">
            <ul className="space-y-2.5 text-sm">
              {knowledge.scienceCore.map((s) => (
                <li key={s} className="flex items-start gap-2 text-ink">
                  <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
