import Header from "@/components/shell/Header";
import StrategyTabs from "@/components/strategy/StrategyTabs";
import AlertList from "@/components/strategy/AlertList";
import strategy from "@/data/strategy.json";
import {
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Layers,
  Search,
  Target,
  Users,
  BarChart3,
} from "lucide-react";

const channelKeys = ["athlete", "femtech", "lifestyle"] as const;
type ChannelKey = (typeof channelKeys)[number];

function isChannelKey(v: string | undefined): v is ChannelKey {
  return v === "athlete" || v === "femtech" || v === "lifestyle";
}

const channelLabel: Record<ChannelKey, string> = {
  athlete: "for Athlete",
  femtech: "for Femtech",
  lifestyle: "Lifestyle",
};

export default function StrategyPage({
  searchParams,
}: {
  searchParams: { channel?: string };
}) {
  const active = isChannelKey(searchParams.channel) ? searchParams.channel : "all";

  return (
    <>
      <Header title="Strategy" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Strategy Board</h1>
        <p className="mt-2 text-sm text-ink-muted">
          ブランド全体の戦略と、サブプロダクトごとの個別戦略を切り替えて確認。
          アラートはスコープごとに自動振り分けされる。
        </p>

        <div className="mt-5">
          <StrategyTabs active={active} />
        </div>

        {active === "all" ? <UmbrellaView /> : <ChannelView channelKey={active} />}
      </div>
    </>
  );
}

function UmbrellaView() {
  const s = strategy.umbrella;
  const umbrellaAlerts = s.alerts.filter((a) => a.scope === "umbrella");
  return (
    <div className="mt-8 space-y-10">
      {/* Active alerts (umbrella + all combined for context) */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Active alerts (umbrella)</span>
          <span className="text-ink-subtle">·</span>
          <span>{umbrellaAlerts.length} 件</span>
        </div>
        <AlertList alerts={umbrellaAlerts} />
      </section>

      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <Layers className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">SWOT</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { label: "Strengths", items: s.swot.strengths, tint: "emerald" },
            { label: "Weaknesses", items: s.swot.weaknesses, tint: "rose" },
            { label: "Opportunities", items: s.swot.opportunities, tint: "sky" },
            { label: "Threats", items: s.swot.threats, tint: "amber" },
          ].map((b) => (
            <div key={b.label} className="rounded-xl border border-paper-border bg-paper-card p-4">
              <div
                className={`text-[10px] uppercase tracking-wider ${
                  b.tint === "emerald"
                    ? "text-emerald-700"
                    : b.tint === "rose"
                    ? "text-rose-700"
                    : b.tint === "sky"
                    ? "text-sky-700"
                    : "text-amber-700"
                }`}
              >
                {b.label}
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-ink">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-ink-subtle shrink-0" />
                    <span className="leading-snug text-ink-muted">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <Lightbulb className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Content strategy</span>
          <span className="text-ink-subtle">·</span>
          <span>{s.contentStrategy.quarterly.label}</span>
        </div>
        <div className="rounded-xl border border-paper-border bg-paper-card p-5">
          <div className="text-sm font-medium leading-snug">
            {s.contentStrategy.quarterly.theme}
          </div>
          <div className="mt-4 space-y-2">
            {s.contentStrategy.quarterly.pillars.map((p) => (
              <div key={p.name} className="rounded-lg border border-paper-border bg-paper p-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span>{p.channel}</span>
                    <span className="text-ink-subtle">·</span>
                    <span>{p.share}</span>
                  </div>
                </div>
                <div className="mt-1.5 text-xs text-ink-muted">KPI: {p.kpi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <TrendingUp className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">SNS strategy</span>
        </div>
        <div className="rounded-xl border border-paper-border bg-paper-card divide-y divide-paper-border">
          {s.snsStrategy.map((sn) => (
            <div key={sn.platform} className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">{sn.platform}</div>
                <div className="text-xs text-ink-muted">{sn.cadence}</div>
              </div>
              <div className="mt-1.5 text-sm text-ink-muted">{sn.objective}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                {sn.channels.map((c) => (
                  <span
                    key={c}
                    className="rounded bg-paper px-1.5 py-0.5 text-[11px] text-ink-muted border border-paper-border"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <Search className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">SEO / GEO strategy</span>
        </div>
        <div className="rounded-xl border border-paper-border bg-paper-card p-5">
          <div className="text-[10px] uppercase tracking-wider text-ink-subtle">
            Primary keyword targets
          </div>
          <div className="mt-2 space-y-2">
            {s.seoStrategy.primaryTargets.map((t) => (
              <div key={t.keyword} className="flex items-center justify-between gap-2 text-sm">
                <span className="truncate">{t.keyword}</span>
                <span className="shrink-0 text-xs text-ink-muted">
                  現在 {t.currentRank}位 → 目標 {t.goal}位
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 text-[10px] uppercase tracking-wider text-ink-subtle">
            Generative AI search targets
          </div>
          <ul className="mt-2 space-y-1 text-sm text-ink-muted">
            {s.seoStrategy.geoTargets.map((g) => (
              <li key={g}>· {g}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function ChannelView({ channelKey }: { channelKey: ChannelKey }) {
  const data = strategy.byChannel[channelKey];
  const label = channelLabel[channelKey];
  const channelAlerts = strategy.umbrella.alerts.filter((a) => a.scope === channelKey);
  const threatClass: Record<string, string> = {
    high: "text-rose-700 bg-rose-50",
    medium: "text-amber-700 bg-amber-50",
    low: "text-emerald-700 bg-emerald-50",
  };

  return (
    <div className="mt-8 space-y-10">
      {/* Positioning */}
      <section className="rounded-xl border border-paper-border bg-paper-card p-5">
        <div className="text-xs text-ink-muted">
          <span className="uppercase tracking-wider">SympaFit {label}</span>
          <span className="text-ink-subtle"> · </span>
          <span>Positioning</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink">{data.positioning}</p>
      </section>

      {/* Audience */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <Users className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Audience</span>
        </div>
        <div className="rounded-xl border border-paper-border bg-paper-card p-5 space-y-3 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Primary</div>
            <div className="mt-0.5 text-ink">{data.audience.primary}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Secondary</div>
            <div className="mt-0.5 text-ink-muted">{data.audience.secondary}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">市場規模</div>
            <div className="mt-0.5 text-ink">{data.audience.size}</div>
          </div>
        </div>
      </section>

      {/* Alerts scoped to this channel */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Channel alerts</span>
          <span className="text-ink-subtle">·</span>
          <span>{channelAlerts.length} 件</span>
        </div>
        <AlertList alerts={channelAlerts} />
      </section>

      {/* Competitors */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <Target className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Competitors (channel-specific)</span>
        </div>
        <div className="space-y-2">
          {data.competitors.map((c) => (
            <div key={c.name} className="rounded-xl border border-paper-border bg-paper-card p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">{c.name}</div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    threatClass[c.threat] ?? "bg-paper text-ink-muted"
                  }`}
                >
                  脅威: {c.threat}
                </span>
              </div>
              <div className="mt-2 text-xs text-ink-muted">{c.diff}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content pillars */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <Lightbulb className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Content pillars</span>
        </div>
        <div className="rounded-xl border border-paper-border bg-paper-card divide-y divide-paper-border">
          {data.pillars.map((p) => (
            <div key={p.name} className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-medium">{p.name}</div>
                <div className="text-xs text-ink-muted">{p.share}</div>
              </div>
              <div className="mt-1 text-xs text-ink-muted">KPI: {p.kpi}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SNS strategy (channel-specific) */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <TrendingUp className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">SNS strategy</span>
        </div>
        <div className="rounded-xl border border-paper-border bg-paper-card divide-y divide-paper-border">
          {data.snsStrategy.map((s) => (
            <div key={s.platform} className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">{s.platform}</div>
                <div className="text-xs text-ink-muted">{s.cadence}</div>
              </div>
              <div className="mt-1.5 text-sm text-ink-muted">{s.objective}</div>
            </div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
          <BarChart3 className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">KPIs</span>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {data.kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-paper-border bg-paper-card p-4">
              <div className="text-xs text-ink-muted">{k.label}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">{k.current}</div>
              <div className="mt-1 text-[11px] text-ink-subtle">目標: {k.goal}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
