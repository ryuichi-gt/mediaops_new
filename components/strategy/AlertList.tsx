import { AlertTriangle, AlertCircle, Info } from "lucide-react";

type Alert = {
  id: string;
  severity: string;
  title: string;
  detail: string;
  trigger: string;
  linkedActions?: string[];
  createdAgo: string;
};

const severityMap = {
  high: { icon: AlertTriangle, cls: "text-rose-700 bg-rose-50 border-rose-100" },
  medium: { icon: AlertCircle, cls: "text-amber-700 bg-amber-50 border-amber-100" },
  low: { icon: Info, cls: "text-ink-muted bg-paper border-paper-border" },
} as const;

export default function AlertList({ alerts }: { alerts: Alert[] }) {
  if (alerts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-paper-border bg-paper-card p-5 text-sm text-ink-muted text-center">
        現在アクティブなアラートはありません
      </div>
    );
  }
  return (
    <div className="space-y-2.5">
      {alerts.map((a) => {
        const sev = severityMap[a.severity as keyof typeof severityMap] ?? severityMap.low;
        const Icon = sev.icon;
        return (
          <div key={a.id} className={`rounded-xl border p-4 ${sev.cls}`}>
            <div className="flex items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-ink leading-snug">{a.title}</div>
                  <span className="shrink-0 text-[10px] text-ink-subtle">{a.createdAgo}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink-muted">{a.detail}</p>
                <div className="mt-2 text-[10px] uppercase tracking-wider text-ink-subtle">
                  Trigger: {a.trigger}
                </div>
                {a.linkedActions && a.linkedActions.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {a.linkedActions.map((la) => (
                      <li key={la} className="text-xs text-ink">
                        → {la}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
