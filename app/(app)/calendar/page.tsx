import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function CalendarPage() {
  return (
    <PagePlaceholder
      title="Calendar"
      description="編集カレンダー。月/週/日ビューで予約状況と公開済み投稿を俯瞰。ドラッグ&ドロップでリスケ可能。"
      sections={[
        { title: "月ビュー", body: "チャンネル横断で月間の発信ピッチを確認。" },
        { title: "週ビュー", body: "曜日ごとの投稿量とプラットフォーム配分。" },
        { title: "予約一覧", body: "今後7日間の予約投稿をリスト形式で。" },
      ]}
    />
  );
}
