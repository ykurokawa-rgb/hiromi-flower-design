import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, Button } from '@/components'
import { LINE_URL } from '@/lib/constants'
import { ContactForm } from './_components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'ひろみフラワーデザイン教室への体験お申し込み、オーダーのご相談、お問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="体験お申し込み・お問い合わせ"
        subtitle="「遊びに行く」最初の一歩は、ここから。"
      />

      {/* LINE CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle title="LINEが一番かんたんです" subtitle="お友だち登録して、お気軽にメッセージをお送りください。" />
          <ScrollFadeIn>
            <Button href={LINE_URL} variant="line" className="text-base! px-12! py-4!">
              💬 LINEで気軽に連絡する
            </Button>
          </ScrollFadeIn>
          <ScrollFadeIn className="mt-6">
            <p className="text-xs text-text-sub">
              ※ LINEのお友だち登録後、お気軽にメッセージをお送りください。
              <br />
              ※ LINEをお使いでない方は、下記フォームをご利用ください。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Form & Info */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="フォームからのお問い合わせ" subtitle="必要事項をご入力の上、お気軽にお送りください。" />
          <ScrollFadeIn>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              {/* Form */}
              <ContactForm />

              {/* Info */}
              <div className="flex flex-col gap-6">
                <div className="rounded-[14px] bg-surface p-7 shadow-soft">
                  <h3 className="mb-4 font-display text-base font-medium">教室情報</h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-alt text-lg">🏠</div>
                      <div>
                        <h4 className="text-sm font-medium">教室（3か所）</h4>
                        <p className="text-xs text-text-sub">寄居教室<br />ルネ大泉学園教室<br />大泉レトリックカルチャー教室</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-alt text-lg">💰</div>
                      <div>
                        <h4 className="text-sm font-medium">月謝</h4>
                        <p className="text-xs text-text-sub">月5,000円（税込・花材費込み）</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-alt text-lg">🕐</div>
                      <div>
                        <h4 className="text-sm font-medium">所要時間</h4>
                        <p className="text-xs text-text-sub">約2時間<br />※ 日程はお気軽にご相談ください</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-alt text-lg">👜</div>
                      <div>
                        <h4 className="text-sm font-medium">持ち物</h4>
                        <p className="text-xs text-text-sub">手ぶらでOK！<br />エプロン・ハサミは貸し出しいたします</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="flex h-[240px] items-center justify-center rounded-[14px] bg-surface-alt text-sm text-text-sub">
                  🗺 Googleマップがここに入ります
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Closing message */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <ScrollFadeIn>
            <p className="font-display text-lg leading-[2]">
              わからないこと、不安なこと、
              <br />
              なんでもお気軽にお聞きください。
              <br />
              一緒にお花で遊べる日を、楽しみにしています。
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
