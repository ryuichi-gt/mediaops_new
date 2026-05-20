import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function AnalyticsPage() {
  return (
    <PagePlaceholder
      title="Analytics"
      description="投稿別 / チャンネル別 / 期間別の数値。高パフォーマンス投稿の特徴をAIが抽出し、次のプロンプトと戦略にフィードバック。"
      sections={[
        { title: "サマリ", body: "リーチ・エンゲージメント・コンバージョン。" },
        { title: "投稿別ランキング", body: "今週のトップ10と『なぜ伸びたか』のAI解説。" },
        { title: "チャンネル比較", body: "Main / Athletes / Femtech の伸長差。" },
        { title: "学習レポート", body: "次回プロンプトに反映するキーパターン。" },
      ]}
    />
  );
}
