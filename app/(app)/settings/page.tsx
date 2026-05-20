import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function SettingsPage() {
  return (
    <PagePlaceholder
      title="Settings"
      description="テナント基本情報、ブランドボイス、SNS接続、メンバー権限、APIキー/Webhook、コスト/使用量、監査ログ。"
      sections={[
        { title: "テナント基本", body: "名前、ドメイン、プラン。" },
        { title: "ブランドボイス", body: "トーン、NGワード、カラー、ロゴ。" },
        { title: "SNS接続", body: "Instagram / X / TikTok / オウンドメディア。" },
        { title: "メンバー / 権限", body: "招待、ロール、アクティビティログ。" },
      ]}
    />
  );
}
