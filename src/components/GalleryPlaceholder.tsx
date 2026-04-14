/**
 * 写真が準備されるまでのプレースホルダーギャラリー。
 * 実際の写真が入ったら GalleryGrid に差し替える。
 */

type PlaceholderItem = {
  emoji: string
  height: number
}

type Props = {
  items: PlaceholderItem[]
}

export function GalleryPlaceholder({ items }: Props) {
  return (
    <div className="masonry">
      {items.map((item, i) => (
        <div
          key={i}
          className="masonry-item overflow-hidden rounded-[14px] shadow-soft transition-transform duration-300 hover:scale-[1.02]"
        >
          <div
            className="flex items-center justify-center text-4xl text-text-sub"
            style={{
              height: item.height,
              background: 'linear-gradient(135deg, var(--color-surface-alt), var(--color-bg))',
            }}
          >
            {item.emoji}
          </div>
        </div>
      ))}
    </div>
  )
}
