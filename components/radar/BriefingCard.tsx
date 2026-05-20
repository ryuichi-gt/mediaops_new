import { Sparkles, ArrowRight } from "lucide-react";
import type { Briefing } from "@/lib/types";

export default function BriefingCard({ briefing }: { briefing: Briefing }) {
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="flex items-center gap-2 text-xs text-ink-muted">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span className="uppercase tracking-wider">AI CMO Briefing</span>
        <span className="text-ink-subtle">·</span>
        <span>{briefing.weekLabel}</span>
      </div>
      <h2 className="mt-3 text-lg leading-snug font-medium tracking-tight md:text-xl">
        {briefing.headline}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-[15px]">
        {briefing.summary}
      </p>
      <div className="mt-5 space-y-2">
        {briefing.recommendedActions.map((action, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg border border-paper-border bg-paper px-4 py-3"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[11px] font-medium text-accent">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-ink">{action}</span>
          </div>
        ))}
      </div>
      <button className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
        戦略に反映する <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </section>
  );
}
