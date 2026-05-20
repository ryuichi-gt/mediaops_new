import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function AutoPage() {
  return (
    <PagePlaceholder
      title="Auto Mode"
      description="どこまでAIに任せるかを設定。承認ステップのスキップ可否、自動投稿の対象チャンネル、緊急停止の条件など。"
      sections={[
        { title: "オート段階", body: "Manual / Review-required / Fully autonomous の3段階。" },
        { title: "対象チャンネル", body: "チャンネルごとに別設定可能。" },
        { title: "セーフガード", body: "NGワード検出、ネガティブ反応の閾値、緊急停止。" },
      ]}
    />
  );
}
