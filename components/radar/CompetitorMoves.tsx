import { Eye } from "lucide-react";
import type { CompetitorMove } from "@/lib/types";

const impactLabel: Record<CompetitorMove["impact"], { label: string; cls: string }> = {
  low: { label: "影響: 小", cls: "bg-paper-border text-ink-muted" },
  medium: { label: "影響: 中", cls: "bg-amber-50 text-amber-700" },
  high: { label: "影響: 大", cls: "bg-rose-50 text-rose-700" },
};

export default function CompetitorMoves({ moves }: { moves: CompetitorMove[] }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <Eye className="h-4 w-4 text-ink-muted" />
        <h3 className="text-xs font-medium uppercase tracking-wider text-ink-muted">
          Competitor moves
        </h3>
      </div>
      <div className="space-y-2.5">
        {moves.map((m, i) => {
          const imp = impactLabel[m.impact];
          return (
            <div key={i} className="rounded-xl border border-paper-border bg-paper-card p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{m.competitor}</span>
                  <span className="text-xs text-ink-subtle">·</span>
                  <span className="text-xs text-ink-muted">{m.action}</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] ${imp.cls}`}>
                  {imp.label}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">{m.detail}</p>
              <div className="mt-2 text-[11px] text-ink-subtle">{m.timeAgo}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
