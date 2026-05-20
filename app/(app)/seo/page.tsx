import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function SeoPage() {
  return (
    <PagePlaceholder
      title="SEO / GEO Audit"
      description="従来のSEO監査に加え、Generative AI検索(ChatGPT / Perplexity / Gemini)で自社が引用されているかを定点観測。"
      sections={[
        { title: "クエリ別順位", body: "ターゲットクエリのGoogle順位推移。" },
        { title: "AI検索引用", body: "ChatGPT / Perplexityでの引用頻度とコンテキスト。" },
        { title: "改善提案", body: "AIが提案する記事リライト案と新規記事ネタ。" },
      ]}
    />
  );
}
