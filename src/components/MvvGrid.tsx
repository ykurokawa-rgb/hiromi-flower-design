import { MVV } from '@/lib/constants'
import { Card } from './Card'

type Props = {
  detailed?: boolean
}

export function MvvGrid({ detailed = false }: Props) {
  const items = [MVV.mission, MVV.vision, MVV.value]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="p-10 text-center">
          <div className="mb-2 text-3xl">{item.icon}</div>
          <h3 className="mb-1 text-sm tracking-wider text-primary">
            {item.title}
            {detailed && <span className="ml-1 text-text-sub">— {item.subtitle}</span>}
          </h3>
          <p className="text-sm leading-relaxed">{item.body}</p>
        </Card>
      ))}
    </div>
  )
}
