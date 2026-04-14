import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, Card, FlowTimeline, FAQ, Button } from '@/components'
import { JsonLd } from '@/components/JsonLd'
import { getFaqJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'お花遊びのじかん',
  description:
    'ひろみフラワーデザイン教室のメニュー、料金、当日の流れ、よくあるご質問をご紹介します。',
}

const MENUS = [
  {
    icon: '🌺',
    title: '季節のアレンジメント',
    body: '旬のお花を使ったテーブルアレンジメント。色合わせや器選びも自由に楽しめます。',
  },
  {
    icon: '🌿',
    title: 'リース & スワッグ',
    body: '季節の草花やドライフラワーを使ったリースやスワッグ作り。お部屋に飾って長く楽しめます。',
  },
  {
    icon: '💐',
    title: '季節のブーケ',
    body: 'お花屋さんのように花束を束ねる体験。大切な方へのプレゼントにもぴったりです。',
  },
]

const PRICING = [
  { label: '参加費', value: '○○円（花材費・お茶代込み）', note: '※都度払い制' },
  { label: '所要時間', value: '約○○時間', note: 'ゆっくりお茶を飲む時間を含みます' },
  { label: '持ち物', value: '手ぶらでOK！', note: 'エプロンやハサミは貸し出しいたします' },
  { label: '開催日', value: '○曜日 ○○:○○〜', note: '※日程はお気軽にご相談ください' },
]

export default function MenuPage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd()} />

      <PageHeader
        title="お花遊びのじかん"
        subtitle="遊びの計画を立てるように、わくわくしながらご覧ください。"
      />

      {/* Seasonal Menu */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle
            title="季節のお花遊び"
            subtitle="その季節ならではのお花を使って、自由にアレンジメントを楽しみます。"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {MENUS.map((m) => (
              <ScrollFadeIn key={m.title}>
                <Card className="p-10 text-center">
                  <div className="mb-2 text-3xl">{m.icon}</div>
                  <h3 className="mb-2 font-display text-base font-medium">{m.title}</h3>
                  <p className="text-sm text-text-sub">{m.body}</p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="参加費用・システム" subtitle="気軽に参加できるシンプルな料金体系です。" />
          <ScrollFadeIn>
            <table className="mx-auto w-full max-w-[640px] border-collapse">
              <tbody>
                {PRICING.map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <th className="whitespace-nowrap bg-surface-alt px-5 py-4 text-left text-sm font-medium">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-sm">
                      {row.value}
                      <br />
                      <span className="text-xs text-text-sub">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Day Flow */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="お花遊びの1日" subtitle="当日はこんな流れで過ごします。" />
          <ScrollFadeIn>
            <FlowTimeline />
          </ScrollFadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="よくあるご質問" subtitle="初めての方からよくいただくご質問です。" />
          <ScrollFadeIn>
            <FAQ />
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle
            title="まずは一度、遊びに来てみませんか？"
            subtitle="手ぶらでOK。お気軽にどうぞ。"
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
