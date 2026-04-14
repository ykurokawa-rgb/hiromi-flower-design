import { ScrollFadeIn } from './ScrollFadeIn'

type Props = {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: Props) {
  return (
    <div
      className="pt-[120px] pb-12 text-center"
      style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #fdf0ee 100%)' }}
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollFadeIn>
          <h1 className="mb-1 font-display text-2xl font-medium md:text-3xl">{title}</h1>
        </ScrollFadeIn>
        {subtitle && (
          <ScrollFadeIn>
            <p className="text-sm text-text-sub">{subtitle}</p>
          </ScrollFadeIn>
        )}
      </div>
    </div>
  )
}
