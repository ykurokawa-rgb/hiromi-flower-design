# ひろみフラワーデザイン教室 公式HP

「お花で遊ぶ」をコンセプトにしたフラワーアレンジメント教室の公式サイトです。

## 技術スタック

- **Framework:** Next.js 16 (App Router / SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **CMS:** microCMS
- **Form:** formrun
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4

## セットアップ

```bash
pnpm install
cp .env.local.example .env.local
# .env.local を編集して各種キーを設定
pnpm dev
```

## 環境変数

| 変数名 | 説明 |
|--------|------|
| `MICROCMS_SERVICE_DOMAIN` | microCMS サービスドメイン |
| `MICROCMS_API_KEY` | microCMS API キー |
| `NEXT_PUBLIC_SITE_URL` | サイト URL |
| `NEXT_PUBLIC_FORMRUN_URL` | formrun フォーム送信先 |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 測定 ID |

## ページ構成

| パス | ページ |
|------|--------|
| `/` | トップページ |
| `/about` | 教室について |
| `/menu` | お花遊びのじかん |
| `/gallery` | ギャラリー |
| `/order` | オーダーメイド |
| `/contact` | お問い合わせ |
| `/privacy` | プライバシーポリシー |

## コマンド

```bash
pnpm dev      # 開発サーバー
pnpm build    # ビルド
pnpm start    # プロダクションサーバー
pnpm lint     # ESLint
```
