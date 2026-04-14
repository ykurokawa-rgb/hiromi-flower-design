import { Card } from './Card'

type Props = {
  body: string
  age: string
}

export function TestimonialCard({ body, age }: Props) {
  return (
    <Card className="p-7">
      <blockquote className="mb-4 border-l-[3px] border-primary pl-5 text-sm leading-relaxed">
        {body}
      </blockquote>
      <cite className="text-xs not-italic text-text-sub">{age}</cite>
    </Card>
  )
}
