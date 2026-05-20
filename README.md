# MediaOps Mock — SympaFit

AI Marketing OS のテナント側UIモック。SympaFitテナントの中の人が日々使う画面群。

## 画面一覧

| パス | 画面 | 状態 |
|---|---|---|
| `/radar` | Market Radar (ホーム) | フル実装 |
| `/strategy` | Strategy Board | スケルトン |
| `/knowledge` | Knowledge Base | スケルトン |
| `/channels` | Channels | データ表示 |
| `/studio` | Content Studio | 入力UIのみ |
| `/review` | Review Queue | データ表示 |
| `/calendar` | Calendar | スケルトン |
| `/analytics` | Analytics | スケルトン |
| `/seo` | SEO / GEO Audit | スケルトン |
| `/auto` | Auto Mode | スケルトン |
| `/onboarding` | Onboarding | スケルトン |
| `/settings` | Settings | スケルトン |

## 開発

```bash
npm install
npm run dev
# http://localhost:3000
```

## デプロイ

Vercelに接続済みなら、このブランチへpushすると自動でPreview URLが生える。

```
mediaops-mock-git-<branch>-ryuichi-gt.vercel.app
```

## スマホからの開発フロー

1. スマホのClaudeアプリ or claude.ai/code から本リポジトリにタスクを投入
2. Claude Codeが該当画面のコードを編集してPRを作成
3. Vercel が PR ごとに Preview URL を自動発行
4. スマホブラウザでURLを開いて実機確認
5. GitHub Mobile で PR をマージ
