import type { Metadata } from 'next'
import { PageHeader } from '@/components'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="プライバシーポリシー" />

      <section className="py-20">
        <div className="mx-auto max-w-[720px] px-6 text-sm leading-[2]">
          <p className="mb-8">
            {SITE_NAME}（以下「当教室」）は、お客様の個人情報の保護を重要と考え、以下のとおりプライバシーポリシーを定めます。
          </p>

          <h2 className="mb-3 mt-8 font-display text-lg font-medium">1. 個人情報の取得</h2>
          <p>
            当教室は、お問い合わせフォーム、体験申込み等を通じて、お名前、メールアドレス、電話番号等の個人情報を取得することがあります。
          </p>

          <h2 className="mb-3 mt-8 font-display text-lg font-medium">2. 個人情報の利用目的</h2>
          <p>取得した個人情報は、以下の目的に限り利用いたします。</p>
          <ul className="ml-6 mt-2 list-disc space-y-1 text-text-sub">
            <li>お問い合わせへの回答</li>
            <li>体験・レッスンに関するご連絡</li>
            <li>オーダーメイドに関するご連絡</li>
            <li>当教室からのお知らせ（ご同意いただいた場合のみ）</li>
          </ul>

          <h2 className="mb-3 mt-8 font-display text-lg font-medium">3. 個人情報の第三者提供</h2>
          <p>
            当教室は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>

          <h2 className="mb-3 mt-8 font-display text-lg font-medium">4. 個人情報の管理</h2>
          <p>
            当教室は、個人情報の正確性および安全性を確保するため、適切な管理を行います。
          </p>

          <h2 className="mb-3 mt-8 font-display text-lg font-medium">5. アクセス解析ツール</h2>
          <p>
            当サイトでは、Google Analytics を利用してアクセス情報を収集しています。
            Google Analytics は Cookie を使用してデータを収集しますが、個人を特定する情報は含まれません。
            データ収集の詳細については、Google のプライバシーポリシーをご確認ください。
          </p>

          <h2 className="mb-3 mt-8 font-display text-lg font-medium">6. お問い合わせ</h2>
          <p>
            個人情報の取扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
          </p>

          <p className="mt-12 text-right text-text-sub">制定日：2026年12月1日</p>
        </div>
      </section>
    </>
  )
}
