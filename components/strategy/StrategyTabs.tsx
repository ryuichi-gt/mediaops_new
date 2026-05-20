import Link from "next/link";

const tabs = [
  { id: "all", label: "SympaFit", sub: "全体" },
  { id: "athlete", label: "for Athlete", sub: "サブプロダクト" },
  { id: "femtech", label: "for Femtech", sub: "サブプロダクト" },
  { id: "lifestyle", label: "Lifestyle", sub: "サブプロダクト" },
];

export default function StrategyTabs({ active }: { active: string }) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 md:-mx-8 md:px-8">
      <div className="flex gap-1.5 pb-1">
        {tabs.map((t) => {
          const isActive = t.id === active;
          const href = t.id === "all" ? "/strategy" : `/strategy?channel=${t.id}`;
          return (
            <Link
              key={t.id}
              href={href}
              className={`shrink-0 rounded-lg border px-3 py-2 text-xs transition-colors ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-paper-border bg-paper-card text-ink-muted hover:text-ink"
              }`}
            >
              <div className="font-medium">{t.label}</div>
              <div
                className={`mt-0.5 text-[10px] ${
                  isActive ? "text-paper/70" : "text-ink-subtle"
                }`}
              >
                {t.sub}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
