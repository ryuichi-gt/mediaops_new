import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import type { Kpi } from "@/lib/types";

export default function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <section>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">
        This week
      </h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon =
            kpi.trend === "up" ? ArrowUpRight : kpi.trend === "down" ? ArrowDownRight : Minus;
          const trendColor =
            kpi.trend === "up"
              ? "text-emerald-600"
              : kpi.trend === "down"
              ? "text-rose-600"
              : "text-ink-subtle";
          return (
            <div
              key={kpi.label}
              className="rounded-xl border border-paper-border bg-paper-card p-4"
            >
              <div className="text-xs text-ink-muted">{kpi.label}</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">{kpi.value}</div>
              <div className={`mt-1 flex items-center gap-1 text-xs ${trendColor}`}>
                <Icon className="h-3 w-3" />
                {kpi.delta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
