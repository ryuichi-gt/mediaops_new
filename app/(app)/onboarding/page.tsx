"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/shell/Header";
import {
  ArrowRight,
  ArrowLeft,
  RotateCw,
  Globe,
  Sparkles,
  MessageSquare,
  BookOpen,
  Radar,
  Lightbulb,
  Link2,
  PartyPopper,
  Check,
  Loader2,
} from "lucide-react";

const STEPS = [
  { id: 1, label: "URL入力", icon: Globe },
  { id: 2, label: "AI解析", icon: Sparkles },
  { id: 3, label: "Brand Interview", icon: MessageSquare },
  { id: 4, label: "Knowledge生成", icon: BookOpen },
  { id: 5, label: "Radar設定", icon: Radar },
  { id: 6, label: "戦略生成", icon: Lightbulb },
  { id: 7, label: "SNS連携", icon: Link2 },
  { id: 8, label: "自動運用開始", icon: PartyPopper },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [url, setUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [interviewAnswers, setInterviewAnswers] = useState<Record<string, string>>({});
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>([
    "Levels",
    "Nutrisense",
    "Oura Ring",
  ]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([
    "PMS 血糖値",
    "ハイパフォーマンスエリア",
    "夜間低血糖 中途覚醒",
  ]);
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([]);
  const [autoLevel, setAutoLevel] = useState<"manual" | "review" | "full">("review");

  const reset = () => {
    setStep(1);
    setUrl("");
    setAnalyzing(false);
    setInterviewAnswers({});
    setSelectedCompetitors(["Levels", "Nutrisense", "Oura Ring"]);
    setSelectedKeywords(["PMS 血糖値", "ハイパフォーマンスエリア", "夜間低血糖 中途覚醒"]);
    setConnectedPlatforms([]);
    setAutoLevel("review");
  };

  const next = () => setStep((s) => Math.min(8, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const goToStep2 = () => {
    if (!url) return;
    setAnalyzing(true);
    setStep(2);
    setTimeout(() => setAnalyzing(false), 2400);
  };

  return (
    <>
      <Header title="Onboarding" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        {/* Demo banner */}
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-xs text-amber-800">
          <span className="font-medium">DEMO</span> · 本番データには影響しません。
          何度でも最初からやり直せます。
        </div>

        {/* Title + reset */}
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
              初回セットアップ
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              MediaOps を初めて使う企業が辿る 8 ステップ。URL を入れるだけで AI がブランドを解析し、
              Knowledge / Strategy / Radar / Studio の初期状態を自動で構築する。
            </p>
          </div>
          <button
            onClick={reset}
            className="shrink-0 inline-flex items-center gap-1 rounded-lg border border-paper-border bg-paper-card px-3 py-2 text-xs text-ink-muted hover:text-ink"
          >
            <RotateCw className="h-3 w-3" /> 最初から
          </button>
        </div>

        {/* Step indicator */}
        <div className="mt-6 -mx-5 overflow-x-auto px-5 md:-mx-8 md:px-8">
          <div className="flex items-center gap-1.5 pb-1">
            {STEPS.map((s) => {
              const isActive = s.id === step;
              const isDone = s.id < step;
              return (
                <button
                  key={s.id}
                  onClick={() => setStep(s.id)}
                  className={`shrink-0 rounded-lg border px-2.5 py-1.5 text-[11px] transition-colors ${
                    isActive
                      ? "border-ink bg-ink text-paper"
                      : isDone
                      ? "border-paper-border bg-paper text-ink"
                      : "border-paper-border bg-paper-card text-ink-subtle"
                  }`}
                >
                  <span className="font-medium">STEP {s.id}</span>
                  <span className="ml-1.5">{s.label}</span>
                  {isDone && <Check className="ml-1 inline h-3 w-3" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step content */}
        <div className="mt-6">
          {step === 1 && (
            <Step1
              url={url}
              setUrl={setUrl}
              onNext={goToStep2}
            />
          )}
          {step === 2 && <Step2 analyzing={analyzing} url={url || "sympafit.co.jp"} />}
          {step === 3 && (
            <Step3
              answers={interviewAnswers}
              setAnswers={setInterviewAnswers}
            />
          )}
          {step === 4 && <Step4 />}
          {step === 5 && (
            <Step5
              competitors={selectedCompetitors}
              setCompetitors={setSelectedCompetitors}
              keywords={selectedKeywords}
              setKeywords={setSelectedKeywords}
            />
          )}
          {step === 6 && <Step6 />}
          {step === 7 && (
            <Step7
              connected={connectedPlatforms}
              setConnected={setConnectedPlatforms}
            />
          )}
          {step === 8 && (
            <Step8 autoLevel={autoLevel} setAutoLevel={setAutoLevel} onReset={reset} />
          )}
        </div>

        {/* Footer nav */}
        {step > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={back}
              className="inline-flex items-center gap-1.5 rounded-lg border border-paper-border bg-paper-card px-4 py-2 text-sm text-ink-muted hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> 戻る
            </button>
            {step < 8 && (
              <button
                onClick={next}
                disabled={step === 2 && analyzing}
                className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-5 py-2 text-sm font-medium text-paper hover:bg-ink/90 disabled:opacity-50"
              >
                次へ <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function Step1({
  url,
  setUrl,
  onNext,
}: {
  url: string;
  setUrl: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 1</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
        自社URLを入力
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        サイトの構造、扱う商品/サービス、トーンを AI が読み取って、初期 Knowledge を組み立てます。
      </p>
      <div className="mt-5">
        <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">
          コーポレートサイト URL
        </label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="例) https://sympafit.co.jp"
          className="mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
        />
        <div className="mt-2 text-xs text-ink-subtle">
          複数ある場合は STEP 4 で追加できます。
        </div>
      </div>
      <button
        onClick={onNext}
        disabled={!url}
        className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink/90 disabled:opacity-40 md:w-auto"
      >
        <Sparkles className="h-3.5 w-3.5" />
        AI 解析を開始
      </button>
    </section>
  );
}

function Step2({ analyzing, url }: { analyzing: boolean; url: string }) {
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 2</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">AI 解析</h2>
      <p className="mt-2 text-sm text-ink-muted">{url} を解析しています。</p>

      <div className="mt-5 space-y-2.5">
        <ProgressLine label="サイト構造のクロール" done={!analyzing || true} />
        <ProgressLine label="プロダクト/サービスの抽出" done={!analyzing} />
        <ProgressLine label="ブランドボイス・トーンの推定" done={!analyzing} />
        <ProgressLine label="競合候補のサーフェス" done={!analyzing} />
        <ProgressLine label="科学的根拠・差別化軸の特定" done={!analyzing} />
      </div>

      {!analyzing && (
        <div className="mt-5 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
          <div className="font-medium">解析完了</div>
          <div className="mt-1 text-emerald-700">
            「血糖値でメンタルを読む」を中心ナラティブに、3つのサブプロダクト(for Athlete /
            for Femtech / Lifestyle)を検出しました。
          </div>
        </div>
      )}
    </section>
  );
}

function ProgressLine({ label, done }: { label: string; done: boolean }) {
  return (
    <div className="flex items-center gap-2.5 text-sm">
      {done ? (
        <Check className="h-4 w-4 text-emerald-600" />
      ) : (
        <Loader2 className="h-4 w-4 animate-spin text-ink-muted" />
      )}
      <span className={done ? "text-ink" : "text-ink-muted"}>{label}</span>
    </div>
  );
}

const QUESTIONS = [
  {
    id: "q1",
    question: "ブランドの主軸は?",
    options: [
      "サイエンス・研究の信頼性",
      "ライフスタイル提案",
      "課題解決ツール",
    ],
  },
  {
    id: "q2",
    question: "コアターゲットを最も近く表現するのは?",
    options: [
      "アスリート/トレーニー",
      "妊活・PMS・更年期の女性",
      "働く一般生活者",
      "上記すべて",
    ],
  },
  {
    id: "q3",
    question: "今後3ヶ月の最優先指標は?",
    options: [
      "新規ユーザー獲得",
      "ブランド認知の確立",
      "既存ユーザーのアクティブ化",
    ],
  },
];

function Step3({
  answers,
  setAnswers,
}: {
  answers: Record<string, string>;
  setAnswers: (v: Record<string, string>) => void;
}) {
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 3</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
        Brand Interview
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        AI が解析した推定を、3 つの質問で確定/補正します。
      </p>
      <div className="mt-5 space-y-5">
        {QUESTIONS.map((q, i) => (
          <div key={q.id}>
            <div className="text-sm font-medium">
              Q{i + 1}. {q.question}
            </div>
            <div className="mt-2 space-y-1.5">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers({ ...answers, [q.id]: opt })}
                    className={`block w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                      selected
                        ? "border-ink bg-ink text-paper"
                        : "border-paper-border bg-paper text-ink hover:bg-paper-border/40"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Step4() {
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 4</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
        Knowledge Base 生成
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        URL解析とインタビュー結果から初期 Knowledge を構築しました。
      </p>
      <div className="mt-5 space-y-2.5">
        <KnowledgeRow label="Tagline" value="血糖値でメンタルを読む" />
        <KnowledgeRow
          label="Mission"
          value="血糖値からこころと体のコンディションを読み解き、誰もが自分の最高の状態にアクセスできる社会をつくる"
        />
        <KnowledgeRow
          label="Voice"
          value="サイエンスベースで押し付けがましくない。専門用語を使うが必ず1行で噛み砕く"
        />
        <KnowledgeRow
          label="Sub-products"
          value="for Athlete / for Femtech / Lifestyle"
        />
        <KnowledgeRow
          label="Personas"
          value="3名(市民アスリート、妊活ワーカー、ライフスタイル層)を自動生成"
        />
      </div>
      <div className="mt-4 text-xs text-ink-subtle">
        後で Knowledge 画面から自由に編集できます。
      </div>
    </section>
  );
}

function KnowledgeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-paper-border bg-paper p-3">
      <div className="text-[10px] uppercase tracking-wider text-ink-subtle">{label}</div>
      <div className="mt-0.5 text-sm text-ink">{value}</div>
    </div>
  );
}

function Step5({
  competitors,
  setCompetitors,
  keywords,
  setKeywords,
}: {
  competitors: string[];
  setCompetitors: (v: string[]) => void;
  keywords: string[];
  setKeywords: (v: string[]) => void;
}) {
  const competitorOptions = [
    "Levels",
    "Nutrisense",
    "Oura Ring",
    "Whoop",
    "FreeStyleリブレ",
    "Ava Bracelet",
    "ルナルナ",
  ];
  const keywordOptions = [
    "PMS 血糖値",
    "ハイパフォーマンスエリア",
    "夜間低血糖 中途覚醒",
    "妊活 血糖値",
    "更年期 血糖",
    "CGM 市民ランナー",
    "間欠的断食 女性",
  ];

  const toggle = (arr: string[], setter: (v: string[]) => void, item: string) => {
    setter(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  };

  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 5</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
        Market Radar 設定
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        監視する競合とキーワードを選択。AI 推奨をベースに調整できます。
      </p>

      <div className="mt-5">
        <div className="text-[10px] uppercase tracking-wider text-ink-subtle">
          監視する競合
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {competitorOptions.map((c) => {
            const on = competitors.includes(c);
            return (
              <button
                key={c}
                onClick={() => toggle(competitors, setCompetitors, c)}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  on
                    ? "border-ink bg-ink text-paper"
                    : "border-paper-border bg-paper text-ink-muted hover:text-ink"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[10px] uppercase tracking-wider text-ink-subtle">
          追跡するキーワード
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {keywordOptions.map((k) => {
            const on = keywords.includes(k);
            return (
              <button
                key={k}
                onClick={() => toggle(keywords, setKeywords, k)}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  on
                    ? "border-ink bg-ink text-paper"
                    : "border-paper-border bg-paper text-ink-muted hover:text-ink"
                }`}
              >
                {k}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Step6() {
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 6</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
        戦略の初期生成
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Knowledge × Radar から AI が四半期戦略を組み立てました。
      </p>
      <div className="mt-5 rounded-lg border border-paper-border bg-paper p-4">
        <div className="text-xs text-ink-muted">2026 Q2</div>
        <div className="mt-1 text-sm leading-snug">
          『ハイパフォーマンスエリア』『PMSと血糖』を双柱に、SympaFitの独自解析を世に知らせる四半期
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {[
          { name: "ハイパフォーマンスエリア", channel: "for Athlete", share: "30%" },
          { name: "PMS × 血糖", channel: "for Femtech", share: "30%" },
          { name: "睡眠 × 血糖", channel: "Lifestyle", share: "20%" },
          { name: "ブランドナラティブ", channel: "All", share: "20%" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-lg border border-paper-border bg-paper px-3 py-2.5 text-sm"
          >
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-xs text-ink-muted">{p.channel}</div>
            </div>
            <div className="text-xs text-ink-muted">{p.share}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-ink-subtle">
        Strategy 画面でサブプロダクト別の詳細戦略も自動生成済みです。
      </div>
    </section>
  );
}

function Step7({
  connected,
  setConnected,
}: {
  connected: string[];
  setConnected: (v: string[]) => void;
}) {
  const platforms = [
    { id: "instagram", name: "Instagram", desc: "Reel / カルーセル / ストーリーズ" },
    { id: "tiktok", name: "TikTok", desc: "Short動画" },
    { id: "x", name: "X (Twitter)", desc: "スレッド / 単発投稿" },
    { id: "owned", name: "オウンドメディア", desc: "WordPress / Ghost / 自社CMS" },
  ];
  const toggle = (id: string) =>
    setConnected(connected.includes(id) ? connected.filter((x) => x !== id) : [...connected, id]);

  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 7</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">SNS 連携</h2>
      <p className="mt-2 text-sm text-ink-muted">
        投稿先のアカウントを接続。後から追加/解除可能。
      </p>
      <div className="mt-5 space-y-2">
        {platforms.map((p) => {
          const isConn = connected.includes(p.id);
          return (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-lg border border-paper-border bg-paper px-4 py-3"
            >
              <div>
                <div className="text-sm font-medium">{p.name}</div>
                <div className="mt-0.5 text-xs text-ink-muted">{p.desc}</div>
              </div>
              <button
                onClick={() => toggle(p.id)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium ${
                  isConn
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border border-paper-border bg-paper-card text-ink hover:bg-paper-border/40"
                }`}
              >
                {isConn ? "接続済み" : "接続する"}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-xs text-ink-subtle">
        デモのため実際の OAuth は走りません。
      </div>
    </section>
  );
}

function Step8({
  autoLevel,
  setAutoLevel,
  onReset,
}: {
  autoLevel: "manual" | "review" | "full";
  setAutoLevel: (v: "manual" | "review" | "full") => void;
  onReset: () => void;
}) {
  const options = [
    {
      id: "manual" as const,
      label: "Manual",
      desc: "AIは提案のみ。生成・投稿は自分で実行。",
    },
    {
      id: "review" as const,
      label: "Review-required (推奨)",
      desc: "AIが自動生成・スケジューリングまで完了。承認のみ自分で。",
    },
    {
      id: "full" as const,
      label: "Fully autonomous",
      desc: "スコア閾値以上は承認なしで自動投稿。AIが全運用。",
    },
  ];
  return (
    <section className="rounded-xl border border-paper-border bg-paper-card p-5 md:p-7">
      <div className="text-xs uppercase tracking-wider text-ink-muted">STEP 8</div>
      <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
        自動運用の開始レベルを選択
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        後から Auto Mode 画面でいつでも変更できます。
      </p>
      <div className="mt-5 space-y-2">
        {options.map((o) => {
          const on = autoLevel === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setAutoLevel(o.id)}
              className={`block w-full rounded-lg border p-4 text-left transition-colors ${
                on
                  ? "border-ink bg-ink text-paper"
                  : "border-paper-border bg-paper text-ink hover:bg-paper-border/40"
              }`}
            >
              <div className="text-sm font-medium">{o.label}</div>
              <div className={`mt-1 text-xs ${on ? "text-paper/70" : "text-ink-muted"}`}>
                {o.desc}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-center">
        <PartyPopper className="mx-auto h-7 w-7 text-emerald-600" />
        <div className="mt-2 text-sm font-semibold text-emerald-800">
          セットアップ完了 (デモ)
        </div>
        <div className="mt-1 text-xs text-emerald-700">
          本番なら、ここから AI が初回のコンテンツバッチを生成し Studio に並びます。
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link
            href="/radar"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-xs font-medium text-paper hover:bg-ink/90"
          >
            Market Radar へ
          </Link>
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-paper-card px-4 py-2 text-xs text-emerald-800 hover:bg-paper"
          >
            <RotateCw className="h-3 w-3" /> もう一度最初から
          </button>
        </div>
      </div>
    </section>
  );
}
