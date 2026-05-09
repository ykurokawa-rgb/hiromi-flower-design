import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, Card, Button } from '@/components'
import { GalleryGrid } from '@/components/GalleryGrid'
import { LINE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'オーダーメイド',
  description:
    'ウェディングブーケやお祝いのフラワーアレンジを、お花歴33年のひろみがお作りします。サイズ別・素材別の料金をご案内しています。',
}

const ORDER_CATEGORIES = [
  {
    icon: '💐',
    title: 'ウェディングブーケ',
    body: 'お二人の門出を彩る、世界にひとつだけのブーケ。季節のお花を厳選してお作りします。',
    plans: [
      { label: 'Sサイズ', detail: '直径 約20cm', price: '20,000円〜' },
      { label: 'Mサイズ', detail: '直径 約40cm', price: '40,000円〜' },
      { label: 'Lサイズ', detail: '直径 約50cm', price: '60,000円〜' },
    ],
  },
  {
    icon: '🎁',
    title: 'お祝いフラワーアレンジ',
    body: 'お誕生日、母の日、還暦祝いなど、大切な方への想いを形にしたアレンジメント。',
    plans: [
      { label: '造花', detail: '長く飾れるアーティフィシャルフラワー', price: '20,000円〜' },
      { label: '生花', detail: '季節のお花を使った瑞々しい仕上がり', price: '15,000円〜' },
    ],
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

      {/* Order Categories & Pricing */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="オーダーメニューと料金" subtitle="ご希望に合わせてお選びいただけます。" />
          <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-8 md:grid-cols-2">
            {ORDER_CATEGORIES.map((cat) => (
              <ScrollFadeIn key={cat.title}>
                <Card className="flex h-full flex-col p-8">
                  <div className="mb-3 text-center text-4xl">{cat.icon}</div>
                  <h3 className="mb-3 text-center font-display text-lg font-medium">{cat.title}</h3>
                  <p className="mb-6 text-center text-sm text-text-sub">{cat.body}</p>
                  <table className="mt-auto w-full border-collapse text-sm">
                    <tbody>
                      {cat.plans.map((plan) => (
                        <tr key={plan.label} className="border-b border-border last:border-b-0">
                          <th className="whitespace-nowrap py-3 pr-3 text-left font-medium align-top">
                            {plan.label}
                          </th>
                          <td className="py-3 pr-3 text-text-sub">{plan.detail}</td>
                          <td className="whitespace-nowrap py-3 text-right font-medium">
                            {plan.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-xs text-text-sub">
                    ※ 表記は税込価格の目安です。お花の種類やご要望により変動します。
                  </p>
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
              <Button href={LINE_URL} variant="line">LINEで相談する</Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
