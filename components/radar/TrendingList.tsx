import { TrendingUp } from "lucide-react";
import type { Trend } from "@/lib/types";

const competitionLabel: Record<Trend["competition"], { label: string; cls: string }> = {
  low: { label: "競合密度: 低", cls: "bg-emerald-50 text-emerald-700" },
  medium: { label: "競合密度: 中", cls: "bg-amber-50 text-amber-700" },
  high: { label: "競合密度: 高", cls: "bg-rose-50 text-rose-700" },
};

export default function TrendingList({ trends }: { trends: Trend[] }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-ink-muted" />
        <h3 className="text-xs font-medium uppercase tracking-wider text-ink-muted">
          Trending now
        </h3>
      </div>
      <div className="rounded-xl border border-paper-border bg-paper-card divide-y divide-paper-border">
        {trends.map((t) => {
          const comp = competitionLabel[t.competition];
          return (
            <div key={t.keyword} className="flex items-center justify-between px-4 py-3.5">
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{t.keyword}</div>
                <div className="mt-0.5 text-xs text-ink-muted">{t.volume}</div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`hidden sm:inline-block rounded-full px-2 py-0.5 text-[10px] ${comp.cls}`}
                >
                  {comp.label}
                </span>
                <span className="text-sm font-medium text-emerald-600">{t.growth}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
