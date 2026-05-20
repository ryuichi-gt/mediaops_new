import Link from "next/link";
import Header from "@/components/shell/Header";
import DraftCard from "@/components/studio/DraftCard";
import drafts from "@/data/drafts.json";
import type { DraftContent } from "@/lib/types";
import { Sparkles, Plus, Filter } from "lucide-react";

export default function StudioPage() {
  const pending = (drafts as DraftContent[]).filter((d) => d.status === "pending");
  const avgScore =
    pending.length > 0
      ? Math.round(pending.reduce((s, d) => s + d.scores.avg, 0) / pending.length)
      : 0;
  const channels = Array.from(new Set(pending.map((d) => d.channelName)));

  return (
    <>
      <Header title="Content Studio" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        {/* Intro */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
              Content Studio
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              Knowledge × Trend Radar × Strategy をもとに AI が自動生成した本日のコンテンツ。
              基本は承認のみでOK。必要なら編集 / リライトで微調整。
            </p>
          </div>
          <Link
            href="/studio/new"
            className="hidden md:inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-paper-border bg-paper-card px-3 py-2 text-xs font-medium text-ink-muted hover:bg-paper"
          >
            <Plus className="h-3.5 w-3.5" /> ゼロから作成
          </Link>
        </div>

        {/* Summary strip */}
        <div className="mt-5 rounded-xl border border-paper-border bg-paper-card p-4 md:p-5">
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="uppercase tracking-wider">Today&apos;s AI batch</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-semibold tracking-tight">{pending.length}</div>
              <div className="mt-0.5 text-[11px] text-ink-muted">承認待ち</div>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">{avgScore}</div>
              <div className="mt-0.5 text-[11px] text-ink-muted">平均スコア</div>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">{channels.length}</div>
              <div className="mt-0.5 text-[11px] text-ink-muted">チャンネル</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="rounded-lg bg-ink py-2.5 text-xs font-medium text-paper hover:bg-ink/90">
              スコア95以上を一括承認 ({pending.filter((d) => d.scores.avg >= 95).length}件)
            </button>
            <button className="rounded-lg border border-paper-border bg-paper py-2.5 text-xs text-ink hover:bg-paper-border/40">
              <Filter className="mr-1 inline h-3 w-3" /> 絞り込み
            </button>
          </div>
        </div>

        {/* Approval feed */}
        <div className="mt-6 space-y-4 md:space-y-5">
          {pending.map((d) => (
            <DraftCard key={d.id} draft={d} />
          ))}
        </div>

        {/* Secondary: create from scratch (mobile) */}
        <div className="mt-8 md:hidden">
          <Link
            href="/studio/new"
            className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-paper-border bg-paper-card px-3 py-3 text-sm text-ink-muted"
          >
            <Plus className="h-3.5 w-3.5" /> ゼロから作成 (サブ機能)
          </Link>
        </div>
      </div>
    </>
  );
}
