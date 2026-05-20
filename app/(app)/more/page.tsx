import Link from "next/link";
import Header from "@/components/shell/Header";
import { ChevronRight } from "lucide-react";

const items = [
  { href: "/strategy", label: "Strategy Board", desc: "AI生成の戦略" },
  { href: "/knowledge", label: "Knowledge Base", desc: "ブランド/ペルソナ/競合" },
  { href: "/channels", label: "Channels", desc: "チャンネル管理" },
  { href: "/review", label: "Review Queue", desc: "承認待ち" },
  { href: "/seo", label: "SEO / GEO Audit", desc: "AI検索引用の監査" },
  { href: "/auto", label: "Auto Mode", desc: "自走範囲の設定" },
  { href: "/onboarding", label: "Onboarding", desc: "初回導入ウィザード" },
  { href: "/settings", label: "Settings", desc: "テナント設定" },
];

export default function MorePage() {
  return (
    <>
      <Header title="More" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">More</h1>
        <div className="mt-6 rounded-xl border border-paper-border bg-paper-card divide-y divide-paper-border">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-paper"
            >
              <div>
                <div className="text-sm font-medium">{it.label}</div>
                <div className="mt-0.5 text-xs text-ink-muted">{it.desc}</div>
              </div>
              <ChevronRight className="h-4 w-4 text-ink-subtle" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
