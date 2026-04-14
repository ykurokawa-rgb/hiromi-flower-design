/**
 * Google Analytics 4 カスタムイベント送信
 */

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export function sendGAEvent({ action, category, label, value }: GtagEvent) {
  if (typeof window === 'undefined') return
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  if (!w.gtag) return

  w.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

/** CTA「体験に遊びに行く」クリック */
export function trackTrialClick(location: string) {
  sendGAEvent({ action: 'click_cta_trial', category: 'cta', label: location })
}

/** LINEボタンクリック */
export function trackLineClick(location: string) {
  sendGAEvent({ action: 'click_cta_line', category: 'cta', label: location })
}

/** フォーム送信 */
export function trackFormSubmit(purpose: string) {
  sendGAEvent({ action: 'form_submit', category: 'contact', label: purpose })
}

/** FAQ項目オープン */
export function trackFaqOpen(question: string) {
  sendGAEvent({ action: 'faq_open', category: 'faq', label: question })
}

/** ギャラリー写真クリック */
export function trackGalleryView(imageAlt: string) {
  sendGAEvent({ action: 'gallery_view', category: 'gallery', label: imageAlt })
}
