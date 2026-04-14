import { DAY_FLOW } from '@/lib/constants'

type Props = {
  compact?: boolean
}

export function FlowTimeline({ compact = false }: Props) {
  const items = compact ? DAY_FLOW : DAY_FLOW

  return (
    <div className="relative mx-auto max-w-[640px]">
      {/* Vertical line */}
      <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-border" />

      {items.map((item, i) => (
        <div
          key={item.step}
          className={`relative pl-16 ${i < items.length - 1 ? 'pb-10' : ''}`}
        >
          <div className="absolute left-[10px] top-0 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-white">
            {item.step}
          </div>
          <h4 className="mb-1 font-display text-base font-medium">{item.title}</h4>
          <p className="text-sm text-text-sub">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
