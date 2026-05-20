import Header from "@/components/shell/Header";
import tenant from "@/data/tenant.json";

export default function ChannelsPage() {
  return (
    <>
      <Header title="Channels" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Channels</h1>
        <p className="mt-2 text-sm text-ink-muted">
          {tenant.name} 配下のチャンネル一覧。各チャンネルのペルソナ・トーン・接続SNSを管理。
        </p>
        <div className="mt-6 space-y-3">
          {tenant.channels.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-paper-border bg-paper-card p-4 md:p-5"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="flex gap-1.5">
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
              <div className="mt-2 grid gap-1.5 text-sm md:grid-cols-2">
                <div>
                  <span className="text-xs text-ink-subtle">ペルソナ</span>
                  <div className="text-ink">{c.persona}</div>
                </div>
                <div>
                  <span className="text-xs text-ink-subtle">トーン</span>
                  <div className="text-ink">{c.tone}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
