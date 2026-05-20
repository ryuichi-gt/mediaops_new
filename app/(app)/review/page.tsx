import Header from "@/components/shell/Header";
import drafts from "@/data/drafts.json";
import type { DraftContent } from "@/lib/types";
import { Check, Pencil, RefreshCw } from "lucide-react";

export default function ReviewPage() {
  const pending = (drafts as DraftContent[]).filter((d) => d.status === "pending");
  return (
    <>
      <Header title="Review" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Review Queue</h1>
        <p className="mt-2 text-sm text-ink-muted">
          {pending.length} 件の承認待ち。スコア95以上はAIが自走可能、それ未満はリライトを推奨。
        </p>
        <div className="mt-6 space-y-3">
          {pending.map((d) => {
            const scoreColor =
              d.score >= 95
                ? "bg-emerald-50 text-emerald-700"
                : d.score >= 90
                ? "bg-amber-50 text-amber-700"
                : "bg-rose-50 text-rose-700";
            return (
              <div
                key={d.id}
                className="rounded-xl border border-paper-border bg-paper-card p-4 md:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-ink-muted">
                      <span>{d.channelName}</span>
                      <span className="text-ink-subtle">·</span>
                      <span>{d.platform}</span>
                    </div>
                    <h3 className="mt-1.5 text-sm font-medium leading-snug">{d.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted line-clamp-2">{d.body}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${scoreColor}`}
                  >
                    {d.score}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-paper hover:bg-ink/90">
                    <Check className="h-3 w-3" /> 承認
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-paper-border bg-paper px-3 py-1.5 text-xs text-ink hover:bg-paper-border/40">
                    <Pencil className="h-3 w-3" /> 編集
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-paper-border bg-paper px-3 py-1.5 text-xs text-ink hover:bg-paper-border/40">
                    <RefreshCw className="h-3 w-3" /> リライト
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
