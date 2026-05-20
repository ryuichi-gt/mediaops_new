# MediaOps Mock

## Context
SympaFitテナント側のMediaOps管理画面のフロントエンドモック。
MediaOps本体は、企業のマーケティング/ブランディング/メディア運用をAIで統合支援する「AI Marketing OS」。
このリポジトリはモックのみで、バックエンドはまだない。ダミーデータは `data/*.json`。

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- lucide-react (icons)
- ホスティングは Vercel (PRごとに Preview URL が自動発行)

## Conventions
- 余白多め・フラット・無装飾の Claude.ai 風テイスト
- 文字色: `text-ink` (本文) / `text-ink-muted` (補助) / `text-ink-subtle` (極淡)
- 背景: `bg-paper` (ページ) / `bg-paper-card` (カード)
- ボーダー: `border-paper-border`
- アクセント: `text-accent` / `bg-accent-soft` (控えめに)
- 角丸は `rounded-xl` 基本、ボタンは `rounded-lg`

## Layout
- モバイル: 下部タブナビ (Radar / Studio / Calendar / Analytics / More)
- PC: 左サイドナビ (全12項目)
- ページは `max-w-3xl` を基本にする (モバイル想定)

## Data
- すべて `data/*.json` を直接 import。SympaFit想定の血糖値/フィットネス/フェムテック文脈
- 競合は Levels / Nutrisense / Oura を実在ブランドとして登場させてOK

## What NOT to do
- 過剰な装飾、シャドウ多用、グラデーション
- バックエンド呼び出しコードの追加 (まだAPIは存在しない)
- 不要な状態管理ライブラリの導入 (素の React で足りる)
