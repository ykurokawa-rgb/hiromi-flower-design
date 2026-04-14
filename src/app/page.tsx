import { ScrollFadeIn } from '@/components/ScrollFadeIn'
import { Button } from '@/components/Button'
import { SectionTitle } from '@/components/SectionTitle'
import { MvvGrid } from '@/components/MvvGrid'
import { FlowTimeline } from '@/components/FlowTimeline'
import { JsonLd } from '@/components/JsonLd'
import { getWebSiteJsonLd } from '@/lib/structured-data'
import { TestimonialCard } from '@/components/TestimonialCard'
import { PLACEHOLDER_TESTIMONIALS } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <JsonLd data={getWebSiteJsonLd()} />

      {/* ===== Hero ===== */}
      <section
        className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-[72px] text-center"
        style={{
          background: 'linear-gradient(135deg, #FAF9F5 0%, #F5F2EB 50%, #fdf0ee 100%)',
        }}
      >
        {/* Background decoration */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-12"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <circle cx="200" cy="150" r="180" fill="#E08A82" opacity="0.08" />
          <circle cx="650" cy="400" r="220" fill="#EAC775" opacity="0.06" />
          <circle cx="400" cy="500" r="150" fill="#8BA888" opacity="0.05" />
        </svg>

        <div className="relative z-10 max-w-[700px] px-6 py-10">
          <ScrollFadeIn>
            <p className="mb-4 text-sm tracking-[0.15em] text-text-sub">HIROMI FLOWER DESIGN</p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div
              className="mx-auto mb-8 flex h-[280px] w-[280px] items-center justify-center rounded-full text-6xl opacity-20"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              }}
            >
              🌸
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <h1 className="mb-1 font-display text-3xl font-medium md:text-5xl">
              一緒に、<em className="not-italic text-primary">お花で遊び</em>ませんか。
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p className="mb-8 font-display text-base leading-relaxed text-text-sub md:text-lg">
              心ほどける季節のアレンジメント。
              <br />
              教えるのではなく、一緒に遊ぶ。
              <br />
              ここは、お花と笑顔の遊び場です。
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">体験に遊びに行く</Button>
              <Button href="/about" variant="outline">
                教室をのぞいてみる
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== MVV ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle
            title="わたしたちの想い"
            subtitle="お花に触れる純粋な「楽しさ」と「癒し」を、一人でも多くの人と分かち合いたい。"
          />
          <ScrollFadeIn>
            <MvvGrid />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== Instructor Intro ===== */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle title="お花歴33年の「遊び仲間」" />
          <ScrollFadeIn>
            <p className="mx-auto max-w-[720px] text-base leading-[2]">
              こんにちは、渡邉博美です。
              <br />
              お花にふれて33年。ずっと変わらないのは「お花って楽しい！」という気持ちです。
              <br />
              ここでは先生ではなく、みなさんの「お花仲間」でいたいと思っています。
              <br />
              一緒にお花で遊びませんか？
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn className="mt-8">
            <Button href="/about" variant="outline">
              もっと知る
            </Button>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== Day Flow ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle
            title="お花遊びのじかん"
            subtitle="季節のお花を使って、自由にアレンジメントを楽しむ時間です。"
          />
          <ScrollFadeIn>
            <FlowTimeline />
          </ScrollFadeIn>
          <ScrollFadeIn className="mt-12 text-center">
            <Button href="/menu">詳しく見る</Button>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <SectionTitle
            title="お花仲間の声"
            subtitle="教室に通うみなさんから届いた、うれしいお声をご紹介します。"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PLACEHOLDER_TESTIMONIALS.slice(0, 3).map((t, i) => (
              <ScrollFadeIn key={i}>
                <TestimonialCard body={t.body} age={t.age} />
              </ScrollFadeIn>
            ))}
          </div>
          <ScrollFadeIn className="mt-12 text-center">
            <Button href="/gallery" variant="outline">
              もっと見る
            </Button>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <SectionTitle
            title="お花で遊んでみませんか？"
            subtitle="初めての方も大歓迎。手ぶらでお気軽にどうぞ。"
          />
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">体験に遊びに行く</Button>
              <Button href="/contact" variant="line">
                LINEで気軽に聞いてみる
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
