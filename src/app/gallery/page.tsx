import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, TestimonialCard, Button } from '@/components'
import { GalleryGrid } from '@/components/GalleryGrid'
import { TESTIMONIALS, LINE_URL, INSTAGRAM_URL } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ギャラリー',
  description:
    'ひろみフラワーデザイン教室の生徒さんたちの作品ギャラリーとお声をご紹介します。',
}

const GALLERY_ITEMS = [
  { src: '/images/gallery-01-spring-pastel.jpg', alt: '春のパステルアレンジメント', width: 1108, height: 1477 },
  { src: '/images/gallery-05-summer-sunflower.jpg', alt: 'ひまわりとブルーの夏アレンジ', width: 1108, height: 1477 },
  { src: '/images/gallery-04-spring-swag.jpg', alt: '春のナチュラルスワッグ', width: 1108, height: 1477 },
  { src: '/images/gallery-06-summer-yellow.jpg', alt: 'ひまわりの横長アレンジメント', width: 1706, height: 960 },
  { src: '/images/gallery-09-autumn-halloween.jpg', alt: 'ハロウィンのオレンジアレンジ', width: 1108, height: 1477 },
  { src: '/images/gallery-03-spring-bouquet.jpg', alt: 'ピンクのスイートピーブーケ', width: 1108, height: 1477 },
  { src: '/images/gallery-07-summer-tropical.jpg', alt: 'ひまわりとアンスリウムのトロピカルアレンジ', width: 720, height: 1280 },
  { src: '/images/gallery-11-winter-basket.jpg', alt: 'ブルーのドライフラワーバスケット', width: 1108, height: 1477 },
  { src: '/images/gallery-12-winter-christmas.jpg', alt: 'クリスマスツリーアレンジ', width: 1108, height: 1477 },
  { src: '/images/gallery-10-autumn-orange.jpg', alt: 'ハロウィンのかぼちゃアレンジ', width: 1108, height: 1477 },
  { src: '/images/gallery-02-spring-pink.jpg', alt: '桜とスイートピーの春アレンジ', width: 960, height: 1706 },
  { src: '/images/gallery-08-summer-gladiolus.jpg', alt: 'グラジオラスの夏アレンジ', width: 960, height: 1706 },
  { src: '/images/gallery-13-halloween-purple.jpg', alt: 'ハロウィンの紫トルコキキョウ', width: 960, height: 1706 },
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
            <GalleryGrid items={GALLERY_ITEMS} />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="mt-12 text-center">
              <p className="mb-4 text-sm text-text-sub">
                もっと作品をご覧になりたい方は、Instagramもぜひのぞいてみてください。
              </p>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagramで作品を見る"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-primary px-6 py-3 font-display text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagramで作品を見る
              </Link>
            </div>
          </ScrollFadeIn>
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
            {TESTIMONIALS.map((t, i) => (
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
              <Button href={LINE_URL} variant="line">LINEで気軽に聞いてみる</Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
