import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/shell/Header";
import DraftThumb from "@/components/studio/DraftThumb";
import InlineFigure from "@/components/studio/InlineFigure";
import drafts from "@/data/drafts.json";
import type { DraftContent } from "@/lib/types";
import {
  ArrowLeft,
  Check,
  Pencil,
  RefreshCw,
  X,
  Calendar,
  Sparkles,
  BookOpen,
  TrendingUp,
  Target,
  Hash,
} from "lucide-react";

export function generateStaticParams() {
  return (drafts as DraftContent[]).map((d) => ({ id: d.id }));
}

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

export default function DraftDetailPage({ params }: { params: { id: string } }) {
  const draft = (drafts as DraftContent[]).find((d) => d.id === params.id);
  if (!draft) notFound();

  const avgClass = scoreClass(draft.scores.avg);
  const paragraphs = draft.body.split(/\n+/).filter(Boolean);
  const figures = draft.inlineImages ?? [];
  // Interleave: paragraph -> (figure if available) -> next paragraph ...
  const blocks: { type: "p"; text: string; key: string }[] = paragraphs.map((p, i) => ({
    type: "p",
    text: p,
    key: `p-${i}`,
  }));
  const figureAfter: Record<number, number> = {};
  figures.forEach((_, idx) => {
    const after = Math.min(idx + 1, blocks.length - 1);
    figureAfter[after] = idx;
  });

  return (
    <>
      <Header title="Content" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <Link
          href="/studio"
          className="inline-flex items-center gap-1 text-xs text-ink-muted hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3" /> Studio に戻る
        </Link>

        {/* Hero */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-paper-border">
          <DraftThumb
            channelId={draft.channelId}
            title={draft.title}
            tags={draft.tags}
            size="lg"
          />
        </div>

        {/* Meta strip */}
        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
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
          <span className={`ml-auto shrink-0 rounded-full border px-2 py-0.5 font-medium ${avgClass}`}>
            avg {draft.scores.avg}
          </span>
        </div>

        {/* Title (full) */}
        <h1 className="mt-4 text-xl font-semibold tracking-tight leading-snug md:text-2xl">
          {draft.title}
        </h1>

        {/* Schedule */}
        <div className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
          <Calendar className="h-3.5 w-3.5" />
          推奨スケジュール:
          <span className="text-ink">{formatSchedule(draft.scheduledAt)}</span>
        </div>

        {/* Body with interleaved figures */}
        <article className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink">
          {blocks.map((b, i) => (
            <div key={b.key} className="space-y-5">
              <p className="whitespace-pre-line text-ink">{b.text}</p>
              {figureAfter[i] !== undefined && (
                <InlineFigure
                  caption={figures[figureAfter[i]].caption}
                  index={figureAfter[i]}
                  channelId={draft.channelId}
                />
              )}
            </div>
          ))}
          {/* Any leftover figures */}
          {figures.length > blocks.length && (
            <div className="space-y-5">
              {figures.slice(blocks.length).map((f, i) => (
                <InlineFigure
                  key={`extra-${i}`}
                  caption={f.caption}
                  index={blocks.length + i}
                  channelId={draft.channelId}
                />
              ))}
            </div>
          )}
        </article>

        {/* Tags */}
        {draft.tags && draft.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {draft.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-0.5 rounded-md bg-paper px-2 py-0.5 text-xs text-ink-muted border border-paper-border"
              >
                <Hash className="h-3 w-3" />
                {t}
              </span>
            ))}
          </div>
        )}

        {/* AI scoring */}
        <section className="mt-8">
          <div className="mb-3 text-[10px] uppercase tracking-wider text-ink-subtle">
            Multi-AI scoring
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg border border-paper-border bg-paper-card p-3">
              <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Claude</div>
              <div className="mt-1 text-lg font-semibold">{draft.scores.claude}</div>
            </div>
            <div className="rounded-lg border border-paper-border bg-paper-card p-3">
              <div className="text-[10px] uppercase tracking-wider text-ink-subtle">GPT-4o</div>
              <div className="mt-1 text-lg font-semibold">{draft.scores.gpt4o}</div>
            </div>
            <div className="rounded-lg border border-paper-border bg-paper-card p-3">
              <div className="text-[10px] uppercase tracking-wider text-ink-subtle">Gemini</div>
              <div className="mt-1 text-lg font-semibold">{draft.scores.gemini}</div>
            </div>
          </div>
        </section>

        {/* Rationale */}
        {draft.rationale && (
          <section className="mt-8">
            <div className="mb-3 text-[10px] uppercase tracking-wider text-ink-subtle">
              AIによる推薦理由
            </div>
            <div className="space-y-2.5">
              <RationaleRow
                icon={<BookOpen className="h-3.5 w-3.5" />}
                label="Knowledge"
                value={draft.rationale.knowledge}
              />
              <RationaleRow
                icon={<TrendingUp className="h-3.5 w-3.5" />}
                label="Trend"
                value={draft.rationale.trend}
              />
              <RationaleRow
                icon={<Target className="h-3.5 w-3.5" />}
                label="Strategy"
                value={draft.rationale.strategy}
              />
            </div>
          </section>
        )}

        {/* Actions */}
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <button className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink py-2.5 text-sm font-medium text-paper hover:bg-ink/90">
            <Check className="h-3.5 w-3.5" /> 承認
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-paper-border bg-paper-card py-2.5 text-sm text-ink hover:bg-paper">
            <Pencil className="h-3.5 w-3.5" /> 編集
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-paper-border bg-paper-card py-2.5 text-sm text-ink hover:bg-paper">
            <RefreshCw className="h-3.5 w-3.5" /> リライト
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-paper-border bg-paper-card py-2.5 text-sm text-ink-muted hover:bg-paper">
            <X className="h-3.5 w-3.5" /> 却下
          </button>
        </div>
      </div>
    </>
  );
}

function RationaleRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-paper-border bg-paper-card p-3.5 text-sm">
      <div className="mt-0.5 text-ink-muted">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-ink-subtle">{label}</div>
        <div className="mt-0.5 text-ink-muted">{value}</div>
      </div>
    </div>
  );
}
