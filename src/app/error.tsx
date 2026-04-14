'use client'

import { Button } from '@/components/Button'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[72px] text-center">
      <p className="mb-2 text-5xl">🌿</p>
      <h1 className="mb-2 font-display text-2xl font-medium">エラーが発生しました</h1>
      <p className="mb-8 text-sm text-text-sub">
        申し訳ございません。もう一度お試しください。
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-primary px-8 py-3 font-display text-sm font-medium text-white shadow-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
      >
        もう一度試す
      </button>
    </div>
  )
}
