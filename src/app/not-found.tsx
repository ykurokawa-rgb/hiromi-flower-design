import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[72px] text-center">
      <p className="mb-2 text-6xl">🌿</p>
      <h1 className="mb-2 font-display text-2xl font-medium">ページが見つかりません</h1>
      <p className="mb-8 text-sm text-text-sub">
        お探しのページは移動または削除された可能性があります。
      </p>
      <Button href="/">トップページへ戻る</Button>
    </div>
  )
}
