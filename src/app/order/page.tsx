import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, Card, Button } from '@/components'
import { GalleryGrid } from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'オーダーメイド',
  description:
    'ウェディング、お祝い、ビジネスシーンなど、お花歴33年の渡邉博美がご依頼者さまの想いを形にします。',
}

const SCENES = [
  {
    icon: '💒',
    title: 'ウェディング',
    body: 'ブーケ、ブートニア、会場装花など、お二人の門出を彩る特別なお花をお作りします。',
  },
  {
    icon: '🎁',
    title: 'お祝い・記念日',
    body: 'お誕生日、母の日、還暦祝い… 大切な方への想いを、お花に込めてお届けします。',
  },
  {
    icon: '🏢',
    title: 'ビジネス・開店祝い',
    body: 'スタンド花、アレンジメントなど、新しい門出をお祝いする華やかなお花をご用意します。',
  },
]

const ORDER_FLOW = [
  { step: 1, title: 'お問い合わせ', description: 'お問い合わせフォームまたはLINEから、お気軽にご連絡ください。' },
  { step: 2, title: 'お打ち合わせ', description: 'イメージ、ご予算、お好みをじっくりお伺いします。お写真やイメージ画像があればお見せください。' },
  { step: 3, title: '制作', description: '33年の経験を活かし、ご依頼者さまの想いを形にします。' },
  { step: 4, title: 'お引き渡し', description: '配送または手渡しでお届けします。' },
]

const ORDER_GALLERY = [
  { src: '/images/order-01-red-rose.jpg', alt: '赤バラのエレガントアレンジメント', width: 1108, height: 1477 },
  { src: '/images/order-05-gift-colorful.jpg', alt: 'カラフルなギフトアレンジメント', width: 1108, height: 1477 },
  { src: '/images/order-03-orange-rose.jpg', alt: 'オレンジローズのシックなアレンジ', width: 1108, height: 1477 },
  { src: '/images/order-04-thankyou.jpg', alt: '感謝を込めたThank Youアレンジ', width: 1108, height: 1477 },
  { src: '/images/order-07-christmas-white.jpg', alt: 'ホワイトローズのクリスマスツリー', width: 960, height: 1706 },
  { src: '/images/order-02-red-rose-white.jpg', alt: '赤バラと白枝のモダンアレンジ', width: 1108, height: 1477 },
  { src: '/images/order-06-celebration-red.jpg', alt: 'お祝いのレッドカーネーション', width: 1108, height: 1477 },
  { src: '/images/order-09-red-white.jpg', alt: '赤カーネーションと白アルストロメリア', width: 1108, height: 1477 },
  { src: '/images/order-08-christmas-tree.jpg', alt: 'ホワイトローズのクリスマスツリー', width: 960, height: 1706 },
]

export default function OrderPage() {
  return (
    <>
      <PageHeader title="オーダーメイドのフラワーアレンジ" subtitle="あなただけの特別なお花づくり" />

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <ScrollFadeIn>
            <div className="mx-auto max-w-[720px] text-center text-base leading-[2]">
              <p>
                お花歴33年の経験と技術を活かし、
                <br />
                ご依頼者さまの想いを、お花で形にします。
              </p>
              <p className="mt-4">
                大切な日のお花を、安心してお任せください。
                <br />
                お打ち合わせから丁寧にお伺いし、
                <br />
                世界にひとつだけの作品をお届けします。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Scenes */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="オーダーシーン" subtitle="さまざまな場面でのお花をお作りします。" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SCENES.map((s) => (
              <ScrollFadeIn key={s.title}>
                <Card className="p-9 text-center">
                  <div className="mb-2 text-4xl">{s.icon}</div>
                  <h3 className="mb-2 font-display text-base font-medium">{s.title}</h3>
                  <p className="text-sm text-text-sub">{s.body}</p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Order Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="過去のオーダー作品" subtitle="実際にお作りした作品の一部をご紹介します。" />
          <ScrollFadeIn>
            <GalleryGrid items={ORDER_GALLERY} />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Order Flow */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="ご依頼の流れ" subtitle="お気軽にお問い合わせください。丁寧にご対応いたします。" />
          <ScrollFadeIn>
            <div className="relative mx-auto max-w-[640px]">
              <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-border" />
              {ORDER_FLOW.map((item, i) => (
                <div key={item.step} className={`relative pl-16 ${i < ORDER_FLOW.length - 1 ? 'pb-10' : ''}`}>
                  <div className="absolute left-[10px] top-0 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <h4 className="mb-1 font-display text-base font-medium">{item.title}</h4>
                  <p className="text-sm text-text-sub">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle title="大切な日のお花、ご相談ください。" subtitle="まずはお気軽にご希望をお聞かせください。" />
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">オーダーを相談する</Button>
              <Button href="/contact" variant="line">LINEで相談する</Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
