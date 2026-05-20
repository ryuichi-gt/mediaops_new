import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function KnowledgePage() {
  return (
    <PagePlaceholder
      title="Knowledge Base"
      description="ブランド定義、ペルソナ、競合分析、用語集。自社URL/資料からAIが自動抽出した知識をここで確認・編集する。"
      sections={[
        { title: "ブランド定義", body: "ミッション/ビジョン/価値観/トーン/NGワード。" },
        { title: "ペルソナ", body: "主要セグメントごとのデモグラ・ジョブ・痛み。" },
        { title: "プロダクト/サービス", body: "提供価値、価格、差別化ポイント。" },
        { title: "競合プロファイル", body: "Levels / Nutrisense / Oura ほか。" },
      ]}
    />
  );
}
