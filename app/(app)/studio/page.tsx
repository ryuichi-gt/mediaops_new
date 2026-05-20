import Header from "@/components/shell/Header";
import { Sparkles } from "lucide-react";

export default function StudioPage() {
  return (
    <>
      <Header title="Content Studio" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
          Content Studio
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          企画 → 生成 → マルチAI品質ループ(95+) → 承認待ちへ。
        </p>
        <div className="mt-6 rounded-xl border border-paper-border bg-paper-card p-5">
          <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">
            企画プロンプト
          </label>
          <textarea
            placeholder="例)『PMSと血糖値の関係』をFemtechチャンネル向けに、サイエンス×やさしさのトーンで、Instagram投稿として..."
            className="mt-2 h-32 w-full resize-none rounded-lg border border-paper-border bg-paper p-3 text-sm placeholder:text-ink-subtle focus:border-accent focus:outline-none"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-ink-muted">チャンネル: Femtech</div>
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90">
              <Sparkles className="h-3.5 w-3.5" />
              生成する
            </button>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-dashed border-paper-border bg-paper-card p-5 text-sm text-ink-muted">
          生成結果はここに表示され、Claude / GPT-4o / Geminiのスコアが並ぶ予定。
        </div>
      </div>
    </>
  );
}
