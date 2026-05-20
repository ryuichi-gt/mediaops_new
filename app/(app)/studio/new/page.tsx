import Link from "next/link";
import Header from "@/components/shell/Header";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function StudioNewPage() {
  return (
    <>
      <Header title="ゼロから作成" />
      <div className="mx-auto max-w-2xl px-5 py-6 md:px-8 md:py-10">
        <Link
          href="/studio"
          className="inline-flex items-center gap-1 text-xs text-ink-muted hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3" /> Studio に戻る
        </Link>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          ゼロから作成
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          通常は AI 自動生成の承認で十分。特定の意図がある場合のサブ機能として使う。
        </p>

        <div className="mt-6 rounded-xl border border-paper-border bg-paper-card p-5 space-y-4">
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              チャンネル
            </label>
            <select className="mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-3 py-2 text-sm focus:border-accent focus:outline-none">
              <option>for Athlete</option>
              <option>for Femtech</option>
              <option>Lifestyle</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              プラットフォーム
            </label>
            <select className="mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-3 py-2 text-sm focus:border-accent focus:outline-none">
              <option>Instagram (Reel)</option>
              <option>Instagram (Carousel)</option>
              <option>TikTok</option>
              <option>X</option>
              <option>Owned Media (SEO)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              企画意図 (プロンプト)
            </label>
            <textarea
              placeholder="例)『PMSと血糖値の関係』を for Femtech 向けに、サイエンス×やさしさのトーンで、Reelとして..."
              className="mt-1.5 h-32 w-full resize-none rounded-lg border border-paper-border bg-paper p-3 text-sm placeholder:text-ink-subtle focus:border-accent focus:outline-none"
            />
          </div>
          <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink py-2.5 text-sm font-medium text-paper hover:bg-ink/90">
            <Sparkles className="h-3.5 w-3.5" />
            生成する (Claude / GPT-4o / Gemini)
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-paper-border bg-paper-card p-5 text-sm text-ink-muted">
          生成結果はここにマルチAIスコア付きで表示される予定。生成後は通常のStudioフィードに合流。
        </div>
      </div>
    </>
  );
}
