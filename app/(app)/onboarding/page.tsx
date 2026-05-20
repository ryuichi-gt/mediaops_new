import PagePlaceholder from "@/components/shell/PagePlaceholder";

export default function OnboardingPage() {
  return (
    <PagePlaceholder
      title="Onboarding"
      description="初回導入のSTEP 1〜8。URL入力 → AI解析 → Brand Interview → Knowledge生成 → Radar設定 → 戦略生成 → SNS連携 → 自動運用開始。"
      sections={[
        { title: "STEP 1-2", body: "自社URL入力とAIによる自動解析。" },
        { title: "STEP 3-4", body: "Brand Interviewとナレッジベース生成。" },
        { title: "STEP 5-6", body: "Market Radar設定と戦略の初期生成。" },
        { title: "STEP 7-8", body: "SNS連携と自動運用開始。" },
      ]}
    />
  );
}
