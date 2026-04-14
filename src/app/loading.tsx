export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-[72px]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-border border-t-primary" />
        <p className="text-sm text-text-sub">読み込み中...</p>
      </div>
    </div>
  )
}
