import { Check, Pencil, RefreshCw, X, Calendar, Sparkles, BookOpen, TrendingUp, Target } from "lucide-react";
import type { DraftContent } from "@/lib/types";

function formatSchedule(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const wd = ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
  return `${month}/${day}(${wd}) ${hh}:${mm}`;
}

function scoreClass(score: number) {
  if (score >= 95) return "bg-emerald-50 text-emerald-700 border-emerald-100";
  if (score >= 90) return "bg-amber-50 text-amber-700 border-amber-100";
  return "bg-rose-50 text-rose-700 border-rose-100";
}

export default function DraftCard({ draft }: { draft: DraftContent }) {
  const avgClass = scoreClass(draft.scores.avg);
  return (
    <article className="rounded-2xl border border-paper-border bg-paper-card overflow-hidden">
      {/* Top meta */}
      <div className="flex items-center justify-between gap-2 border-b border-paper-border px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-accent">
            <Sparkles className="h-3 w-3" /> AI生成
          </span>
          <span className="text-ink-muted">{draft.channelName}</span>
          <span className="text-ink-subtle">·</span>
          <span className="text-ink-muted">{draft.platform}</span>
          {draft.format && (
            <>
              <span className="text-ink-subtle">·</span>
              <span className="text-ink-muted">{draft.format}</span>
            </>
          )}
        </div>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${avgClass}`}>
          {draft.scores.avg}
        </span>
      </div>

      {/* Body */}
      <div className="px-4 py-4 md:px-5 md:py-5">
        <h3 className="text-base font-semibold leading-snug md:text-[17px]">{draft.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted whitespace-pre-line">
          {draft.body}
        </p>

        {draft.tags && draft.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {draft.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-paper px-2 py-0.5 text-[11px] text-ink-muted border border-paper-border"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* AI score breakdown */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-md bg-paper px-2 py-1.5">
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Claude</div>
            <div className="text-sm font-medium">{draft.scores.claude}</div>
          </div>
          <div className="rounded-md bg-paper px-2 py-1.5">
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">GPT-4o</div>
            <div className="text-sm font-medium">{draft.scores.gpt4o}</div>
          </div>
          <div className="rounded-md bg-paper px-2 py-1.5">
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Gemini</div>
            <div className="text-sm font-medium">{draft.scores.gemini}</div>
          </div>
        </div>

        {/* Rationale */}
        {draft.rationale && (
          <div className="mt-4 rounded-lg border border-paper-border bg-paper p-3 space-y-2 text-xs">
            <div className="text-[10px] uppercase tracking-wider text-ink-subtle">
              AIによる推薦理由
            </div>
            <div className="flex items-start gap-2">
              <BookOpen className="mt-0.5 h-3 w-3 shrink-0 text-ink-muted" />
              <div className="text-ink-muted">
                <span className="text-ink">Knowledge: </span>
                {draft.rationale.knowledge}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-3 w-3 shrink-0 text-ink-muted" />
              <div className="text-ink-muted">
                <span className="text-ink">Trend: </span>
                {draft.rationale.trend}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Target className="mt-0.5 h-3 w-3 shrink-0 text-ink-muted" />
              <div className="text-ink-muted">
                <span className="text-ink">Strategy: </span>
                {draft.rationale.strategy}
              </div>
            </div>
          </div>
        )}

        {/* Schedule */}
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
          <Calendar className="h-3.5 w-3.5" />
          推奨スケジュール:
          <span className="text-ink">{formatSchedule(draft.scheduledAt)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-4 border-t border-paper-border divide-x divide-paper-border">
        <button className="flex items-center justify-center gap-1.5 bg-ink py-3 text-xs font-medium text-paper hover:bg-ink/90">
          <Check className="h-3.5 w-3.5" /> 承認
        </button>
        <button className="flex items-center justify-center gap-1.5 py-3 text-xs text-ink hover:bg-paper">
          <Pencil className="h-3.5 w-3.5" /> 編集
        </button>
        <button className="flex items-center justify-center gap-1.5 py-3 text-xs text-ink hover:bg-paper">
          <RefreshCw className="h-3.5 w-3.5" /> リライト
        </button>
        <button className="flex items-center justify-center gap-1.5 py-3 text-xs text-ink-muted hover:bg-paper">
          <X className="h-3.5 w-3.5" /> 却下
        </button>
      </div>
    </article>
  );
}
