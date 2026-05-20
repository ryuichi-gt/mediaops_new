import Link from "next/link";
import Header from "@/components/shell/Header";
import tenant from "@/data/tenant.json";
import { ArrowRight } from "lucide-react";

export default function ChannelsPage() {
  return (
    <>
      <Header title="Channels" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Channels</h1>
        <p className="mt-2 text-sm text-ink-muted">
          {tenant.name}({tenant.tagline}) 配下のサブプロダクト。
          各サブプロダクトのペルソナ・トーン・コンテンツピラー・接続SNSと、専用の戦略ビューを管理。
        </p>
        <div className="mt-6 space-y-3">
          {tenant.channels.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-paper-border bg-paper-card p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">SympaFit {c.name}</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-paper px-2 py-0.5 text-[10px] text-ink-muted border border-paper-border"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-subtle">ペルソナ</div>
                  <div className="mt-0.5 text-ink-muted">{c.persona}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-subtle">トーン</div>
                  <div className="mt-0.5 text-ink-muted">{c.tone}</div>
                </div>
              </div>
              {c.pillars && (
                <div className="mt-3">
                  <div className="text-[10px] uppercase tracking-wider text-ink-subtle">
                    コンテンツピラー
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {c.pillars.map((p) => (
                      <span
                        key={p}
                        className="rounded bg-accent-soft px-2 py-0.5 text-[11px] text-accent"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 border-t border-paper-border pt-3">
                <Link
                  href={`/strategy?channel=${c.id}`}
                  className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  このサブプロダクトの戦略ビューを開く
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
