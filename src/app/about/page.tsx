import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader, ScrollFadeIn, SectionTitle, MvvGrid, Button } from '@/components'
import { INSTRUCTOR } from '@/lib/constants'

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
              <div className="h-[300px] w-[240px] shrink-0 overflow-hidden bg-surface-alt"
                style={{ borderRadius: '120px 120px 14px 14px' }}
              >
                <Image
                  src="/images/gallery-01-spring-pastel.jpg"
                  alt="渡邉博美 - ひろみフラワーデザイン教室講師"
                  width={1108}
                  height={1477}
                  className="h-full w-full object-cover"
                  sizes="240px"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-1 font-display text-xl font-medium">
                  {INSTRUCTOR.name}（{INSTRUCTOR.nameKana}）
                </h3>
                <p className="mb-4 text-sm text-text-sub">{INSTRUCTOR.role}</p>
                <div className="space-y-4 text-sm leading-[2]">
                  {INSTRUCTOR.greeting.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
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
