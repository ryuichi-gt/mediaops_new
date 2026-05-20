import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function StrategyPage() {
  return (
    <PagePlaceholder
      title="Strategy Board"
      description="AIが提案した3ヶ月/年間戦略を確認・調整。SWOT、コンテンツ戦略、SNS戦略、SEO戦略の4セクションを横断的に管理。"
      sections={[
        { title: "SWOT分析", body: "ブランドの強み/弱み/機会/脅威をAIが自動更新。" },
        { title: "コンテンツ戦略", body: "テーマピラー × チャンネル × 月次配分。" },
        { title: "SNS戦略", body: "各プラットフォームの目的と運用ルール。" },
        { title: "SEO/GEO戦略", body: "ターゲットクエリと生成AI検索引用の目標。" },
      ]}
    />
  );
}
