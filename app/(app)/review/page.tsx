import Link from "next/link";
import Header from "@/components/shell/Header";
import { ArrowRight } from "lucide-react";

export default function ReviewPage() {
  return (
    <>
      <Header title="Review" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Review</h1>
        <p className="mt-2 text-sm text-ink-muted">
          承認待ちのコンテンツは Content Studio に統合済み。
          AI 自動生成 → スコアリング → 承認のフローはすべて Studio で完結します。
        </p>
        <Link
          href="/studio"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-ink/90"
        >
          Content Studio を開く
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </>
  );
}
