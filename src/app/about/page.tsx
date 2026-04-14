import type { Metadata } from 'next'
import { PageHeader, ScrollFadeIn, SectionTitle, MvvGrid, Button } from '@/components'

export const metadata: Metadata = {
  title: '教室について',
  description:
    'ひろみフラワーデザイン教室の想いと、講師・渡邉博美のプロフィールをご紹介します。',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ひろみフラワーデザイン教室について" subtitle="教えるのではなく、一緒に遊ぶ。" />

      {/* Concept Message */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="わたしたちの想い" />
          <ScrollFadeIn>
            <div className="mx-auto max-w-[720px] text-center text-base leading-[2]">
              <p>
                お花に触れる時間は、日常のあわただしさを忘れて、
                <br />
                心がふっとほどける、特別なひとときです。
              </p>
              <p className="mt-6">
                色とりどりの花を手に取り、自由にデザインを考える。
                <br />
                その時間に「正解」はありません。
              </p>
              <p className="mt-6">
                大切なのは、お花を触って、
                <br />
                心のおもむくままに表現する「楽しさ」そのもの。
              </p>
              <p className="mt-6">
                この教室は、「教える場」ではなく「一緒に遊ぶ場」。
                <br />
                一人でも多くの方と、お花の楽しさを分かち合いたい。
                <br />
                それが、わたしたちの変わらない想いです。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* MVV */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <ScrollFadeIn>
            <MvvGrid detailed />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle title="講師プロフィール" subtitle="あなたのお花仲間、渡邉博美です。" />
          <ScrollFadeIn>
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
              {/* Photo placeholder */}
              <div className="flex h-[300px] w-[240px] shrink-0 items-center justify-center overflow-hidden bg-surface-alt text-5xl text-text-sub"
                style={{ borderRadius: '120px 120px 14px 14px' }}
              >
                {/* 写真に差し替え: <Image src="/images/hiromi.jpg" ... /> */}
                👩
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-1 font-display text-xl font-medium">
                  渡邉 博美（わたなべ ひろみ）
                </h3>
                <p className="mb-4 text-sm text-text-sub">フラワーデザイナー・お花歴33年</p>
                <div className="space-y-4 text-sm leading-[2]">
                  <p>
                    こんにちは、渡邉博美です。
                  </p>
                  <p>
                    お花歴33年になりますが、ここでは「先生」ではなく、
                    皆さんのお花仲間になりたいと思っています。
                  </p>
                  <p>
                    お花を始めた頃から変わらないのは、「お花って楽しい！」という
                    シンプルな気持ち。花を触って、色を選んで、デザインを考えて…
                    その時間がただただ楽しくて、気づいたら33年が経っていました。
                  </p>
                  <p>
                    この教室では、型にはまった「正しいアレンジメント」を教えるのではなく、
                    皆さんが心のおもむくままに、自由にお花を楽しめる時間を大切にしています。
                    迷った時には、33年分の「引き出し」からアイデアをお出しします。
                    それが私にできる、仲間としてのお手伝いです。
                  </p>
                  <p>
                    色々な年代の方が集まって、お花を通じて笑顔になる。
                    そんな温かい時間を、あなたとも一緒に過ごせたらうれしいです。
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle title="一緒にお花で遊びませんか？" subtitle="初めての方も、お一人さまも大歓迎です。" />
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">体験に遊びに行く</Button>
              <Button href="/menu" variant="outline">お花遊びの詳細を見る</Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
