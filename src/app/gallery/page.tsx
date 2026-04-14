import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, TestimonialCard, Button } from '@/components'
import { PLACEHOLDER_TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ギャラリー',
  description:
    'ひろみフラワーデザイン教室の生徒さんたちの作品ギャラリーとお声をご紹介します。',
}

const GALLERY_PLACEHOLDERS = [
  { emoji: '🌺', h: 280 },
  { emoji: '🌻', h: 200 },
  { emoji: '🌷', h: 320 },
  { emoji: '🌼', h: 240 },
  { emoji: '🌿', h: 300 },
  { emoji: '💐', h: 220 },
  { emoji: '🌸', h: 260 },
  { emoji: '🌹', h: 340 },
  { emoji: '🌺', h: 200 },
]

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="お花仲間の作品と声" subtitle="正解はないので、全部素敵です。" />

      {/* Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle
            title="みんなの作品ギャラリー"
            subtitle="心のおもむくままに作った、世界にひとつだけの作品たちです。"
          />
          <ScrollFadeIn>
            <div className="masonry">
              {GALLERY_PLACEHOLDERS.map((item, i) => (
                <div
                  key={i}
                  className="masonry-item overflow-hidden rounded-[14px] shadow-soft transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div
                    className="flex items-center justify-center text-4xl text-text-sub"
                    style={{
                      height: item.h,
                      background: 'linear-gradient(135deg, var(--color-surface-alt), var(--color-bg))',
                    }}
                  >
                    {item.emoji}
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
          <p className="mt-8 text-center text-xs text-text-sub">
            ※ 実際の作品写真が入ります。写真をご用意いただき次第、差し替えます。
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle
            title="お花仲間の声"
            subtitle="教室に通うみなさんから届いた、うれしいお声です。"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDER_TESTIMONIALS.map((t, i) => (
              <ScrollFadeIn key={i}>
                <TestimonialCard body={t.body} age={t.age} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle
            title="あなたも、お花仲間になりませんか？"
            subtitle="「私にもできそう！」そう思ったら、ぜひ一度遊びに来てください。"
          />
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">体験に遊びに行く</Button>
              <Button href="/contact" variant="line">LINEで気軽に聞いてみる</Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
